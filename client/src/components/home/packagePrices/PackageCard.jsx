import './packageCard.css';
import { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import { MdCheck } from 'react-icons/md';

const cardVar = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.2,
    },
  }),
};

const PackageCard = ({ index }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const services =
    t(`priceList.${index}.services`, { returnObjects: true }) || [];

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  return (
    <motion.li
      ref={ref}
      className='packageCard'
      initial='hidden'
      variants={cardVar}
      animate={isInView ? 'visible' : 'hidden'}
      custom={index}
    >
      <div className='packageCard-top'>
        <div className='packageCard-head'>
          <h3 className='packageCard-title'>
            {t(`priceList.${index}.package`)}
          </h3>
        </div>
        <h3 className='packageCard-price'>
          <Trans
            i18nKey={`priceList.${index}.price`}
            components={{
              span: <span className='packageCard-span' />,
              span2: <span className='packageCard-currency' />,
            }}
          />
          <span className='packageCard-currency'>€</span>
        </h3>
      </div>
      <div className='package-bottom'>
        <ul className='package-list'>
          {services.map((service, i) => (
            <li className='package-item' key={i}>
              <MdCheck /> {service}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default PackageCard;
