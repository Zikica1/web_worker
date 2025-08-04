import './service.css';
import Hading from '../header/Hading';
import { useTranslation } from 'react-i18next';

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
              srcSet='/assets/pictures/services/services-img-1020px.webp'
            />
            <source
              media='(min-width: 1021px)'
              srcSet='/assets/pictures/services/services-img-821px.webp'
            />
            <img
              src='/assets/pictures/services/services-img-821px.webp'
              alt='girl looking at laptop'
              fetchpriority='high'
            />
          </picture>
        </div>
        <div className='serviceDes'>
          <Hading title={t('service.title')} />
          <p className='serviceDes-para'>{t('service.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
