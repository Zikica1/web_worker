import Header from './header/Header';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './ScrollToTop';
import Footer from './footerSec/Footer';
import LanguageHtml from '../utility/LanguageHtml';

const LayoutMain = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const langFromUrl = location.pathname.split('/')[1];

  useEffect(() => {
    if (langFromUrl && i18n.language !== langFromUrl) {
      i18n.changeLanguage(langFromUrl);
    }
  }, [langFromUrl, i18n]);

  return (
    <>
      <LanguageHtml />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutMain;
