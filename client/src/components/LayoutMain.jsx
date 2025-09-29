import Header from './header/Header';
import { useLocation, Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Footer from './footerSec/Footer';

const LayoutMain = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header key={location.pathname} />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutMain;
