import './homeServices.css';
import Hading from '../../header/Hading';
import ServicesCards from '../../services/ServicesCards';
import { useTranslation } from 'react-i18next';

const HomeServices = () => {
  const { i18n } = useTranslation();
  console.log(i18n.language);

  return (
    <section className='homeServices'>
      <div className='homeServiceWrapper'>
        <div className='homeServicesHad'>
          <Hading i18nKey='homeService.title' />

          <img
            className='homeServicesHad-divider'
            src='/assets/pictures/services/divider.webp'
            alt='divider'
          />
        </div>

        <ServicesCards />
      </div>
    </section>
  );
};

export default HomeServices;
