import { useLocation } from 'react-router-dom';

const AlternateLinks = () => {
  const { pathname } = useLocation();

  const cleanPath = pathname.replace(/^\/(sr|en)/, '');

  return (
    <>
      {' '}
      <link
        rel='alternate'
        href={`https://www.webworker.rs/sr${cleanPath}`}
        hrefLang='sr'
      />
      <link
        rel='alternate'
        href={`https://www.webworker.rs/en${cleanPath}`}
        hrefLang='en'
      />
      <link
        rel='alternate'
        href={`https://www.webworker.rs/sr${cleanPath}`}
        hrefLang='x-default'
      />
    </>
  );
};

export default AlternateLinks;
