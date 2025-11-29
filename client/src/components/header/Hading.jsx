import './hading.css';
import { useTranslation, Trans } from 'react-i18next';

const Hading = ({ i18nKey, sizeFont, className = '' }) => {
  useTranslation();

  return (
    <h2
      className={`head-title ${className}`}
      style={{ fontSize: `${sizeFont}px` }}
    >
      <Trans
        i18nKey={i18nKey}
        components={{
          span: <span className='head-title-span' />,
          br: <br />,
        }}
      />
    </h2>
  );
};

export default Hading;
