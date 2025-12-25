import './portfolio.css';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import Hading from '../header/Hading';
import { useTranslation } from 'react-i18next';
import PortfolioCard from './PortfolioCard';
import ButtonPrimary from '../buttons/primaButton/ButtonPrimary';
import { portfolio } from '../../data/db';
import useMatchUrl from '../../hook/useMatchUrl';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const scope = useRef(null);

  const home = useMatchUrl();

  const lang = i18n.language;

  const portfolioFilter = home ? portfolio.slice(0, 3) : portfolio;

  const isInView = useInView(scope, {
    once: true,
    amount: 0.4,
  });

  return (
    <section
      className={`${home ? 'portfolioHome' : 'portfolio'}`}
      key={location.pathname}
    >
      <div ref={scope} className='portfolioContentWrapper'>
        <div
          className={`portfolioHeader ${
            isInView ? 'portfolioHeader-ani' : null
          }`}
        >
          <Hading i18nKey={'portfolio.title'} />
          <div className='portfolioImage'>
            <img
              src='/assets/pictures/services/divider.webp'
              alt='divider'
              width='84'
              height='8'
            />
          </div>
        </div>

        <p className='portfolioPara portfolioPara-ani'>{t('portfolio.text')}</p>
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
          <ButtonPrimary url={lang === 'sr' ? 'istaknuto' : 'showcase'} />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
