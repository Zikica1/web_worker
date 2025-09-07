import './packageCard.css';
import { useTranslation, Trans } from 'react-i18next';
import { MdCheck } from 'react-icons/md';

const PackageCard = ({ index }) => {
  const { t } = useTranslation();
  const services =
    t(`priceList.${index}.services`, { returnObjects: true }) || [];

  return (
    <li className='packageCard'>
      <div className='packageCard-top'>
        <div className='packageCard-head'>
          <h3 className='packageCard-title'>
            {t(`priceList.${index}.package`)}
          </h3>
        </div>
        <h3 className='packageCard-price'>
          <Trans
            i18nKey={`priceList.${index}.price`}
            components={{
              span: <span className='packageCard-span' />,
              span2: <span className='packageCard-currency' />,
            }}
          />
          <span className='packageCard-currency'>€</span>
        </h3>
      </div>
      <div className='package-bottom'>
        <ul className='package-list'>
          {services.map((service, i) => (
            <li className='package-item' key={i}>
              <MdCheck /> {service}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PackageCard;
