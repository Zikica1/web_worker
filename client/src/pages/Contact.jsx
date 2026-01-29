import ContactPage from '../components/contactPage/ContactPage';
import { useTranslation } from 'react-i18next';
import SeoMeta from '../components/SeoMeta';
import seoData from '../seo/seoData.json';

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.contact[lang];

  const alternates = [
    {
      lang: 'sr',
      href: seoData.contact.sr.url,
    },
    {
      lang: 'en',
      href: seoData.contact.en.url,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs/kontakt',
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
        <ContactPage />
      </main>
    </>
  );
};

export default Contact;
