import Header from './header/Header';
import { useLocation, Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const LayoutMain = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header key={location.pathname} />
      <Outlet />
    </>
  );
};

export default LayoutMain;
