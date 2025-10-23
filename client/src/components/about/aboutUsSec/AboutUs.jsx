import './aboutUs.css';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import { about } from '../../../data/db';
import AboutUsItem from './AboutUsItem';

const subtitleVar = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const titleVar = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refTitle = useRef(null);
  const refSubtitle = useRef(null);
  const { t } = useTranslation();
  const imageRef = useRef(null);

  const visible = useInView(refSubtitle, {
    once: true,
    amount: 0.1,
  });

  const visibleTit = useInView(refTitle, {
    once: true,
    amount: 0.1,
  });

  useEffect(() => {
    const observerImg = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerImg.disconnect();
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (imageRef.current) observerImg.observe(imageRef.current);

    return () => observerImg.disconnect();
  }, [setIsVisible]);

  return (
    <section className='aboutUs'>
      <motion.h1
        ref={refTitle}
        className='aboutUs-title'
        variants={titleVar}
        initial='hidden'
        animate={visibleTit ? 'visible' : 'hidden'}
      >
        {t('about.mainTitle')}
      </motion.h1>
      <div className='aboutUsWrapper'>
        <div className='aboutUsContent'>
          <motion.div
            ref={refSubtitle}
            className='subtitle-ani'
            variants={subtitleVar}
            initial='hidden'
            animate={visible ? 'visible' : 'hidden'}
          >
            <h2 className='aboutUsContent-subtitle'>
              {t('about.aboutUs.title')}
            </h2>
            <div className='aboutUsContent-divider'></div>
          </motion.div>

          <ul className='aboutUsList'>
            {about.map((a) => (
              <AboutUsItem key={a.id} item={a} />
            ))}
          </ul>
        </div>
        <div className='aboutUs-picture'>
          <picture>
            <source
              media='(max-width:480px)'
              srcSet='/assets/pictures/about/aboutUs-img-450px.webp 1x,
              /assets/pictures/about/aboutUs-img-450px@2x.webp 2x'
            />
            <source
              media='(max-width:768px)'
              srcSet='/assets/pictures/about/aboutUs-img-768px.webp'
            />

            <img
              ref={imageRef}
              className={`aboutUs-img ${isVisible ? 'visible' : ''}`}
              src='/assets/pictures/about/aboutUs-img-1024px.webp'
              alt={t('about.aboutUs.alt')}
              height='1024'
              width='1024'
              decoding='async'
              fetchPriority='high'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
