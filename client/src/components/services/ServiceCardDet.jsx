import './serviceCardDet.css';
import { useParams, Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { services } from '../../data/db';
import Seo from '../SEO/Seo';
import seoData from '../../seo/seoData.json';
import { useLangT } from '../../hook/useLangT';
import ButtonPrim from '../buttons/primaButton/ButtonPrimary';
import useMatchUrl from '../../hook/useMatchUrl';

const ServiceCardDet = () => {
  const { id: slugFromUrl } = useParams();
  const { t, lang } = useLangT();

  const cardDet = services.find((item) => item.slugs[lang] === slugFromUrl);

  const isWebDevPage = useMatchUrl(
    '/sr/usluge/izrada-web-sajta',
    '/en/services/website-development'
  );

  if (!cardDet) {
    console.error('Service not found for slug:', slugFromUrl, 'in lang:', lang);
    return <p>Service not found.</p>;
  }

  const id = cardDet.category;

  const { title, description, url, image, headline } =
    seoData?.serviceCardDet?.[id]?.[lang] || {};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://www.webworker.rs/${lang}/services/${id}/#webpage`,
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
          '@type': 'Organization',
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

  const categories =
    t(`service.cardDet.${id}.categories`, { lng: lang, returnObjects: true }) ||
    [];

  const categories2 =
    t(`service.cardDet.${id}.categories2`, {
      lng: lang,
      returnObjects: true,
    }) || [];

  const categories3 =
    t(`service.cardDet.${id}.categories3`, {
      lng: lang,
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
                alt={`${t(
                  `service.cardDet.${id}.mainTitle`
                )} - WebWorker Srbija`}
                fetchPriority='high'
                decoding='async'
                width='1536'
                height='1024'
              />
            </picture>
          </div>

          <div className='cardDetDes'>
            <div className='cardDetSecOne'>
              <h2 className='cardDetSecOne-head'>
                {t(`service.cardDet.${id}.title`)}
              </h2>

              <p className='cardDetDes-para cardDetSecOne-para'>
                <Trans
                  i18nKey={`service.cardDet.${id}.parag`}
                  components={{
                    br: <br />,
                    bold: <strong />,
                    aLink: (
                      <Link
                        style={{ color: '#3498db' }}
                        to={`/${lang}/${t('routes.services')}/${t(
                          'serviceIds.website'
                        )}`}
                      ></Link>
                    ),
                  }}
                  t={t}
                />
              </p>

              {isWebDevPage && (
                <ButtonPrim
                  url={`/${lang}/${lang === 'sr' ? 'kontakt' : 'contact'}`}
                  text={'buttons.priceText'}
                  classButton='buttonService'
                />
              )}

              {t(`service.cardDet.${id}.typesTitle2`).length > 0 && (
                <h2 className='cardDetSecOne-head'>
                  {t(`service.cardDet.${id}.typesTitle2`)}
                </h2>
              )}

              {categories3.length > 0 && (
                <ul className='cardDetSecThreeList-item'>
                  {categories3.map((item, id) => (
                    <li
                      className='cardDetSecThreeList-item cardDetSecThreeList--margin'
                      key={id}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {t(`service.cardDet.${id}.sectionTitle`).length > 0 && (
                <h2 className='cardDetSecOne-subhead'>
                  {t(`service.cardDet.${id}.sectionTitle`)}
                </h2>
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
                      components={{
                        headline: <h3 />,
                        br: <br />,
                        bold: <strong />,
                      }}
                      t={t}
                    />
                  </li>
                ))}
              </ul>

              {isWebDevPage && (
                <ButtonPrim
                  url={`/${lang}/${lang === 'sr' ? 'istaknuto' : 'showcase'}`}
                  text={'buttons.showcaseText'}
                  classButton='buttonService buttonService-m-x'
                />
              )}
            </div>
            <div className='cardDetSecThree'>
              <h2 className='cardDetSecThree-head'>
                {t(`service.cardDet.${id}.subtitle`)}
              </h2>
              <div className={isWebDevPage ? 'cardDEtSecThree-flex' : ''}>
                {t(`service.cardDet.${id}.parag2`).length > 0 && (
                  <p className='cardDetDes-para cardDetSecThree-para'>
                    <Trans
                      i18nKey={`service.cardDet.${id}.parag2`}
                      components={{
                        br: <br />,
                        bold: <strong />,
                        aLink: (
                          <Link
                            style={{ color: '#3498db' }}
                            to={`/${lang}/${t('routes.services')}/${t(
                              'serviceIds.website'
                            )}`}
                          ></Link>
                        ),
                      }}
                      t={t}
                    />
                  </p>
                )}

                {categories2.length > 0 && (
                  <ul className='cardDetSecThreeList'>
                    {categories2.map((_, index) => (
                      <li
                        className='cardDetSecThreeList-item'
                        key={index}
                        style={{
                          listStyle: isWebDevPage && 'disc',
                        }}
                      >
                        <Trans
                          i18nKey={`service.cardDet.${id}.categories2.${index}`}
                          components={{
                            bold: <strong />,
                          }}
                          t={t}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {t(`service.cardDet.${id}.typesTitle`).length > 0 && (
                <h2 className='cardDetSecThree-head'>
                  {t(`service.cardDet.${id}.typesTitle`)}
                </h2>
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
