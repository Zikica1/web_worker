import Service from '../components/services/Service';
import ServiceTeamEffort from '../components/services/ServiceTeamEffort';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';
import SeoMeta from '../components/SeoMeta';

const Services = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.services[lang];

  const alternates = [
    {
      lang: 'sr',
      href: seoData.services.sr.url,
    },
    {
      lang: 'en',
      href: seoData.services.en.url,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs/usluge/',
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
      <main className='services'>
        <Service />
        <ServiceTeamEffort />
      </main>
    </>
  );
};

export default Services;
