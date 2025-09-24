import './aboutUsItem.css';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';

const itemVar = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AboutUsItem = ({ item }) => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const isVisible = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.li
      ref={ref}
      className='aboutUsItem'
      variants={itemVar}
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
    >
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
    </motion.li>
  );
};

export default AboutUsItem;
