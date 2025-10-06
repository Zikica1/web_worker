import Service from '../components/services/Service';
import ServiceTeamEffort from '../components/services/ServiceTeamEffort';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.services[lang];

  return (
    <>
      <Seo
        title={title}
        description={description}
        url={url}
        image={image}
        jsonLd={jsonLd}
      />
      <main className='services'>
        <Service />
        <ServiceTeamEffort />
      </main>
    </>
  );
};

export default Services;
