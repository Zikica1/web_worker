import Hero from '../components/home/hero/Hero';
import HomeServices from '../components/home/homeSer/HomeServices';
import OurMissions from '../components/home/missions/OurMissions';
import Portfolio from '../components/portfolio/Portfolio';
import Packages from '../components/home/packagePrices/Packages';
import BlogHome from '../components/home/blog/BlogHome';
import SeoMeta from '../components/SeoMeta';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.home[lang];

  const alternates = [
    {
      lang: 'sr',
      href: seoData.home.sr.url,
    },
    {
      lang: 'en',
      href: seoData.home.en.url,
    },
    {
      lang: 'x-default',
      href: 'https://www.webworker.rs',
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
      <main className='home'>
        <Hero />
        <HomeServices />
        <OurMissions />
        <Portfolio />
        <Packages />
        <BlogHome />
      </main>
    </>
  );
};

export default Home;
