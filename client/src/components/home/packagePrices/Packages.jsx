import './packages.css';
import Hading from '../../header/Hading';
import PackageCard from './PackageCard';
import ButtonPrimary from '../../buttons/primaButton/ButtonPrimary';
import { useRef } from 'react';
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
      duration: 0.75,
    },
  },
};

const Packages = () => {
  const { t, i18n } = useTranslation();
  const refTitle = useRef(null);
  const refPara = useRef(null);

  const lang = i18n.language;

  const isInView = useInView(refTitle, {
    once: true,
    amount: 0.75,
  });

  const isInView2 = useInView(refPara, {
    once: true,
    amount: 0.75,
  });

  return (
    <section className='packagesPri'>
      <div className='packagesPriWrapper'>
        <div className='packagesPriHead' style={{ overflowX: 'clip' }}>
          <motion.div
            ref={refTitle}
            initial='hidden'
            variants={headVar}
            animate={isInView ? 'visible' : 'hidden'}
            className='packagesPriHead-title'
          >
            <Hading i18nKey={'priceList.title'} />
            <img
              className='packagesPriHead-divider'
              src='/assets/pictures/services/divider.webp'
              alt='divider'
            />
          </motion.div>
          <motion.p
            initial='hidden'
            variants={headVar}
            animate={isInView2 ? 'visible' : 'hidden'}
            ref={refPara}
            className='packagesPriHead-para'
          >
            {t('priceList.text')}
          </motion.p>

          <ButtonPrimary
            url={lang === 'sr' ? 'kontakt' : 'contact'}
            text='buttons.priceText'
          />
        </div>
        <div className='packagePriBody'>
          <ul className='packageCards' style={{ overflowX: 'clip' }}>
            {[1, 2, 3].map((num) => (
              <PackageCard key={num} index={num} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
