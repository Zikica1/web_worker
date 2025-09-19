import './aboutUs.css';
import { useTranslation } from 'react-i18next';
import { about } from '../../../data/db';
import AboutUsItem from './AboutUsItem';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className='aboutUs'>
      <h1 className='aboutUs-title'>{t('about.mainTitle')}</h1>
      <div className='aboutUsWrapper'>
        <div className='aboutUsContent'>
          <h2 className='aboutUsContent-subtitle'>
            {t('about.aboutUs.title')}
          </h2>
          <div className='aboutUsContent-divider'></div>
          <ul className='aboutUsList'>
            {about.map((a) => (
              <AboutUsItem key={a.id} item={a} />
            ))}
          </ul>
        </div>
        <div className='aboutUs-picture'>
          <picture>
            <source
              media='(max-width:480px)'
              srcSet='/assets/pictures/about/aboutUs-img-450px.webp 1x,
              /assets/pictures/about/aboutUs-img-450px@2x.webp 2x'
            />
            <source
              media='(max-width:768px)'
              srcSet='/assets/pictures/about/aboutUs-img-768px.webp'
            />

            <source
              media='(max-width:768px)'
              srcSet='/assets/pictures/about/aboutUs-img-768px.webp'
            />

            <img
              className='aboutUs-img'
              src='/assets/pictures/about/aboutUs-img-1024px.webp'
              alt='girl looking at a website on a laptop'
              height='1024'
              width='1024'
              decoding='async'
              fetchPriority='high'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
