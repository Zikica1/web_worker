import './homeServices.css';
import Hading from '../../header/Hading';
import ServicesCards from '../../services/ServicesCards';
import ButtonPrimary from '../../buttons/primaButton/ButtonPrimary';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const homeServiceTitleVariants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const HomeServices = () => {
  const refHead = useRef(null);
  const isInView = useInView(refHead, {
    once: true,
    amount: 0.75,
  });

  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className='homeServices'>
      <div className='homeServiceWrapper'>
        <div className='homeServiceCont'>
          <div className='homeServicesHad' style={{ overflow: 'hidden' }}>
            <motion.div
              ref={refHead}
              variants={homeServiceTitleVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Hading i18nKey='homeService.title' />
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{
                duration: 0.5,
              }}
              className='homeServicesHad-divider'
              src='/assets/pictures/services/divider.webp'
              alt='divider'
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <ButtonPrimary url={lang === 'sr' ? 'usluge' : 'services'} />
          </motion.div>
        </div>
        <ServicesCards />
      </div>
    </section>
  );
};

export default HomeServices;
