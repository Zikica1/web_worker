import './ourMissions.css';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Hading from '../../header/Hading';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '../../buttons/primaButton/ButtonPrimary';
import useIsMobile from '../../../hook/useIsMobile';

const headerVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const dividerVariant = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const paraVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const buttonVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imgOneVariant = {
  hidden: {
    x: -30,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imgTwoVariant = {
  hidden: {
    x: 30,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const OurMissions = () => {
  const { t, i18n } = useTranslation();
  const refTitle = useRef(null);
  const refDivider = useRef(null);
  const refPara = useRef(null);
  const refButton = useRef(null);
  const refImgOne = useRef(null);
  const refImgTwo = useRef(null);

  const lang = i18n.language;

  const isMobile = useIsMobile(1020);

  const isInView = useInView(refTitle, {
    once: true,
    amount: 0.5,
  });

  const isInView2 = useInView(refDivider, {
    once: true,
    amount: 1,
  });

  const isInView3 = useInView(refPara, {
    once: true,
    amount: 1,
  });
  const isInView4 = useInView(refButton, {
    once: true,
    amount: 1,
  });

  const isInView5 = useInView(refImgOne, {
    once: false,
    amount: 0.1,
    margin: '0px 0px -400px 0px',
  });

  const isInView6 = useInView(refImgTwo, {
    once: false,
    amount: 0.9,
  });

  return (
    <section className='ourMission'>
      <div className='ourMissionWrapper'>
        <div className='ourMissionContent'>
          <motion.div
            variants={headerVariant}
            ref={refTitle}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='ourMissionContentTitle-ani'
          >
            <Hading i18nKey={'ourMission.title'} sizeFont={45} />
          </motion.div>
          <motion.img
            ref={refDivider}
            variants={dividerVariant}
            initial='hidden'
            animate={isInView2 ? 'visible' : 'hidden'}
            src='/assets/pictures/services/divider.webp'
            alt='img-divider'
          />
          <motion.p
            ref={refPara}
            variants={paraVariant}
            initial='hidden'
            animate={isInView3 ? 'visible' : 'hidden'}
            className='ourMissionContent-par'
          >
            {t('ourMission.text')}
          </motion.p>
          <motion.div
            ref={refButton}
            variants={buttonVariant}
            initial='hidden'
            animate={isInView4 ? 'visible' : 'hidden'}
          >
            <ButtonPrimary url={lang === 'sr' ? 'o-nama' : 'about'} />
          </motion.div>
        </div>
        <div className='ourMissionImage'>
          <div className='ourMissionImage-picture'>
            <motion.picture
              className='ourMissionImage-one'
              ref={refImgOne}
              variants={imgOneVariant}
              initial='hidden'
              animate={isInView5 || isMobile ? 'visible' : 'hidden'}
            >
              <source
                media='(max-width: 480px'
                srcSet='/assets/pictures/home/ourMission/ourMission2-img-480px.webp 1x,/assets/pictures/home/ourMission/ourMission2-img-480px@2x.webp 2x'
              />
              <source
                media='(max-width: 768px)'
                srcSet='/assets/pictures/home/ourMission/ourMission2-img-768px.webp'
              />

              <img
                src='/assets/pictures/home/ourMission/ourMission2-img-1024px.webp'
                alt='a man works at a desk'
                loading='lazy'
                decoding='async'
                width='1024'
                height='872'
              />
            </motion.picture>

            <motion.picture
              ref={refImgTwo}
              variants={imgTwoVariant}
              initial='hidden'
              animate={isInView6 || isMobile ? 'visible' : 'hidden'}
              className='ourMissionImage-two'
              style={{ borderRadius: '24px' }}
            >
              <source
                media='(max-width: 480px'
                srcSet='/assets/pictures/home/ourMission/ourMission-img-480px.webp 1x,/assets/pictures/home/ourMission/ourMission-img-480px@2x.webp 2x'
              />
              <source
                media='(max-width: 768px)'
                srcSet='/assets/pictures/home/ourMission/ourMission-img-768px.webp'
              />

              <img
                src='/assets/pictures/home/ourMission/ourMission-img-1024px.webp'
                alt='The girl is sitting at the table'
                loading='lazy'
                decoding='async'
                width='1024'
                height='820'
              />
            </motion.picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissions;
