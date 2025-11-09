import Hero from '../components/home/hero/Hero';
import HomeServices from '../components/home/homeSer/HomeServices';
import OurMissions from '../components/home/missions/OurMissions';
import Portfolio from '../components/portfolio/Portfolio';
import Packages from '../components/home/packagePrices/Packages';
import BlogHome from '../components/home/blog/BlogHome';
import Seo from '../components/SEO/Seo';
import seoData from '../seo/seoData.json';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, description, url, image, jsonLd } = seoData.home[lang];

  return (
    <>
      <Seo
        title={title}
        description={description}
        url={url}
        image={image}
        jsonLd={jsonLd}
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
