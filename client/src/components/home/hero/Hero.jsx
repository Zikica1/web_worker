import './hero.css';
import { useTranslation, Trans } from 'react-i18next';
import { hero } from '../../../data/db';
import { MdPlayArrow } from 'react-icons/md';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='hero'>
      <div className='hero-wrapper'>
        <ul className='heroSlides'>
          {hero.map((item) => (
            <li className='heroSlides-item' key={item.id}>
              <div className='heroSlides-leftCol'>
                <h2 className='heroSlides-subtitle'>
                  {t(`hero.${item.id}.subtitle`)}
                </h2>
                <h1 className='heroSlides-title'>
                  <Trans
                    i18nKey={`hero.${item.id}.title`}
                    components={{ span: <span className='heroSlides-span' /> }}
                  />
                </h1>
                <p className='heroSlides-des'>
                  {t(`hero.${item.id}.description`)}
                </p>
                <div className='heroSlides-buttonWrap'>
                  <button className='heroSlides-button heroSlides-button--rotate'>
                    <MdPlayArrow />
                  </button>
                  <button className='heroSlides-button'>
                    <MdPlayArrow />
                  </button>
                </div>
              </div>
              <div className='heroSlides-rightCol'>
                <div className='heroSlides-images'>
                  <img
                    className='heroSlide-img'
                    srcSet={`${item.imgMob} 325w,${item.imgMob2} 650w,${item.imgTab} 586w,${item.imgDes} 822w`}
                    sizes='(max-width: 768px) 325px,(max-width: 1024px) 440px,(min-width: 1025px) 625px'
                    src={item.imgDes}
                    alt='hero-slide-img'
                  />
                  <div className='heroSlide-anim heroSlide-anim--1'></div>
                  <div className='heroSlide-anim heroSlide-anim--2'></div>
                  <div className='heroSlide-anim heroSlide-anim--3'></div>
                  <div className='heroSlide-anim heroSlide-anim--4'></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
