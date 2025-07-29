import Header from './header/Header';
import { useLocation, Outlet } from 'react-router-dom';

const LayoutMain = () => {
  const location = useLocation();

  return (
    <>
      <Header key={location.pathname} />
      <Outlet />
    </>
  );
};

export default LayoutMain;
