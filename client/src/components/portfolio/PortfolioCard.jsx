import './portfolioCard.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ p, index }) => {
  const refCard = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );
    if (refCard.current) observer.observe(refCard.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={refCard}
      className='portfolioCard'
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ${index * 0.1}s,transform 0.7s`,
      }}
    >
      <Link
        className='portfolioCard-link'
        to={p.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='portfolioCardImg-wrap'>
          <img
            className='portfolioCard-img'
            src={p.img}
            alt='screenshot site'
            loading='lazy'
          />
        </div>
      </Link>
    </li>
  );
};

export default PortfolioCard;
