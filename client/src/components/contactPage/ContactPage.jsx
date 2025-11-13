import './contactPage.css';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import axiosMain from '../../api/axios';
import { FaRegPaperPlane, FaRegEnvelope, FaCheck } from 'react-icons/fa';
import { useAnimate, useInView } from 'motion/react';
import { contact } from '../../data/db';
import ContactCard from './ContactCard';

const ContactPage = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState({
    name: '',
    mail: '',
    subject: '',
    phone: '',
    text: '',
  });
  const [status, setStatus] = useState('typing');
  const [msgErr, setMsgErr] = useState(null);
  const [scope, animate] = useAnimate();
  const refErr = useRef(null);
  const timeoutRef = useRef(null);
  const sendingRef = useRef(null);

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (status === 'sent') {
      timeoutRef.current = setTimeout(() => {
        setStatus('typing');
        sendingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 3500);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axiosMain.post('/contact', {
        name: message.name,
        mail: message.mail,
        subject: message.subject,
        phone: message.phone,
        text: message.text,
      });
      setMsgErr(null);
      setMessage({
        name: '',
        mail: '',
        subject: '',
        phone: '',
        text: '',
      });
      setStatus('sent');
    } catch (err) {
      if (!err.response) {
        setMsgErr('No server response');
      } else if (err.response.status === 400) {
        setMsgErr(
          'One of the fields name,email,subjects,phone,text is missing'
        );
      } else {
        setMsgErr('Sending failed');
      }

      refErr.current?.scrollIntoView({ behavior: 'smooth' });
      setStatus('typing');
    }
  };

  const isInView = useInView(scope, {
    once: true,
    amount: 0,
  });

  useEffect(() => {
    if (isInView) {
      animate([
        ['.contactWrapper-title', { opacity: 1, y: 0 }, { duration: 0.8 }],
        ['.contactWrapper-para', { opacity: 1, x: 0 }, { duration: 0.8 }],
        [
          '.contactPageFormContainer',
          { opacity: 1, y: '-15%' },
          { duration: 0.5 },
        ],
      ]);
    }
  }, [isInView, animate]);

  return (
    <section ref={scope} className='contactPag'>
      <div className='contactWrapper'>
        <div className='contactPageOverlay'></div>
        <h1 className='contactWrapper-title'>{t('contact.title')}</h1>
        <p className='contactWrapper-para'>{t('contact.sectionPara')}</p>
      </div>

      <div className='contactPageFormContainer'>
        <div className='contactPageForm-wrapper'>
          <p ref={refErr} className={msgErr !== null ? 'errMsg' : 'offscreen'}>
            {msgErr}
          </p>
          <div
            style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}
            ref={sendingRef}
            className={status === 'sent' ? 'isSending' : 'offscreen'}
          >
            <p className='message-success'>Message sent</p>
            <FaCheck className='icon-valid' />
          </div>

          {status === 'sending' && <p>Sending...</p>}
          <div className='contactPageFormContainer-head'>
            <h3 className='contactFormContainer-title'>
              {t('contact.form.subtitle')}
            </h3>
            <FaRegEnvelope className='contactIconLetter' />
          </div>

          <form className='contactPageForm' action='' onSubmit={handleSubmit}>
            <div className='contactPageForm-column'>
              <label htmlFor='name'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  autoComplete='off'
                  placeholder={t('contact.form.name')}
                  required
                  value={message.name}
                  onChange={(e) => handleChange(e)}
                />
              </label>

              <label htmlFor='email'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder={t('contact.form.email')}
                  autoComplete='off'
                  required
                  value={message.mail}
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            <div className='contactPageForm-column'>
              <label htmlFor='phone'>
                <input
                  type='number'
                  id='phone'
                  name='phone'
                  placeholder={t('contact.form.number')}
                  autoComplete='off'
                  required
                  value={message.phone}
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label htmlFor='subject'>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder={t('contact.form.subject')}
                  autoComplete='off'
                  required
                  value={message.subject}
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            <label htmlFor='text'>
              <textarea
                name='text'
                id='text'
                placeholder={t('contact.form.message')}
                required
                value={message.text}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </label>
            <button className='contactForm-button'>
              <FaRegPaperPlane className='contactForm-icon' />
            </button>
          </form>
        </div>

        <aside className='contactInfo'>
          <h3 className='contactInfo-title'>
            {t('contact.contactInfo.title')}
          </h3>
          <ul className='contactInfo-list'>
            {contact.map((item) => (
              <ContactCard key={item.id} item={item} index={item.id} />
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default ContactPage;
