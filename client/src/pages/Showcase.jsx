import Portfolio from '../components/portfolio/Portfolio';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const Showcase = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.showcase[lang];

  return (
    <>
      <Seo
        title={title}
        description={description}
        url={url}
        image={image}
        jsonLd={jsonLd}
      />
      <main>
        <Portfolio />
      </main>
    </>
  );
};

export default Showcase;
