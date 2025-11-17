import './service.css';
import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView, useAnimate } from 'motion/react';
import Hading from '../header/Hading';
import ServicesCards from './ServicesCards';
import { useTranslation } from 'react-i18next';

const titleVar = {
  hidden: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 0.85,
      ease: 'easeInOut',
    },
  },
};

const dividerVar = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

const paraVar = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const refImg = useRef(null);
  const refTitle = useRef(null);
  const refDiv = useRef(null);
  const refPar = useRef(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
      }
    );

    if (refImg.current) observer.observe(refImg.current);

    return () => observer.disconnect();
  }, []);

  const isInView2 = useInView(refTitle, {
    once: true,
    amount: 0,
  });
  const isInView3 = useInView(refDiv, {
    once: true,
    amount: 0.5,
    margin: '0px 0px -20px 0px',
  });

  const isInView4 = useInView(refPar, {
    once: true,
    amount: 0.5,
  });

  const isInView5 = useInView(scope, {
    once: true,
    amount: 0.25,
  });

  useEffect(() => {
    if (isInView5) {
      animate([
        ['.aniSerBottom', { y: 0, opacity: 1 }, { duration: 0.75 }],
        [
          '.servicesListHead-img',
          { x: 0, opacity: 1 },
          { duration: 0.75, daley: 0.3 },
        ],
      ]);
    }
  }, [isInView5, animate]);

  return (
    <section className='service' key={location.pathname}>
      <motion.h1
        className='serviceTitle'
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8 }}
      >
        Service
      </motion.h1>
      <div className='serviceWrapper'>
        <div className='serviceImg'>
          <picture>
            <source
              media='(max-width: 480px)'
              srcSet='/assets/pictures/services/web-dizajn-i-razvoj-kreiranje-sajta-tim-480px.webp 1x,
            /assets/pictures/services/web-dizajn-i-razvoj-kreiranje-sajta-tim-480px@2x.webp 2x'
            />
            <source
              media='(max-width: 768px)'
              srcSet='/assets/pictures/services/web-dizajn-i-razvoj-kreiranje-sajta-tim-768px.webp'
            />
            <motion.img
              ref={refImg}
              className={`img-service ${isVisible ? 'visible' : ''}`}
              src='/assets/pictures/services/web-dizajn-i-razvoj-kreiranje-sajta-tim-1024px.webp'
              alt={t('service.top.alt')}
              fetchPriority='high'
              decoding='async'
              width='1024'
              height='683'
            />
          </picture>
        </div>
        <div className='serviceDes'>
          <div className='serviceHead'>
            <motion.div
              ref={refTitle}
              variants={titleVar}
              initial='hidden'
              animate={isInView2 ? 'visible' : 'hidden'}
              style={{ transformOrigin: 'left' }}
            >
              <Hading i18nKey='service.top.title' />
            </motion.div>

            <motion.img
              ref={refDiv}
              variants={dividerVar}
              initial='hidden'
              animate={isInView3 ? 'visible' : 'hidden'}
              className='serviceHead-image'
              src='/assets/pictures/services/divider.webp'
              alt='divider'
              width='84'
              height='8'
              loading='lazy'
              decoding='async'
            />
          </div>

          <motion.p
            ref={refPar}
            className='serviceDes-para'
            variants={paraVar}
            initial='hidden'
            animate={isInView4 ? 'visible' : 'hidden'}
          >
            {t('service.top.description')}
          </motion.p>
        </div>
      </div>

      <div className='servicesList'>
        <div ref={scope} className='servicesListHead'>
          <motion.div className='aniSerBottom' initial={{ opacity: 0, y: 50 }}>
            <Hading i18nKey='service.bottom.title' />
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            className='servicesListHead-img'
            src='/assets/pictures/services/divider.webp'
            alt='divider'
          />
        </div>
        <ServicesCards />
      </div>
    </section>
  );
};

export default Service;
