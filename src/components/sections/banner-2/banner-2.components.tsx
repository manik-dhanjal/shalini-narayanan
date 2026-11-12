import { StaticImage } from 'gatsby-plugin-image';
import BannerStyles2 from './banner-2.styled';
import React from 'react';
import { Link } from 'gatsby';

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
          src="../../../../static/images/banner-img-2.webp"
          alt="Dr. Shalini Narayanan - Media Academic & Author"
          placeholder="blurred"
          layout="constrained"
          className="banner-img sm"
          height={800}
        />

        <p className="description">
          Educator & Researcher with 30+ years experience
          <br />
          Ex-Indian Information Service Officer <br />
          Veteran Media Expert <br />
        </p>
      </div>
      <div className="right-side lg">
        <StaticImage
          src="../../../../static/images/banner-img-2.webp"
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
