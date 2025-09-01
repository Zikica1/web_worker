import Hero from '../components/home/hero/Hero';
import HomeServices from '../components/home/homeSer/HomeServices';
import OurMissions from '../components/home/missions/OurMissions';

const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <HomeServices />
      <OurMissions />
    </main>
  );
};

export default Home;
