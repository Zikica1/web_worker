import './hading.css';
import { Trans } from 'react-i18next';

const Hading = ({ i18nKey }) => {
  return (
    <h3 className='head-title'>
      <Trans
        i18nKey={i18nKey}
        components={{
          span: <span className='head-title-span' />,
          br: <br />,
        }}
      />
    </h3>
  );
};

export default Hading;
