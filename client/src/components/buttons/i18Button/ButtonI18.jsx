import './buttoni18.css';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

const ButtonI18 = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'sr' ? 'en' : 'sr');
  };

  return (
    <button className='buttonLen' onClick={toggleLanguage}>
      <MdLanguage className='buttonLen-globeIco' />
      {i18n.language === 'sr' ? ' English' : 'Srpski'}
    </button>
  );
};

export default ButtonI18;
