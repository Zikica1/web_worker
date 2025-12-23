import './aboutUsItem.css';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'motion/react';

const AboutUsItem = ({ item }) => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const isVisible = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <li ref={ref} className={`aboutUsItem ${isVisible ? 'visible' : ''}`}>
      <img
        className='aboutUsItem-icon'
        src={item.img}
        alt='icons palette, gear and rocket'
      />

      <div>
        <h3 className='aboutUsItem-title'>
          {t(`about.aboutUs.list.${item.id}.title`)}
        </h3>
        <p className='aboutUsItem-text'>
          {t(`about.aboutUs.list.${item.id}.text`)}
        </p>
      </div>
    </li>
  );
};

export default AboutUsItem;
