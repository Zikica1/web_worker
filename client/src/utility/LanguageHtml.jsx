import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageHtml = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.split('-')[0] || 'sr';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return null;
};

export default LanguageHtml;
