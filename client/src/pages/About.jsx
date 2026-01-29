import { Suspense, lazy } from 'react';
import AboutUs from '../components/about/aboutUsSec/AboutUs';
// import OurVision from '../components/about/aboutUsSec/OurVision';
// import OurSkills from '../components/about/aboutUsSec/OurSkills';
import seoData from '../seo/seoData.json';
import SeoMeta from '../components/SeoMeta';
import { useTranslation } from 'react-i18next';

const OurVision = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ '../components/about/aboutUsSec/OurVision'
    ),
);
const OurSkills = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ '../components/about/aboutUsSec/OurSkills'
    ),
);

const Loading = () => {
  return <p>Loading...</p>;
};

const About = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.about[lang];

  const alternates = [
    {
      lang: 'sr',
      href: seoData.about.sr.url,
    },
    {
      lang: 'en',
      href: seoData.about.en.url,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs/o-nama',
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
