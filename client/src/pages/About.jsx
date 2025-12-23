import { Suspense, lazy } from 'react';
import AboutUs from '../components/about/aboutUsSec/AboutUs';
// import OurVision from '../components/about/aboutUsSec/OurVision';
// import OurSkills from '../components/about/aboutUsSec/OurSkills';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const OurVision = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/about/aboutUsSec/OurVision')
);
const OurSkills = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/about/aboutUsSec/OurSkills')
);

const Loading = () => {
  return <p>Loading...</p>;
};

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
        canonical={url}
        image={image}
        jsonLd={jsonLd}
      />
      <main>
        <AboutUs />
        <Suspense fallback={<Loading />}>
          <OurVision />
          <OurSkills />
        </Suspense>
      </main>
    </>
  );
};

export default About;
