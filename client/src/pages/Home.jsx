import Hero from '../components/home/hero/Hero';
import HomeServices from '../components/home/homeSer/HomeServices';
import OurMissions from '../components/home/missions/OurMissions';
import Portfolio from '../components/portfolio/Portfolio';

const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <HomeServices />
      <OurMissions />
      <Portfolio />
    </main>
  );
};

export default Home;
