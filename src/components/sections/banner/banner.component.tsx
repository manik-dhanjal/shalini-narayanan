import { StaticImage } from 'gatsby-plugin-image';
import BannerStyles from './banner.styled';
import React from 'react';

const ArrowIcon = () => {
  return (
    <StaticImage
      src="../../../../static/images/arrow-right-icon.webp"
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
        <p>Media Academic, Author & Trainer</p>
        <h1 className="firstname">Dr. Shalini</h1>
        <h1 className="lastname">Narayanan</h1>
        <StaticImage
          src="../../../../static/images/banner-img.webp"
          alt="Dr. Shalini Narayanan - Media Academic & Author"
          placeholder="blurred"
          layout="constrained"
          className="banner-img"
          height={800}
        />
      </div>
      <ul className="social-links">
        <li>
          <a
            href="https://www.instagram.com/ittisikahani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <ArrowIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/AuthorShaNar?mibextid=2JQ9oc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <ArrowIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/shanar68?lang=en" target="_blank" rel="noopener noreferrer">
            X(Twitter) <ArrowIcon />
          </a>
        </li>
      </ul>
      <p className="title-sum">
        Media expert with three decades' experience. <br />
        Ex-Indian Information Service officer,
        <br /> Professor, Researcher.
      </p>
    </BannerStyles>
  );
};
export default Banner;
