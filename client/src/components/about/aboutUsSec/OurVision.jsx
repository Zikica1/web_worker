import './ourVision.css';
import { useTranslation } from 'react-i18next';

const OurVision = () => {
  const { t } = useTranslation();

  return (
    <section className='ourVision'>
      <div className='ourVision-wrap'>
        <div className='ourVision-picture'>
          <picture>
            <source
              media='(max-width: 480px)'
              srcSet='/assets/pictures/about/ourVision-img-450px.webp 1x,
              /assets/pictures/about/ourVision-img-450px@2x.webp 2x'
            />
            <source
              media='(max-width: 768px)'
              srcSet='/assets/pictures/about/ourVision-img-768px.webp'
            />
            <img
              className='ourVision-img'
              loading='lazy'
              decoding='async'
              width='1373'
              height='1031'
              src='/assets/pictures/about/ourVision-img-1373px.webp'
              alt='a team of people at a meeting'
            />
          </picture>
        </div>
        <div className='ourVision-content'>
          <div className='ourVision-head'>
            <h2 className='ourVision-title'>{t('about.ourVision.title')}</h2>
          </div>
          <p className='ourVision-text'>{t('about.ourVision.text')}</p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
