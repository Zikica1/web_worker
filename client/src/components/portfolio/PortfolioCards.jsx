import './portfolioCards.css';
import { Link } from 'react-router-dom';
import { portfolio } from '../../data/db';
import { useLocation } from 'react-router-dom';

const PortfolioCards = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const portfolioFilter = isHome ? portfolio.slice(0, 3) : portfolio;

  return (
    <ul className='portfolioList'>
      {portfolioFilter.map((p) => (
        <li key={p.id} className='portfolioCard'>
          <Link
            className='portfolioCard-link'
            to={p.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='portfolioCard-img'
              src={p.img}
              alt='screenshot site'
              loading='lazy'
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioCards;
