import './aboutUsItem.css';
import { useTranslation } from 'react-i18next';

const AboutUsItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <li className='aboutUsItem'>
      <img
        className='aboutUsItem-icon'
        src={item.img}
        alt='icons palette, gear and rocket'
      />

      <div>
        <h3 className='aboutUsItem-title'>
          {t(`about.aboutUs.list.${item.id}.title`)}
        </h3>
        <p className='aboutUsItem-text'>
          {t(`about.aboutUs.list.${item.id}.text`)}
        </p>
      </div>
    </li>
  );
};

export default AboutUsItem;
