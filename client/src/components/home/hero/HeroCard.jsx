import { useRef, useEffect } from 'react';
import { easeIn, motion, useInView, useAnimate } from 'motion/react';
import { MdPlayArrow } from 'react-icons/md';
import { useTranslation, Trans } from 'react-i18next';
import ButtonPrimary from '../../buttons/primaButton/ButtonPrimary';

const cardImgVar = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: easeIn,
    },
  },
};

const cardItemsVar = {
  hidden: { opacity: 0, scaleX: 0.6 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      mass: 2,
      damping: 9,
      delay: 0.5,
    },
  },
};

const HeroCard = ({ item, refItem, handleNext, handlePrevious }) => {
  const cardImgRef = useRef(null);
  const [scope, animate] = useAnimate();
  const { t } = useTranslation();

  const isInView = useInView(cardImgRef, {
    once: false,
    amount: 0.1,
  });

  const isInView2 = useInView(scope, {
    once: false,
    amount: 0.25,
  });

  useEffect(() => {
    if (isInView2) {
      animate([
        [
          '.heroSlides-title',
          { opacity: 1, x: 0 },
          { duration: 0.75, daley: 0.5 },
        ],
        [
          '.heroSlides-subtitle',
          { opacity: 1, x: 0 },
          { type: 'tween', duration: 0.6, daley: 0.2 },
        ],
        [
          '.heroSlides-des',
          { opacity: 1 },
          { type: 'tween', duration: 0.5, daley: 0.5 },
        ],
      ]);
    }
  }, [isInView2, animate]);

  return (
    <li
      ref={(el) => {
        refItem(el);
      }}
      className='heroSlides-item'
      key={item.id}
    >
      <div className='heroSlides-leftCol'>
        <div ref={scope}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            className='heroSlides-subtitle'
          >
            {t(`hero.${item.id}.subtitle`)}
          </motion.h2>
          <motion.h1
            className='heroSlides-title'
            initial={{ opacity: 0, x: 100 }}
          >
            <Trans
              i18nKey={`hero.${item.id}.title`}
              components={{ span: <span className='heroSlides-span' /> }}
            />
          </motion.h1>
          <motion.p className='heroSlides-des' initial={{ opacity: 0 }}>
            {t(`hero.${item.id}.description`)}
          </motion.p>
        </div>

        <div className='heroSlices-buttonsContainer'>
          <ButtonPrimary url='about' heroButton='heroButton' />
          <div className='heroSlides-buttonWrap'>
            <button
              onClick={() => {
                handlePrevious();
              }}
              className='heroSlides-button heroSlides-button--rotate'
            >
              <MdPlayArrow />
            </button>
            <button
              onClick={() => {
                handleNext();
              }}
              className='heroSlides-button'
            >
              <MdPlayArrow />
            </button>
          </div>
        </div>
      </div>
      <div className='heroSlides-rightCol'>
        <motion.div
          ref={cardImgRef}
          variants={cardImgVar}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          key={item.id}
          className='heroSlides-images'
        >
          <img
            className='heroSlide-img'
            srcSet={`${item.imgMob} 325w,${item.imgMob2} 650w,${item.imgTab} 586w,${item.imgDes} 822w`}
            sizes='(max-width: 768px) 325px,(max-width: 1024px) 440px,(min-width: 1025px) 625px'
            src={item.imgDes}
            alt='hero-slide-img'
            draggable={false}
            fetchPriority='high'
            decoding='async'
          />
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              variants={cardItemsVar}
              key={num}
              className={`heroSlide-anim heroSlide-anim--${num}`}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </li>
  );
};

export default HeroCard;
