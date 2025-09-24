import './ourSkills.css';
import { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import OurSkillsItem from './OurSkillsItem';
import { skills } from '../../../data/db';

const subtitleVar = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const headVar = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const OurSkills = () => {
  const refSubtitle = useRef(null);
  const refSec = useRef(null);
  const { t } = useTranslation();

  const isInView = useInView(refSubtitle, {
    once: true,
    amount: 0.75,
  });

  const isInView2 = useInView(refSec, {
    once: true,
    amount: 0.75,
  });

  return (
    <section className='ourSkills'>
      <div className='ourSkillsWrapper'>
        <div className='ourSkillsContent'>
          <motion.h3
            ref={refSubtitle}
            className='ourSkillsContent-subtitle'
            variants={subtitleVar}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Trans
              i18nKey={'about.ourSkills.subtitle'}
              components={{
                span: <span className='ourSkillsContent-subtitleAccent' />,
              }}
            />
          </motion.h3>
          <motion.div
            ref={refSec}
            className='ourSkillsContent-ani'
            variants={headVar}
            initial='hidden'
            animate={isInView2 ? 'visible' : 'hidden'}
          >
            <div className='ourSkillsContent-head'>
              <h2 className='ourSkillsContent-title'>
                {t('about.ourSkills.title')}
              </h2>
            </div>
            <p className='ourSkillsContent-para'>{t('about.ourSkills.text')}</p>
          </motion.div>
        </div>

        <div className='ourSkillsList'>
          <ul className='ourSkillsUl'>
            {skills.map((skill, index) => (
              <OurSkillsItem key={skill.id} item={skill} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
