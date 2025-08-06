import './service.css';
import { useLocation } from 'react-router-dom';
import { services } from '../../data/db';
import Hading from '../header/Hading';
import ServiceCard from './ServiceCard';
import { useTranslation, Trans } from 'react-i18next';

const Service = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isHome = location.pathname === '/';

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
            <Hading
              title={
                <Trans
                  i18nKey='service.top.title'
                  components={{
                    span: <span className='hading-span' />,
                    br: <br />,
                  }}
                />
              }
            />

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
        <div className='servicesList-head'>
          <Hading
            title={
              <Trans
                i18nKey={'service.bottom.title'}
                components={{
                  span: <span className='hading-span' />,
                  br: <br />,
                }}
              />
            }
          />

          <img src='/assets/pictures/services/divider.webp' alt='divider' />
        </div>
        <ul className={`${!isHome && 'scene scene--card'}`}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isHome={isHome} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
