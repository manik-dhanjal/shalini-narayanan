import * as React from 'react';
import { NavStyles } from './navbar.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <NavStyles>
      {/* Logo */}
      <div className="logo">
        <StaticImage
          src="../../images/logo-1.png"
          alt="Dr. Shalini Narayanan - Media Academic & Author"
          placeholder="blurred"
          layout="constrained"
          height={50}
        />
      </div>

      {/* Nav Menu */}
      <ul id="nav-menu" className="menu">
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item with-sub">
          <div className="menu-item-with-sub">Services</div>

          {/* Sub Menu */}
          <ul className="sub-menu">
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
          <Link to="/creative-writing">Creative Writing</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Navbar;
