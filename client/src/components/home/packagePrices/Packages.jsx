import './packages.css';
import Hading from '../../header/Hading';
import PackageCard from './PackageCard';
import { useTranslation } from 'react-i18next';

const Packages = () => {
  const { t } = useTranslation();

  return (
    <section className='packagesPri'>
      <div className='packagesPriWrapper'>
        <div className='packagesPriHead'>
          <div className='packagesPriHead-title'>
            <Hading i18nKey={'priceList.title'} />
            <img
              className='packagesPriHead-divider'
              src='/assets/pictures/services/divider.webp'
              alt='divider'
            />
          </div>
          <p className='packagesPriHead-para'>{t('priceList.text')}</p>
        </div>
        <div className='packagePriBody'>
          <ul className='packageCards'>
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
