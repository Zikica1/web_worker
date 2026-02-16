import './serviceCardDet.css';
import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { services } from '../../data/db';
import SeoMeta from '../SeoMeta';
import seoData from '../../seo/seoData.json';
import { faqData } from '../../data/seo/faqData';
import { breadcrumbMap } from '../../data/seo/breadcrumbMap';
import {
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
} from '../../utility/seoBuilders';
import { useLangT } from '../../hook/useLangT';
import ButtonPrim from '../buttons/primaButton/ButtonPrimary';
import useMatchUrl from '../../hook/useMatchUrl';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const ServiceCardDet = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { id: slugFromUrl } = useParams();
  const { t, lang } = useLangT();

  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const serviceSegment = pathParts[2];

  const cardDet = services.find((item) => item.slugs[lang] === slugFromUrl);

  const isWebDevPage = useMatchUrl(
    '/sr/usluge/izrada-web-sajta',
    '/en/services/website-development',
  );

  if (!cardDet) {
    console.error('Service not found for slug:', slugFromUrl, 'in lang:', lang);
    return <p>Service not found.</p>;
  }

  const id = cardDet.category;

  const faq = faqData?.[lang]?.[slugFromUrl] || null;
  const breadcrumbs = breadcrumbMap?.[lang]?.[slugFromUrl];

  const pagePath =
    lang === 'sr'
      ? `/sr/usluge/${slugFromUrl}/`
      : `/en/services/${slugFromUrl}/`;

  const pageUrl = `https://www.webworker.rs${pagePath}`;

  const faqJson = faq?.length ? buildFaqJsonLd(faq, pageUrl) : null;
  const breadcrumbJson = buildBreadcrumbJsonLd(
    breadcrumbs,
    'https://www.webworker.rs',
    pageUrl,
  );

  const { title, description, url, image, headline } =
    seoData?.serviceCardDet?.[id]?.[lang] || {};

  const alternates = [
    {
      lang: 'sr',
      href: `https://www.webworker.rs/sr/usluge/${cardDet.slugs.sr}`,
    },
    {
      lang: 'en',
      href: `https://www.webworker.rs/en/services/${cardDet.slugs.en}`,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://www.webworker.rs/${lang}/${serviceSegment}/${slugFromUrl}`,
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
          '@id': `https://www.webworker.rs/${lang}/${serviceSegment}/${slugFromUrl}`,
        },
      },
      {
        '@type': 'Article',
        '@id': `https://www.webworker.rs/${lang}/${serviceSegment}/${slugFromUrl}/#article`,
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
          '@id': `https://www.webworker.rs/${lang}/${serviceSegment}/${slugFromUrl}/#webpage`,
        },
      },
      {
        '@type': 'Service',
        '@id': `https://www.webworker.rs/${lang}/${serviceSegment}/${slugFromUrl}/#service`,
        name: title,
        description: description,
        provider: {
          '@type': 'Organization',
          '@id': 'https://www.webworker.rs/#organization',
        },
      },
      ...(breadcrumbJson ? [breadcrumbJson] : []),
      ...(faqJson ? [faqJson] : []),
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

  const relatedArticles =
    t(`service.cardDet.${id}.relatedArticles`, {
      lng: lang,
      returnObjects: true,
    }) || [];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <SeoMeta
        title={title}
        description={description}
        image={image}
        url={url}
        alternates={alternates}
        canonical={url}
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
                  `service.cardDet.${id}.mainTitle`,
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
              <h2 className='cardDetSec-head cardDetSecOne-head'>
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
                          'serviceIds.website',
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
                <h2 className='cardDetSec-head cardDetSecOne-head'>
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
                <h2 className='cardDetSec-head cardDetSecOne-subhead'>
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
              <h2 className='cardDetSec-head cardDetSecThree-head'>
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
                              'serviceIds.website',
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
                <h2 className='cardDetSec-head cardDetSecThree-head'>
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

      <section className='serCardInfo'>
        {faq?.length > 0 && (
          <div className='serCardInfo-faq'>
            <h2 className='serCardInfo-title'>
              {lang === 'sr'
                ? 'Često postavljana pitanja'
                : 'Frequently asked questions'}
            </h2>
            <ul className='serCardInfo-list'>
              {faq.map((item, index) => (
                <li key={index} className='serCardInfo-item'>
                  <div className='serCardInfo-wrapper'>
                    <h3 className='serCardInfo-question'>{item.question}</h3>{' '}
                    <button
                      className='serCardInfo-button'
                      onClick={() => handleToggle(index)}
                    >
                      {index === openIndex ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>
                  {index === openIndex ? (
                    <p className='serCardInfo-answer'>{item.answer}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        )}

        {isWebDevPage && (
          <section className='relatedArticle'>
            <h3 className='relatedSecTitle'>
              {t(`service.cardDet.${id}.relatedArtiTitle`)}
            </h3>
            <ul className='relatedArtiList'>
              {relatedArticles.map((item) => (
                <li className='relatedArtList-item' key={item.slug}>
                  <Link to={`/${lang}/blogs/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </>
  );
};

export default ServiceCardDet;
