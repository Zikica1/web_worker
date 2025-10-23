import './buttoni18.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import translatePath from '../../../utility/translatePath';
import { MdLanguage } from 'react-icons/md';

const ButtonI18 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const routeMap = {
    en: t('routes', { lng: 'en', returnObjects: true }),
    sr: t('routes', { lng: 'sr', returnObjects: true }),
  };

  const handleSwitchLang = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'sr' : 'en';

    const newPath = translatePath(
      location.pathname,
      currentLang,
      newLang,
      routeMap,
      t
    );

    i18n.changeLanguage(newLang);
    navigate(newPath, { replace: true });
  };

  return (
    <button className='buttonLen' onClick={handleSwitchLang}>
      <MdLanguage className='buttonLen-globeIco' />
      {i18n.language === 'sr' ? ' English' : 'Srpski'}
    </button>
  );
};

export default ButtonI18;
