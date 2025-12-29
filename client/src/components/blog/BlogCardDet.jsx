import './blogCardDet.css';
import { Link, useParams } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { blogs } from '../../data/db';
import { useLangT } from '../../hook/useLangT';
import Seo from '../SEO/Seo';
import seoData from '../../seo/seoData.json';
import Share from '../share/Share';
import BlogNotFound from './BlogNotFound';

const BlogCardDet = () => {
  const { id: slugFromUrl } = useParams();

  const { t, lang } = useLangT();

  const blogDet = blogs.find((item) => item.slugs[lang] === slugFromUrl);

  if (!blogDet) {
    return <BlogNotFound />;
  }

  const id = blogDet.key;

  const {
    title,
    description,
    url,
    image,
    headline,
    datePublished,
    dateModified,
    keywords,
    articleSection,
    type,
  } = seoData?.blogCardDet?.[id]?.[lang] || {};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'BlogPosting'],
        '@id': `https://www.webworker.rs/${lang}/blogs/${slugFromUrl}/`,
        url: url,
        name: title,
        headline: headline,
        inLanguage: lang,
        isPartOf: {
          '@id': `https://www.webworker.rs/${lang}/blogs/#website`,
        },
        about: {
          '@id': 'https://www.webworker.rs/#organization',
        },
        description: description,
        image: image,
        datePublished: datePublished,
        dateModified: dateModified,
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
          '@id': `https://www.webworker.rs/${lang}/blogs/${slugFromUrl}/`,
        },
        keywords: keywords,
        articleSection: articleSection,
      },
    ],
  };

  const blogContent = t(`blogs.blogCardDet.${id}`, {
    returnObjects: true,
  });

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        url={url}
        canonical={url}
        jsonLd={jsonLd}
        type={type}
      />
      <article className='blogCardDet'>
        <div className='blogCardDet-img'>
          <picture>
            <source
              media='(max-width: 480px)'
              srcSet={`${blogDet.imgMob} 1x,${blogDet.imgMob2} 2x`}
            />
            <source media='(max-width: 768px)' srcSet={blogDet.imgTab} />
            <source media='(max-width: 1366px)' srcSet={blogDet.imgDes} />
            <img
              src={blogDet.imgDesLar}
              alt={t(`blogs.blogCards.posts.${blogDet.id}.alt`)}
              width='1536'
              height='868'
              decoding='async'
              fetchPriority='high'
            />
          </picture>
        </div>

        <div className='blogCardDet-container'>
          <header>
            <h1 className='blogCardDet-title'>
              {t(`blogs.blogCardDet.${id}.title`)}
            </h1>
          </header>

          <div className='blogCardDet-entryInfo'>
            <div className='blogCardDet-entryInfo-wrap'>
              <div className='blogCardDet-entryDate'>
                {t(`blogs.blogCardDet.${id}.data`)}
              </div>
              <div className='blogCardDet-entryAuthor'>
                {t(`blogs.blogCardDet.${id}.author`)}
              </div>
            </div>
          </div>

          <div className='blogCardDet-content'>
            <p className='blogCardDet-para'>
              <Trans
                i18nKey={`blogs.blogCardDet.${id}.description`}
                components={{
                  br: <br />,
                  aLink: (
                    <Link
                      to={`/${lang}/${t('routes.services')}/${t(
                        'serviceIds.website'
                      )}`}
                      style={{ color: '#3498db', fontWeight: '500' }}
                    ></Link>
                  ),
                }}
              />
            </p>

            <ul className='blogCardDet-list'>
              {blogContent.sections.map((section, id) => (
                <li className='blogCardDet-item' key={id}>
                  <h2 className='blogCardDet-secTitle'>{section.heading}</h2>
                  {section.paragraph && (
                    <p className='blogCardDet-para'>
                      <Trans
                        i18nKey={section.paragraph}
                        components={{
                          aLink: (
                            <Link
                              to={`/${lang}/${t('routes.services')}/${
                                section.linkTo
                              }`}
                              style={{ color: '#3498dbff', fontWeight: '500' }}
                            ></Link>
                          ),
                          br: <br />,
                          strong: <strong></strong>,
                        }}
                      />
                    </p>
                  )}

                  {section.headingH3 && (
                    <h3 className='blogCardDet-subTitle'>
                      {section.headingH3}
                    </h3>
                  )}
                  {section.list && (
                    <ul className='blogCardDet-subList'>
                      {section.list.map((item, id) => (
                        <li className='blogCardDet-subItem' key={id}>
                          <p className='blogCardDet-para'>
                            <Trans
                              i18nKey={item}
                              components={{
                                strong: <strong></strong>,
                              }}
                            />
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.paragraphSec && (
                    <p className='blogCardDet-para'>
                      <Trans
                        i18nKey={section.paragraphSec}
                        components={{
                          strong: <strong></strong>,
                        }}
                      />
                    </p>
                  )}

                  {section.listSec && (
                    <ul className='blogCardDet-subList'>
                      {section.listSec.map((item, id) => (
                        <li key={id}>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.paragraphThr && (
                    <p className='blogCardDet-para'>{section.paragraphThr}</p>
                  )}
                </li>
              ))}
            </ul>

            {blogContent.conclusion && (
              <p className='blogCardDet-para'>
                <Trans
                  i18nKey={blogContent.conclusion}
                  components={{
                    br: <br />,
                    strong: <strong></strong>,
                  }}
                />
              </p>
            )}
          </div>
          <div className='share-container'>
            <p>
              {lang === 'sr'
                ? 'Ako vam je tekst bio koristan, podelite ga:'
                : 'If you found the text useful, please share it:'}
            </p>
            <Share />
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogCardDet;
