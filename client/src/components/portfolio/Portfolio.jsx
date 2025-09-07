import './portfolio.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView, useAnimate } from 'motion/react';
import Hading from '../header/Hading';
import { useTranslation } from 'react-i18next';
import PortfolioCard from './PortfolioCard';
import ButtonPrimary from '../buttons/primaButton/ButtonPrimary';
import { portfolio } from '../../data/db';

const Portfolio = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scope, animate] = useAnimate();

  const home = location.pathname === '/';

  const portfolioFilter = home ? portfolio.slice(0, 3) : portfolio;

  const isInView = useInView(scope, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      animate([
        ['.portfolioHeader', { opacity: 1, x: 0 }, { duration: 0.75 }],
        ['.portfolioPara', { opacity: 1, x: 0 }, { duration: 0.75 }],
      ]);
    }
  }, [isInView, animate]);

  return (
    <section className='portfolio' key={location.pathname}>
      <div ref={scope} className='portfolioContentWrapper'>
        <motion.div
          className='portfolioHeader'
          initial={{ opacity: 0, x: 100 }}
        >
          <Hading i18nKey={'portfolio.title'} />
          <div className='portfolioImage' initial={{ opacity: 0, x: 100 }}>
            <img src='/assets/pictures/services/divider.webp' alt='divider' />
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, x: 100 }} className='portfolioPara'>
          {t('portfolio.text')}
        </motion.p>
      </div>
      <ul className='portfolioList'>
        {portfolioFilter.map((p, index) => (
          <PortfolioCard key={p.id} p={p} index={index} />
        ))}
      </ul>
      {home && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBlockStart: '7.5em',
          }}
        >
          <ButtonPrimary url='showcase' />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
