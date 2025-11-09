import './blogHome.css';
import Hading from '../../header/Hading';
import BlogCards from '../../blog/BlogCards';
import ButtonPrimary from '../../buttons/primaButton/ButtonPrimary';
import { useLangT } from '../../../hook/useLangT';

const BlogHome = () => {
  const { lang } = useLangT();

  return (
    <section className='blogHome'>
      <header className='blogHome-title'>
        <Hading i18nKey='blogHome.title' />
        <img
          src='/assets/pictures/services/divider.webp'
          alt='divider'
          loading='lazy'
          decoding='async'
          width='84px'
          height='8px'
        />
      </header>
      <BlogCards />
      <ButtonPrimary
        url={lang === 'sr' ? 'blogs' : 'blogs'}
        text='buttons.blogHomeText'
        classButton='buttonPriCenter'
      />
    </section>
  );
};

export default BlogHome;
