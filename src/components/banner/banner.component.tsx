import { StaticImage } from 'gatsby-plugin-image';
import BannerStyles from './banner.styled';
import React from 'react';
import { Link } from 'gatsby';

const ArrowIcon = () => {
  return (
    <StaticImage
      src="../../images/arrow-right-icon.png"
      alt="arrow-icon"
      layout="constrained"
      className="arrow-icon"
      height={100}
    />
  );
};

const Banner = () => {
  return (
    <BannerStyles>
      <div className="background-text">
        <p>Media Academic & Author</p>
        <h1 className="firstname">Dr. Shalini</h1>
        <h1 className="lastname">Narayanan</h1>
      </div>
      <StaticImage
        src="../../images/banner-img.png"
        alt="Dr. Shalini Narayanan - Media Academic & Author"
        placeholder="blurred"
        layout="constrained"
        className="banner-img"
        height={800}
      />
      <ul className="social-links">
        <li>
          <Link to="#">
            Instagram
            <ArrowIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            Facebook
            <ArrowIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            X(Twitter) <ArrowIcon />
          </Link>
        </li>
      </ul>
      <p className="title-sum">
        Media Expert with 3 decades
        <br />
        experience: Ex-Indian Information
        <br />
        Service, Prof, Researcher
      </p>
    </BannerStyles>
  );
};
export default Banner;
