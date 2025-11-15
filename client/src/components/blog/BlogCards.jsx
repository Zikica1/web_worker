import './blogCards.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { blogs } from '../../data/db';
import useMatchUrl from '../../hook/useMatchUrl';
import { useLangT } from '../../hook/useLangT';

const blotItemVariant = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: index * 0.1,
      ease: 'easeInOut',
    },
  }),
};

const BlogCard = ({ blog, index }) => {
  const { t, lang } = useLangT();
  const ref = useRef();

  const isBlog = useMatchUrl('/sr/blogs', '/en/blogs');

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.li
      ref={ref}
      className='blog-item'
      variants={blotItemVariant}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      custom={index}
    >
      <Link
        to={t(`/${lang}/blogs/${t(`blogs.blogCards.blogIds.${blog.key}`)}`)}
      >
        <div className='blog-itemImgWrap'>
          <img
            className='blog-itemImg'
            src={blog.imgCard}
            alt={t(`blogs.blogCards.posts.${index}.alt`)}
            width='636'
            height='478'
            loading='lazy'
            decoding='async'
          />
        </div>

        <div className={`blog-itemCon ${isBlog && 'blogItemCont-padding'}`}>
          <h3 className='blog-itemTitle'>
            <span>{t(`blogs.blogCards.posts.${index}.title`)}</span>
          </h3>
          <p className='blog-itemPara'>
            <span>{t(`blogs.blogCards.posts.${index}.data`)}</span>{' '}
            <span>|</span>{' '}
            <span>{t(`blogs.blogCards.posts.${index}.author`)}</span>
          </p>
        </div>
      </Link>
    </motion.li>
  );
};

const BlogCards = () => {
  const isHome = useMatchUrl();

  const blogCards = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <ul className={`blog-list ${isHome ? 'blogHome-grid' : 'blog-grid'}`}>
      {blogCards.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </ul>
  );
};

export default BlogCards;
