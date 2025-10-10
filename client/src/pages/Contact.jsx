import ContactPage from '../components/contactPage/ContactPage';
import { useTranslation } from 'react-i18next';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.contact[lang];

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
        <ContactPage />
      </main>
    </>
  );
};

export default Contact;
