import { useTranslation } from 'react-i18next';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ServiceCard = ({ service, isHome }) => {
  const { t } = useTranslation();

  const Icon = service.Icon;
  return (
    <li className='card'>
      <div className={`${!isHome && 'card-face card-face--front'}`}>
        <Icon />
        <h3>{t(`service.cards.${service.id}.title`)}</h3>
        <div className='card-subtitle'>
          <p>{t(`service.cards.${service.id}.subtitle`)}</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className={`${!isHome && 'card-face card-face--back'}`}>
        <Icon />
        <h3>{t(`service.cards.${service.id}.title`)}</h3>
        <p>{t(`service.cards.${service.id}.description`)}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
