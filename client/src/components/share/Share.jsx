import './share.css';
// import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaViber,
  FaWhatsapp,
  FaRegCopy,
} from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Share = ({ title = '' }) => {
  // const [open, setOpen] = useState(false);
  // const panelRef = useRef(null);
  const { pathname } = useLocation();

  const baseUrl = `${window.location.origin}${pathname}`;
  const shareUrl = encodeURIComponent(baseUrl);
  const shareText = encodeURIComponent(title || '');

  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  const openPopup = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (panelRef.current && !panelRef.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };

  //   if (open) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [open]);

  return (
    <div className='share-wrapper'>
      {/* <button
        className='share-toggle'
        onClick={() => setOpen((prev) => !prev)}
        aria-label='Share article'
      >
        <FaLink className='share-icon' />
      </button> */}

      <div className='share-panel'>
        <button
          aria-label='Share on Facebook'
          onClick={() =>
            openPopup(
              `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
            )
          }
        >
          <FaFacebookF />
        </button>

        <button
          aria-label='Share on LinkedIn'
          onClick={() =>
            openPopup(
              `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
            )
          }
        >
          <FaLinkedinIn />
        </button>

        <button
          aria-label='Share on X'
          onClick={() =>
            openPopup(
              `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
            )
          }
        >
          <FaXTwitter />
        </button>

        <button
          aria-label='Copy link'
          onClick={() => {
            navigator.clipboard.writeText(baseUrl);
            // setOpen(false);
          }}
        >
          <FaRegCopy />
        </button>

        {isMobile && (
          <div>
            <button
              aria-label='Share on WhatsApp'
              onClick={() =>
                openPopup(`https://wa.me/?text=${shareText}%20${shareUrl}`)
              }
            >
              <FaWhatsapp />
            </button>

            <button
              aria-label='Share on Viber'
              onClick={() =>
                (window.location.href = `viber://forward?text=${shareText}%20${shareUrl}`)
              }
            >
              <FaViber />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
