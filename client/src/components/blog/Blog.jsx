import './blog.css';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Hading from '../header/Hading';
import BlogCards from './BlogCards';

const blogHeadVariant = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

const blogContentVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

const Blog = () => {
  const { t } = useTranslation();
  const refHead = useRef();
  const refDes = useRef();

  const isInView = useInView(refHead, {
    once: true,
    amount: 0.25,
  });

  const isInViewDes = useInView(refDes, {
    once: true,
    amount: 0.15,
  });

  return (
    <section className='blog'>
      <motion.header
        ref={refHead}
        className='blog-header'
        variants={blogHeadVariant}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h1 className='blog-mainTitle'>{t('blogs.titleMain')}</h1>
      </motion.header>
      <motion.div
        ref={refDes}
        className='blog-des'
        variants={blogContentVariant}
        initial='hidden'
        animate={isInViewDes ? 'visible' : 'hidden'}
      >
        <Hading i18nKey={'blogs.title'} />
        <p className='blog-desPara'>{t('blogs.description')}</p>
      </motion.div>

      <BlogCards />
    </section>
  );
};

export default Blog;
