import './servicesCards.css';
import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { services } from '../../data/db';

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
  const location = useLocation();
  // const refs = useRef([]);
  const ref = useRef(null);

  const isService = location.pathname === '/services';

  const Icon = service.Icon;

  const handleClick = () => {
    // refs.current.forEach((el) => {
    //   el.classList.toggle('isFlip');
    ref.current.classList.toggle('isFlip');
  };

  return (
    <li
      ref={ref}
      // ref={(el) => (refs.current[index] = el)}
      className={`card ${isService && 'cardService'}`}
    >
      <div className=' card-face card-face--front'>
        <Icon className='card-icon' />
        <h3 className='card-title'>{t(`service.cards.${service.id}.title`)}</h3>
        <div className='cardSubtitle'>
          {isService ? (
            <Link to={`${service.id}`} className='cardSubtitle-link'>
              {t(`service.cards.${service.id}.subtitle`)}
            </Link>
          ) : (
            <button onClick={handleClick} className='cardSubtitle-button'>
              {t(`service.cards.${service.id}.subtitle`)}
            </button>
          )}
          <FaLongArrowAltRight className='cardSubtitle-icon' />
        </div>
      </div>
      <div className=' card-face card-face--back'>
        <Icon className='card-icon' />
        <h3 className='card-title'>{t(`service.cards.${service.id}.title`)}</h3>
        <p className='card-para'>
          {t(`service.cards.${service.id}.description`)}
        </p>

        <div className='cardSubtitle'>
          <button onClick={handleClick} className='cardSubtitle-button'>
            {t(`service.cards.${service.id}.subtitle`)}
          </button>

          <FaLongArrowAltRight className='cardSubtitle-icon' />
        </div>
      </div>
    </li>
  );
};

const ServicesCards = () => {
  return (
    <ul className='servicesCards grid'>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </ul>
  );
};

export default ServicesCards;
