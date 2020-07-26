import './Navbar.css';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [show, handleShow] = useState([]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        alt='Netflix Logo'
        src='https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=600'
      />
      <a href='https://github.com/imnotharsha'>
        <img
          className='nav_avatar'
          alt='Netflix Avatar'
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        />
      </a>
    </div>
  );
}

export default Navbar;
