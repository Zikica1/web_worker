import './servicesCards.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { services } from '../../data/db';
import useMatchUrl from '../../hook/useMatchUrl';

const listItemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      delay: index * 0.2,
    },
  }),
};

const ServiceCard = ({ service, index }) => {
  const { t } = useTranslation();
  const ref = useRef(null);

  // const lang = i18n.language;

  const isService = useMatchUrl('/sr/usluge', '/en/services');

  const Icon = service.Icon;

  const handleClick = () => {
    ref.current.classList.toggle('isFlip');
  };

  const isInView = useInView(ref, {
    amount: 0.75,
    once: true,
  });

  return (
    <motion.li
      variants={listItemVariant}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      custom={index}
      ref={ref}
      className={`card ${isService && 'cardService'}`}
    >
      <div className=' card-face card-face--front'>
        <Icon className='card-icon' />
        <h3 className='card-title'>{t(`service.cards.${service.id}.title`)}</h3>
        <div className='cardSubtitle'>
          {isService ? (
            <Link
              to={t(`serviceIds.${service.category}`)}
              // to={`/${lang}/services/${t(`serviceIds.${service.category}`)}`}
              className='cardSubtitle-link'
            >
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
    </motion.li>
  );
};

const ServicesCards = () => {
  return (
    <motion.ul className='servicesCards grid'>
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </motion.ul>
  );
};

export default ServicesCards;
