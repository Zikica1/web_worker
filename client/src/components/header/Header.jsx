import './header.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FaPhoneVolume,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import ButtonI18 from '../buttons/i18Button/ButtonI18';
import useIsMobile from '../../hook/useIsMobile';
import useTheme from '../../hook/useTheme';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const location = useLocation();

  const { theme, toggleTheme } = useTheme();

  const isMobile = useIsMobile();

  const activeStyle = {
    color: 'rgb(52, 152, 219)',
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className='header'>
      <div className='headerTop'>
        <div className='headerTop-leftCol'>
          <ButtonI18 />

          <div className='theme-toggle'>
            <label className='switch'>
              <input
                type='checkbox'
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label='Toggle dark mode'
              />

              <span className='slider'>
                <span className='thumb'>
                  {theme === 'dark' ? <BsMoonStars /> : <BsSun />}
                </span>
              </span>
            </label>
          </div>
        </div>
        {!isMobile && (
          <div className='headerTop-rightCol'>
            <Link
              to='https://www.facebook.com/webworkeragency'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='link-icon' />
            </Link>
            <FaTwitter className='link-icon' />
            <Link
              to='https://www.instagram.com/webworker.rs/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagramSquare className='link-icon' />
            </Link>
          </div>
        )}
      </div>
      <div className='headerBott'>
        <div className='logo'>
          <Link to={`/${lang}`} className='logo-link'>
            <img
              className='logo-img'
              src='/assets/pictures/header/web-worker-logo3.webp'
              alt='LogoImg'
              fetchPriority='hight'
              decoding='async'
              width='158'
              height='45'
            />
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={handleToggleMenu}
            className={`hamMenu ${isOpen ? 'hamMenu--open' : ''}`}
          >
            <span className='hamMenu-item hamMenu-item--top'></span>
            <span className='hamMenu-item hamMenu-item--middle'></span>
            <span className='hamMenu-item hamMenu-item--bottom'></span>
          </button>
        </div>

        <nav className={`nav ${isOpen ? 'nav--show' : ''}`}>
          <ul className='nav-body'>
            <li className='nav-item'>
              <NavLink
                to={`/${lang}`}
                className='nav-link'
                end
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {t('nav.home')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={`/${lang}/${t('routes.about')}`}
                className='nav-link'
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={`/${lang}/${t('routes.services')}`}
                className='nav-link'
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {t('nav.services')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={`/${lang}/${t('routes.showcase')}`}
                className='nav-link'
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {t('nav.showcase')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={`/${lang}/${t('routes.blog')}`}
                className='nav-link'
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {t('nav.blog')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={`/${lang}/${t('routes.contact')}`}
                className='nav-link'
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
