import './service.css';
import Hading from '../header/Hading';
import ServicesCards from './ServicesCards';
import { useTranslation, Trans } from 'react-i18next';

const Service = () => {
  const { t } = useTranslation();

  return (
    <section className='service'>
      <h1 className='serviceTitle'>Service</h1>
      <div className='serviceWrapper'>
        <div className='serviceImg'>
          <picture>
            <source
              media='(max-width: 480px)'
              srcSet='/assets/pictures/services/services-img-480px.webp 1x,
            /assets/pictures/services/services-img-480px@2x.webp 2x'
            />
            <source
              media='(max-width: 768px)'
              srcSet='/assets/pictures/services/services-img-768px.webp'
            />
            <source
              media='(max-width: 1020px)'
              srcSet='/assets/pictures/services/services-img-1024px.webp'
            />
            <source
              media='(min-width: 1021px)'
              srcSet='/assets/pictures/services/services-img-821px.webp'
            />
            <img
              src='/assets/pictures/services/services-img-821px.webp'
              alt='girl looking at laptop'
              fetchPriority='high'
            />
          </picture>
        </div>
        <div className='serviceDes'>
          <div className='serviceHead'>
            <Hading i18nKey='service.top.title' />

            <img
              className='serviceHead-image'
              src='/assets/pictures/services/divider.webp'
              alt='divider'
            />
          </div>

          <p className='serviceDes-para'>{t('service.top.description')}</p>
        </div>
      </div>

      <div className='servicesList'>
        <div className='servicesListHead'>
          <Hading i18nKey='service.bottom.title' />

          <img
            className='servicesListHead-img'
            src='/assets/pictures/services/divider.webp'
            alt='divider'
          />
        </div>
        <ServicesCards />
      </div>
    </section>
  );
};

export default Service;
