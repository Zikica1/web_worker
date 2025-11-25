import './hero.css';
import HeroCard from './HeroCard';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { hero } from '../../../data/db';

const Hero = () => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const location = useLocation();

  const refSlider = useRef(null);
  const refItems = useRef([]);

  const refIsDragging = useRef(false);

  const handlePointerDown = (e) => {
    e.preventDefault();
    refIsDragging.current = false;
    setStartX(e.pageX - refSlider.current.offsetLeft);
    setScrollLeft(refSlider.current.scrollLeft);
    window.addEventListener('pointerup', handlePointerUp);
    if (refSlider.current) {
      refSlider.current.classList.add('dragging');
    }
  };

  const handlePointerMove = (e) => {
    if (e.buttons !== 1) return;
    const x = e.pageX - refSlider.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 5) {
      refIsDragging.current = true;
    }

    refSlider.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => {
    setTimeout(() => (refIsDragging.current = false), 0);
    if (refSlider.current) {
      refSlider.current.classList.remove('dragging');
    }
    window.removeEventListener('pointerup', handlePointerUp);

    // DETEKCIJA NAJVIDLJIVIJE KARTICE

    // let maxVisible = 0;
    // let newActive = 0;
    // refItems.current.forEach((el, idx) => {
    //   if (!el) return;
    //   const rect = el.getBoundingClientRect();
    //   const visibleWidth =
    //     Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
    //   if (visibleWidth > maxVisible) {
    //     maxVisible = visibleWidth;
    //     newActive = idx;
    //   }
    // });
    // setActiveIndex(newActive);
  };

  const handlePointerLeave = () => {
    refIsDragging.current = false;
    if (refSlider.current) {
      refSlider.current.classList.remove('dragging');
    }
    window.removeEventListener('pointerup', handlePointerUp);
  };

  const handleNext = (index) => {
    const el = refItems.current[index];
    if (!el) return;
    const parent = el.offsetParent;
    parent.scrollTo({
      left: parent.scrollLeft + el.offsetWidth,
      behavior: 'smooth',
    });
    // setTimeout(() => {
    //   setActiveIndex((prev) => Math.min(prev + 1, hero.length - 1));
    // }, 400);
  };

  const handlePrevious = (index) => {
    const el = refItems.current[index];
    if (!el) return;
    const parent = el.offsetParent;
    parent.scrollTo({
      left: parent.scrollLeft - el.offsetWidth,
      behavior: 'smooth',
    });
    // setTimeout(() => {
    //   setActiveIndex((prev) => Math.max(prev - 1, 0));
    // }, 400);
  };

  return (
    <section className='hero' key={location.pathname}>
      <div className='hero-wrapper'>
        <ul
          className='heroSlides'
          ref={refSlider}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
        >
          {hero.map((item, index) => (
            <HeroCard
              key={item.id}
              item={item}
              refItem={(el) => (refItems.current[index] = el)}
              handleNext={() => handleNext(index)}
              handlePrevious={() => handlePrevious(index)}
              index={item.id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
