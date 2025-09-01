import './serviceTeamEffort.css';
import { useTranslation } from 'react-i18next';

const ServiceTeamEffort = () => {
  const { t } = useTranslation();

  return (
    <section className='teamEffort'>
      <div className='teamEffortWrapper'>
        <div className='teamEffortHeader'>
          <h3 className='teamEffortHeader-title'>
            {t('service.teamEffort.sectionTitle')}
          </h3>
          <div className='teamEffortHeader-divider'></div>
          <p className='teamEffortHeader-text'>
            {t('service.teamEffort.sectionText')}
          </p>
        </div>

        <div className='teamEffortList'>
          <ul className='grid'>
            {[1, 2, 3, 4].map((number) => (
              <li className='teamEffortList-item' key={number}>
                <h5 className='teamEffortList-num'>{`0${number}`}</h5>
                <h3 className='teamEffortList-title'>
                  {t(`service.teamEffort.teamEffortCards.${number}.title`)}
                </h3>
                <p className='teamEffortList-text'>
                  {t(`service.teamEffort.teamEffortCards.${number}.text`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceTeamEffort;
