import { Link } from 'react-router-dom';
import Seo from '../SEO/Seo';
import { useLangT } from '../../hook/useLangT';

const BlogNotFound = () => {
  const { t, lang } = useLangT();

  const canonical = `https://www.webworker.rs/${lang}/404/`;

  return (
    <>
      <Seo
        title={t('blogNotFound.title')}
        description={t('blogNotFound.description')}
        canonical={canonical}
        type='website'
      />

      <main className='not-found'>
        <h1>{t('blogNotFound.title')}</h1>
        <p>{t('blogNotFound.description')}</p>

        <Link to={`/${lang}/`}>{t('blogNotFound.backHome')}</Link>
      </main>
    </>
  );
};

export default BlogNotFound;
