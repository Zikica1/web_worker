import { useRef } from 'react';
import { motion } from 'motion/react';
import { MdPlayArrow } from 'react-icons/md';
import { useTranslation, Trans } from 'react-i18next';

const HeroCard = ({ item, refItem, handleNext, handlePrevious }) => {
  const wrapperRef = useRef(null);
  const animRefs = useRef([]);
  const { t } = useTranslation();

  return (
    <li
      ref={(el) => {
        refItem(el);
      }}
      className='heroSlides-item'
      key={item.id}
    >
      <div className='heroSlides-leftCol'>
        <motion.h2
          className='heroSlides-subtitle'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          {t(`hero.${item.id}.subtitle`)}
        </motion.h2>
        <motion.h1
          className='heroSlides-title'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.75,
            delay: 0.5,
          }}
        >
          <Trans
            i18nKey={`hero.${item.id}.title`}
            components={{ span: <span className='heroSlides-span' /> }}
          />
        </motion.h1>
        <motion.p
          className='heroSlides-des'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          {t(`hero.${item.id}.description`)}
        </motion.p>
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
      <div className='heroSlides-rightCol'>
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
          }}
          ref={wrapperRef}
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
          />
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              initial={{ scaleX: 0.6, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                mass: 2,
                damping: 9,
                delay: 0.8,
              }}
              key={num}
              ref={(el) => (animRefs.current[num - 1] = el)}
              className={`heroSlide-anim heroSlide-anim--${num}`}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </li>
  );
};

export default HeroCard;
