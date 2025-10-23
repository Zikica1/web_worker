import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function useLangT() {
  const location = useLocation();
  const { t } = useTranslation();

  const lang = location.pathname.split('/')[1];

  const translate = (key, options = {}) => t(key, { lng: lang, ...options });

  return { t: translate, lang };
}
