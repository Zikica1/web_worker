import './ourVision.css';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';

const headVar = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const paraVar = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const OurVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refPicture = useRef(null);
  const refHead = useRef(null);
  const refPara = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observerPict = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerPict.disconnect();
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (refPicture.current) observerPict.observe(refPicture.current);

    return () => observerPict.disconnect();
  }, []);

  const show = useInView(refHead, {
    once: true,
    amount: 0.6,
  });

  const showPar = useInView(refHead, {
    once: true,
    amount: 0.8,
  });

  return (
    <section className='ourVision'>
      <div className='ourVision-wrap'>
        <div className='ourVision-picture'>
          <picture>
            <source
              media='(max-width: 480px)'
              srcSet='/assets/pictures/about/ourVision-img-450px.webp 1x,
              /assets/pictures/about/ourVision-img-450px@2x.webp 2x'
            />
            <source
              media='(max-width: 768px)'
              srcSet='/assets/pictures/about/ourVision-img-768px.webp'
            />
            <img
              ref={refPicture}
              className={`ourVision-img ${isVisible ? 'visible' : ''}`}
              loading='lazy'
              decoding='async'
              width='1373'
              height='1031'
              src='/assets/pictures/about/ourVision-img-1373px.webp'
              alt={t('about.ourVision.alt')}
            />
          </picture>
        </div>
        <div className='ourVision-content'>
          <motion.div
            ref={refHead}
            className='ourVision-head'
            variants={headVar}
            initial='hidden'
            animate={show ? 'visible' : 'hidden'}
          >
            <h2 className='ourVision-title'>{t('about.ourVision.title')}</h2>
          </motion.div>
          <motion.p
            ref={refPara}
            className='ourVision-text'
            variants={paraVar}
            initial='hidden'
            animate={showPar ? 'visible' : 'hidden'}
          >
            {t('about.ourVision.text')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
