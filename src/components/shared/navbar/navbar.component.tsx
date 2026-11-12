import React, { useEffect, useState } from 'react';
import { NavStyles } from './navbar.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isClosed, setIsOpen] = useState(true);
  const handleMenu = () => setIsOpen(!isClosed);

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const handleServiceOpen = () => setIsServiceOpen(!isServiceOpen);

  useEffect(() => {
    if (isClosed) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isClosed]);
  return (
    <NavStyles>
      {/* Logo */}
      <Link className="logo" to="/">
        <StaticImage
          src="../../../../static/images/logo-1.webp"
          alt="Dr. Shalini Narayanan - Media Academic & Author"
          placeholder="blurred"
          layout="constrained"
          height={50}
        />
      </Link>

      {/* Nav Menu */}
      <div className={`menu ${!isClosed && 'close'}`}>
        <ul id="nav-menu">
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item with-sub">
            <div className="menu-item-with-sub" onClick={handleServiceOpen}>
              Services
              <FontAwesomeIcon
                icon={faCaretUp}
                className={`sub-menu-icon ${!isServiceOpen && 'close'}`}
              />
            </div>

            {/* Sub Menu */}
            <ul className={`sub-menu ${!isServiceOpen && 'close'}`}>
              <li className="sub-menu-item">
                <Link to="/services/training-services"> Training Services</Link>
              </li>
              <li className="sub-menu-item">
                <Link to="/services/academic-teaching">Academic Teaching</Link>
              </li>
              <li className="sub-menu-item">
                <Link to="/services/creative-writing">Creative Writing</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to="/achievements">Achievements</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shalini-narayanan-2b665014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/narayananshalini?utm_source=qr&igsh=bWh1NTRqenhvemp5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://www.youtube.com/@ittisikahani" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
          <a
            href="https://www.facebook.com/AuthorShaNar?mibextid=2JQ9oc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="https://twitter.com/shanar68?lang=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </a>
        </div>
      </div>
      <div className={`menu-btn center ${!isClosed && 'close'}`} onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </NavStyles>
  );
};

export default Navbar;
