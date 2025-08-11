import './serviceCardDet.css';
import { useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { services } from '../../data/db';

const ServiceCardDet = () => {
  const { id } = useParams();
  const cardDet = services.find((s) => s.id === Number(id));

  const { t } = useTranslation();
  const categories = t(`service.cardDet.${id}.categories`, {
    returnObjects: true,
  });
  const categories2 = t(`service.cardDet.${id}.categories2`, {
    returnObjects: true,
  });

  console.log(t(`service.cardDet.${id}.parag`));

  return (
    <section className='serCardDet'>
      <h1>{t(`service.cardDet.${id}.mainTitle`)}</h1>
      <div className='cardDetWrapper'>
        <div className='cardDetImages'>
          <picture>
            <source
              media='(max-width:480px)'
              srcSet={`${cardDet.imgMob} 1x,${cardDet.imgMob2} 2x`}
            />
            <source media='(max-width: 1024px)' srcSet={`${cardDet.imgTab}`} />
            <source media='(min-width: 1024px)' srcSet={`${cardDet.imgDes}`} />
            <img
              src={`${cardDet.imgDes}`}
              alt='image that describes the title'
              fetchPriority='high'
            />
          </picture>
        </div>

        <div className='cardDetDes'>
          <div className='cardDetSecOne'>
            <h3 className='cardDetSecOne-head'>
              {t(`service.cardDet.${id}.title`)}
            </h3>

            <p className='cardDetSecOne-para'>
              <Trans
                i18nKey={`service.cardDet.${id}.parag`}
                components={{
                  br: <br />,
                  bold: <strong />,
                }}
              />
            </p>
          </div>
          <div className='cardDetSecTwo'>
            <ul className='cardDetSecTwo-categories'>
              {categories.map((_, index) => (
                <li className='cardDetSecTwo-item' key={index}>
                  <Trans
                    i18nKey={`service.cardDet.${id}.categories.${index}`}
                    components={{ bold: <strong />, br: <br /> }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='cardDetSecThree'>
            <h3 className='cardDetSecThree-head'>
              {t(`service.cardDet.${id}.subtitle`)}
            </h3>
            <p className='cardDetSecThree-para'>
              <Trans
                i18nKey={`service.cardDet.${id}.parag2`}
                components={{
                  br: <br />,
                  bold: <strong />,
                }}
              />
            </p>

            {categories2.length > 0 && (
              <ul>
                {categories2.map((c, index) => (
                  <li key={index}>
                    <Trans
                      i18nKey={`service.cardDet.${id}.categories2.${index}`}
                      components={{
                        bold: <strong />,
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardDet;
