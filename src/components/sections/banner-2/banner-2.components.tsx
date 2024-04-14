import { StaticImage } from 'gatsby-plugin-image';
import BannerStyles2 from './banner-2.styled';
import React from 'react';
import { Link } from 'gatsby';

const ArrowIcon = () => {
  return (
    <StaticImage
      src="../../../images/arrow-right-icon.png"
      alt="arrow-icon"
      layout="constrained"
      className="arrow-icon"
      height={100}
    />
  );
};

const Banner2 = () => {
  return (
    <BannerStyles2>
      <div className="left-side">
        <p className="sub-title">Media Academic, Author & Trainer</p>
        <h1 className="name">
          Dr. Shalini <br />
          Narayanan
        </h1>

        <StaticImage
          src="../../../images/banner-img.png"
          alt="Dr. Shalini Narayanan - Media Academic & Author"
          placeholder="blurred"
          layout="constrained"
          className="banner-img sm"
          height={800}
        />

        <p className="description">
          Media expert with three decades' experience. <br />
          Ex-Indian Information Service officer,
          <br /> Professor, Researcher.
        </p>
      </div>
      <div className="right-side lg">
        <StaticImage
          src="../../../images/banner-img.png"
          alt="Dr. Shalini Narayanan - Media Academic & Author"
          placeholder="blurred"
          layout="constrained"
          className="banner-img lg"
          height={800}
        />
      </div>
    </BannerStyles2>
  );
};
export default Banner2;
