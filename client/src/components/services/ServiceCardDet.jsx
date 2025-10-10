import './serviceCardDet.css';
import { useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { services } from '../../data/db';
import Seo from '../SEO/Seo';
import seoData from '../../seo/seoData.json';

const ServiceCardDet = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const {
    title,
    description,
    url,
    image,
    headline,
  } = `${seoData}.${id}.${lang}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    graph: [
      {
        '@type': 'WebPage',
        '@id': `https://www.webworker.rs/${lang}/services/${id}`,
        url: url,
        name: title,
        inLanguage: lang,
        isPartOf: {
          '@id': 'https://www.webworker.rs/#website',
        },
        about: {
          '@id': 'https://www.webworker.rs/#organization',
        },
        description: description,
        mainEntityOfPage: {
          '@id': `https://www.webworker.rs/${lang}/services/${id}`,
        },
      },
      {
        '@type': 'Article',
        '@id': `https://www.webworker.rs/${lang}/services/${id}/#article`,
        headline: headline,
        description: description,
        inLanguage: lang,
        author: {
          type: 'Organization',
          '@id': 'https://www.webworker.rs/#organization',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.webworker.rs/#organization',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.webworker.rs/${lang}/services/${id}/#webpage`,
        },
      },
      {
        '@type': 'Service',
        '@id': `https://www.webworker.rs/${lang}/services/${id}/#service`,
        name: title,
        description: description,
        provider: {
          '@type': 'Organization',
          '@id': 'https://www.webworker.rs/#organization',
        },
      },
    ],
  };

  const cardDet = services.find((s) => s.category === id);

  const { t } = useTranslation();
  const categories =
    t(`service.cardDet.${id}.categories`, {
      returnObjects: true,
    }) || [];

  const categories2 =
    t(`service.cardDet.${id}.categories2`, {
      returnObjects: true,
    }) || [];

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        url={url}
        jsonLd={jsonLd}
      />
      <article className='serCardDet'>
        <h1 className='serCardDet-title'>
          {t(`service.cardDet.${id}.mainTitle`)}
        </h1>
        <div className='cardDetWrapper'>
          <div className='cardDetImages'>
            <picture>
              <source
                media='(max-width:480px)'
                srcSet={`${cardDet.imgMob} 1x,${cardDet.imgMob2} 2x`}
              />
              <source
                media='(max-width: 1024px)'
                srcSet={`${cardDet.imgTab}`}
              />
              <source
                media='(min-width: 1025px)'
                srcSet={`${cardDet.imgDes}`}
              />
              <img
                src={`${cardDet.imgDes}`}
                alt='image that describes the title'
                fetchPriority='high'
                decoding='async'
                width='1536'
                height='1024'
              />
            </picture>
          </div>

          <div className='cardDetDes'>
            <div className='cardDetSecOne'>
              <h3 className='cardDetSecOne-head'>
                {t(`service.cardDet.${id}.title`)}
              </h3>

              <p className='cardDetDes-para cardDetSecOne-para'>
                <Trans
                  i18nKey={`service.cardDet.${id}.parag`}
                  components={{
                    br: <br />,
                    bold: <strong />,
                  }}
                />
              </p>
              {t(`service.cardDet.${id}.sectionTitle`).length > 0 && (
                <h4 className='cardDetSecOne-subhead'>
                  {t(`service.cardDet.${id}.sectionTitle`)}
                </h4>
              )}

              {t(`service.cardDet.${id}.sectionPara`).length > 0 && (
                <p className='cardDetDes-para cardDetSecOne-paraSec'>
                  {t(`service.cardDet.${id}.sectionPara`)}
                </p>
              )}
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
              {t(`service.cardDet.${id}.parag2`).length > 0 && (
                <p className='cardDetDes-para cardDetSecThree-para'>
                  <Trans
                    i18nKey={`service.cardDet.${id}.parag2`}
                    components={{
                      br: <br />,
                      bold: <strong />,
                    }}
                  />
                </p>
              )}

              {categories2.length > 0 && (
                <ul className='cardDetSecThreeList'>
                  {categories2.map((_, index) => (
                    <li className='cardDetSecThreeList-item' key={index}>
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

              {t(`service.cardDet.${id}.typesTitle`).length > 0 && (
                <h3 className='cardDetSecThree-head'>
                  {t(`service.cardDet.${id}.typesTitle`)}
                </h3>
              )}

              {t(`service.cardDet.${id}.typesText`).length > 0 && (
                <p className='cardDetDes-para'>
                  {t(`service.cardDet.${id}.typesText`)}
                </p>
              )}
              {t(`service.cardDet.${id}.sharedHosting`).length > 0 && (
                <p
                  className='cardDetDes-para'
                  style={{ marginBlockStart: '1em' }}
                >
                  {t(`service.cardDet.${id}.sharedHosting`)}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ServiceCardDet;
