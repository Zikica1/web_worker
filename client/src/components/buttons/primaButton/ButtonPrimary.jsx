import './buttonPri.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ButtonPrimary = ({
  url,
  classButton = '',
  text = 'buttons.baseText',
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`${url}`} className={`btnPrimary ${classButton}`}>
      <span className='buttonOverlay'></span>
      <span className='buttonText'>{t(text)}</span>
    </Link>
  );
};

export default ButtonPrimary;
