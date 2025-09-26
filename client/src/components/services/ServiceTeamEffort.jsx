import './serviceTeamEffort.css';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimate, useInView, motion } from 'motion/react';

const listEffortVar = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const ServiceTeamEffort = () => {
  const { t } = useTranslation();
  const [scopeHead, animateHead] = useAnimate();
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  const isInViewHead = useInView(scopeHead, {
    amount: 0.5,
    once: true,
  });

  useEffect(() => {
    if (isInViewHead) {
      animateHead([
        ['.teamEffortHeader-title', { opacity: 1, y: 0 }, { duration: 0.8 }],
        ['.teamEffortHeader-divider', { opacity: 1, x: 0 }, { duration: 0.8 }],
        ['.teamEffortHeader-text', { opacity: 1, x: 0 }, { duration: 0.8 }],
      ]);
    }
  }, [animateHead, isInViewHead]);

  return (
    <section className='teamEffort'>
      <div className='teamEffortWrapper'>
        <div ref={scopeHead} className='teamEffortHeader'>
          <h3 className='teamEffortHeader-title'>
            {t('service.teamEffort.sectionTitle')}
          </h3>
          <div className='teamEffortHeader-divider'></div>
          <p className='teamEffortHeader-text'>
            {t('service.teamEffort.sectionText')}
          </p>
        </div>

        <motion.div
          ref={ref}
          className='teamEffortList'
          variants={listEffortVar}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          <ul className='grid'>
            {[1, 2, 3, 4].map((number) => (
              <motion.li
                className='teamEffortList-item'
                key={number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h5 className='teamEffortList-num'>{`0${number}`}</h5>
                <h3 className='teamEffortList-title'>
                  {t(`service.teamEffort.teamEffortCards.${number}.title`)}
                </h3>
                <p className='teamEffortList-text'>
                  {t(`service.teamEffort.teamEffortCards.${number}.text`)}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTeamEffort;
