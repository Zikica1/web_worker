import Blog from '../components/blog/Blog';
import { useTranslation } from 'react-i18next';
import SeoMeta from '../components/SeoMeta';
import seoData from '../seo/seoData.json';

const Blogs = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { title, description, url, image, jsonLd } = seoData.blog[lang];

  const alternates = [
    {
      lang: 'sr',
      href: seoData.blog.sr.url,
    },
    {
      lang: 'en',
      href: seoData.blog.en.url,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs/blogs',
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
        <Blog />
      </main>
    </>
  );
};

export default Blogs;
