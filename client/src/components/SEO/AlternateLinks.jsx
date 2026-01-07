import { useLocation } from 'react-router-dom';

/**
 * Normalizuje path:
 * - "/"        -> ""
 * - "/about/"  -> "/about"
 * - "/about"   -> "/about"
 */
const normalizePath = (path) => {
  if (!path || path === '/') return '';
  return path.replace(/\/$/, '');
};

const AlternateLinks = () => {
  const { pathname } = useLocation();

  const rawPath =
    pathname.startsWith('/sr') || pathname.startsWith('/en')
      ? pathname.replace(/^\/(sr|en)/, '')
      : pathname;

  const cleanPath = normalizePath(decodeURIComponent(rawPath));

  return (
    <>
      <link
        rel='alternate'
        href={`https://www.webworker.rs/sr${cleanPath || '/'}`}
        hrefLang='sr'
      />
      <link
        rel='alternate'
        href={`https://www.webworker.rs/en${cleanPath || '/'}`}
        hrefLang='en'
      />
      <link
        rel='alternate'
        href={`https://www.webworker.rs${cleanPath || '/'}`}
        hrefLang='x-default'
      />
    </>
  );
};

export default AlternateLinks;
