import AboutUs from '../components/about/aboutUsSec/AboutUs';
import OurVision from '../components/about/aboutUsSec/OurVision';
import OurSkills from '../components/about/aboutUsSec/ourSkills';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.about[lang];
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
        <AboutUs />
        <OurVision />
        <OurSkills />
      </main>
    </>
  );
};

export default About;
