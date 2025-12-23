import './aboutUs.css';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import { about } from '../../../data/db';
import AboutUsItem from './AboutUsItem';

const titleVar = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refTitle = useRef(null);
  const { t } = useTranslation();
  const imageRef = useRef(null);

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
          <h2 className='aboutUsContent-subtitle'>
            {t('about.aboutUs.title')}
          </h2>
          <div className='aboutUsContent-divider'></div>

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
              srcSet='/assets/pictures/about/kreiranje-web-sajta-zadovoljna-klijentkinja-450px-450px@2x.webp 1x,
              /assets/pictures/about/kreiranje-web-sajta-zadovoljna-klijentkinja-450px-450px@2x.webp 2x'
            />
            <source
              media='(max-width:768px)'
              srcSet='/assets/pictures/about/kreiranje-web-sajta-zadovoljna-klijentkinja-450px-450px@2x.webp'
            />

            <img
              ref={imageRef}
              className={`aboutUs-img ${isVisible ? 'visible' : ''}`}
              src='/assets/pictures/about/kreiranje-web-sajta-zadovoljna-klijentkinja-1024px.webp'
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
