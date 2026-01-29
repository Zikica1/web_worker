import Portfolio from '../components/portfolio/Portfolio';
import SeoMeta from '../components/SeoMeta';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const Showcase = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.showcase[lang];

  const alternates = [
    {
      lang: 'sr',
      href: seoData.showcase.sr.url,
    },
    {
      lang: 'en',
      href: seoData.showcase.en.url,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs/istaknuto',
    },
  ];

  return (
    <>
      <SeoMeta
        title={title}
        description={description}
        url={url}
        alternates={alternates}
        canonical={url}
        image={image}
        jsonLd={jsonLd}
        type='website'
      />
      <main>
        <Portfolio />
      </main>
    </>
  );
};

export default Showcase;
