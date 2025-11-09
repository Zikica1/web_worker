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
import ButtonI18 from '../buttons/i18Button/ButtonI18';
import useIsMobile from '../../hook/useIsMobile';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const location = useLocation();

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
          <div className='headerTop-phone'>
            <FaPhoneVolume />
            <p>tel: +381658158592</p>
          </div>
          <ButtonI18 />
        </div>
        {!isMobile && (
          <div className='headerTop-rightCol'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagramSquare />
          </div>
        )}
      </div>
      <div className='headerBott'>
        <div className='logo'>
          <Link className='logo-link'>
            <img
              className='logo-img'
              src='/assets/pictures/header/web-worker-logo.webp'
              alt='LogoImg'
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
