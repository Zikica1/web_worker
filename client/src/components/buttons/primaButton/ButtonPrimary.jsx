import './buttonPri.css';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ url }) => {
  return (
    <Link to={`/${url}`} className='btnPrimary'>
      <span className='buttonOverlay'></span>
      <span className='buttonText'>See more</span>
    </Link>
  );
};

export default ButtonPrimary;
