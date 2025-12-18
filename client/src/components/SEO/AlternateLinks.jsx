import { useLocation } from 'react-router-dom';

const AlternateLinks = () => {
  const { pathname } = useLocation();

  // const cleanPath = decodeURIComponent(pathname.replace(/^\/(sr|en)/, ''));

  const cleanPath = decodeURIComponent(
    pathname.startsWith('/sr') || pathname.startsWith('/en')
      ? pathname.replace(/^\/(sr|en)/, '')
      : pathname
  );

  return (
    <>
      {' '}
      <link
        rel='alternate'
        href={`https://www.webworker.rs/sr${cleanPath}/`}
        hrefLang='sr'
      />
      <link
        rel='alternate'
        href={`https://www.webworker.rs/en${cleanPath}/`}
        hrefLang='en'
      />
      <link
        rel='alternate'
        href={`https://www.webworker.rs/sr${cleanPath}/`}
        hrefLang='x-default'
      />
    </>
  );
};

export default AlternateLinks;
