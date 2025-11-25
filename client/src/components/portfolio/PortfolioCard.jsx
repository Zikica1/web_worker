import './portfolioCard.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useMatchUrl from '../../hook/useMatchUrl';
import { useTranslation } from 'react-i18next';

const PortfolioCard = ({ p, index }) => {
  const refCard = useRef();
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  const isHome = useMatchUrl();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (refCard.current) observer.observe(refCard.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={refCard}
      className='portfolioCard'
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ${index * 0.1}s,transform 0.7s`,
      }}
    >
      <Link
        className='portfolioCard-link'
        to={p.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='portfolioCardImg-wrap'>
          <picture>
            <source
              media='(max-width:480px)'
              srcSet={`${p.imgMob} 1x,${p.imgMob2} 2x`}
            />
            <img
              className='portfolioCard-img'
              src={p.imgDes}
              alt={t(`portfolio.portfolioAlt.${p.id}`)}
              width='768'
              height={p.height}
              decoding='async'
              loading={isHome ? 'lazy' : undefined}
              // fetchPriority={isHome ? undefined : 'high'}
            />
          </picture>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioCard;
