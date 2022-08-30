import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = e => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} src="images/BA.png">
             <img className="logo" src="BA.png" style={{width: '40px'}}></img>

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' data-text="Projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                data-text="About"
                onClick={closeMobileMenu}
              >
                
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                data-text="Contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
            </li>
          </ul>
          <div className='social-icons'>
          <a
              class='social-icon-link linkedin'
              target='_blank'
              href="https://www.linkedin.com/in/brandon-adams-93966b239"
              aria-label='LinkedIn'
              style={{}}
            >
              
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link linkedin'
              target='_blank'
              href="https://github.com/brandonadams21"
              aria-label='LinkedIn'
              style={{marginLeft: '14px'}}
            >
              <i class='fab fa-github' />
            </a>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
