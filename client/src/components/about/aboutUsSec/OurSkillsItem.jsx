import './ourSkillsItem.css';
import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { motion } from 'motion/react';

const barVar = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.8,
    },
  },
};

const OurSkillsItem = ({ item, index }) => {
  const [isView, setIsView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observerItem = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsView(true);
            observerItem.disconnect();
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    if (ref.current) observerItem.observe(ref.current);

    return () => observerItem.disconnect();
  }, []);

  return (
    <li ref={ref} className='ourSkillsItem'>
      <div
        className={`ourSkillsItem-percentages ourSkillsItem-percentages--${index}`}
      >
        <h3 className='ourSkillsItem-len'>{item.language}</h3>
        <p className='ourSkillsItem-para'>
          {isView ? (
            <CountUp
              start={0}
              end={item.utilization}
              duration={2}
              formattingFn={(value) => Math.floor(value / 5) * 5}
            ></CountUp>
          ) : (
            0
          )}
          %
        </p>
      </div>
      <div className='ourSkillsItem-bar'>
        <motion.div
          variants={barVar}
          initial='hidden'
          animate={isView ? 'visible' : 'hidden'}
          className={`ourSkillsItem-barInner ourSkillsItem-bar--${index}`}
        ></motion.div>
      </div>
    </li>
  );
};

export default OurSkillsItem;
