import './contactCard.css';
import { useTranslation } from 'react-i18next';

const ContactCard = ({ item, index }) => {
  const { t } = useTranslation();
  const Icon = item.Icon;
  return (
    <li className='contactInfo-item'>
      <Icon className='contactInfo-icon' />
      <p>{t(`contact.contactInfo.${index}.text`)}</p>
    </li>
  );
};

export default ContactCard;
