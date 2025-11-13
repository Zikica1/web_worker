import Blog from '../components/blog/Blog';
import { useTranslation } from 'react-i18next';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';

const Blogs = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { title, description, url, image, jsonLd } = seoData.blog[lang];

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
        <Blog />
      </main>
    </>
  );
};

export default Blogs;
