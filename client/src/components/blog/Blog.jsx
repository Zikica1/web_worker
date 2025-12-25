import './blog.css';
import { useTranslation } from 'react-i18next';
import Hading from '../header/Hading';
import BlogCards from './BlogCards';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <section className='blog'>
      <header className='blog-header blog-header--ani'>
        <h1 className='blog-mainTitle'>{t('blogs.titleMain')}</h1>
      </header>
      <div className='blog-des blog-des--ani'>
        <Hading i18nKey={'blogs.title'} />
        <p className='blog-desPara'>{t('blogs.description')}</p>
      </div>

      <BlogCards />
    </section>
  );
};

export default Blog;
