import './footer.css';
import { useTranslation } from 'react-i18next';
import { LuMoveRight, LuMail, LuHeadphones } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const data = new Date();

  return (
    <footer className='footer'>
      <div className='footerWrapper'>
        <div>
          <div className='footerLogo'>
            <img
              className='footerLogo-img'
              src='/assets/pictures/footer/footer-logo-5.svg'
              alt='agency-logo'
              width='45'
              height='45'
              loading='lazy'
              decoding='async'
            />
            <p className='footerLogo-para'>Web Worker</p>
          </div>

          <p className='footer-para'>{t('footer.title')}</p>
          <div className='footer-contact'>
            <Link to='contact' className='footer-link'>
              {t('footer.contact')}
            </Link>
            <LuMoveRight className='footer-icon' />
          </div>
        </div>

        <div className='footerLinks'>
          <h3 className='footerSubtitle'>{t('footer.subtitle')}</h3>
          <ul className='footer-list'>
            <li className='footer-item'>
              <Link to='.'>{t('nav.home')}</Link>
            </li>
            <li className='footer-item'>
              <Link to='about'>{t('nav.about')}</Link>
            </li>
            <li className='footer-item'>
              <Link to='services'>{t('nav.services')}</Link>
            </li>
            <li className='footer-item'>
              <Link to='showcase'>{t('nav.showcase')}</Link>
            </li>
            <li className='footer-item'>
              <Link to='contact'>{t('nav.contact')}</Link>
            </li>
          </ul>
        </div>

        <div className='footerContactInf'>
          <h3 className='footerSubtitle'>{t('footer.subtitleContact')}</h3>
          <ul>
            <li className='footerContactInf-item'>
              <LuHeadphones className='footerContactInf-icon' />
              +38165/8158692
            </li>
            <li className='footerContactInf-item'>
              <LuMail className='footerContactInf-icon' />
              webworker.office@gmail.com
            </li>
          </ul>
        </div>

        <div className='footerOpenHours'>
          <h3 className='footerSubtitle'>{t('footer.openHoursTitle')}</h3>
          <ul>
            <li>{t('footer.open')}</li>
            <li>{t('footer.close')}</li>
          </ul>
        </div>
      </div>

      <div className='footer-divider'></div>

      <p className='footerCopyright'>
        Copyright &copy;{`${data.getFullYear()} webworker.`}{' '}
        {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;
