import React from 'react';
import Banner from '../../sections/banner/banner.component';
import Button from '../../shared/button/button.component';
import HomePageStyles from './home-page.styles';
import Card from '../../shared/about-card/about-card.component';
import authorIcon from '../../../images/author-icon.png';
import academicIcon from '../../../images/academic-icon.png';
import trainerIcon from '../../../images/trainer-icon.png';
import Slider, { Settings } from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { getAllDigitalShowcases } from '../../../wp-queries/digitalShowcase.wp-queries';
import Testimonials from '../../sections/testimonials/testimonial.components';

function HealthFactorSlider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => <ul className="slick-pagination"> {dots} </ul>,
    customPaging: () => <div className="slick-pag-item"></div>,
    arrows: false,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="health-factor-slide">
      <div className="health-factor-slide">
        <StaticImage
          src="../../../images/health-factor-2.png"
          alt="The Health Factor - summary image"
          width={800}
          placeholder="blurred"
        />
      </div>
      <div className="health-factor-slide">
        <StaticImage
          src="../../../images/health-factor-1.png"
          alt="The Health Factor - group photo 1"
          width={800}
          placeholder="blurred"
        />
      </div>
      <div className="health-factor-slide">
        <StaticImage
          src="../../../images/health-factor-3.png"
          alt="The Health Factor - group photo 2"
          width={800}
          placeholder="blurred"
        />
      </div>
    </Slider>
  );
}

const HomePage: React.FC = () => {
  const digitalShowcases = getAllDigitalShowcases();
  return (
    <HomePageStyles>
      {/*Intro Banner  */}
      <Banner />

      {/* Summary About section */}
      <div className="about">
        <p className="sub-title">A Closer Look</p>
        <div className="about-wrapper">
          <div className="about-left-wrapper">
            <h2 className="primary-title">About Me</h2>
            <p className="about-desc">
              Shalini Narayanan, D.Phil., is a Media Academic and Trainer with nearly three decades
              of experience in the government and non-government sectors. She was part of the Indian
              Information Service, Group 'A', for 23 years, before taking voluntary retirement in
              2013. During that time, she worked at the news division of the public broadcaster,
              Prasar Bharati, both in television and radio for over a decade. She also worked at
              DAVP, now CBC, the Central government's advertising agency and as Editor of the only
              government-run newspaper for jobs, Employment News. As Associate Professor at the
              Indian Institute of Mass Communication, New Delhi, she headed two departments and
              conducted research.
            </p>
            <Button>Read More</Button>
          </div>
          <div className="about-right-wrapper">
            <Card
              imgSrc={authorIcon}
              title="An Author"
              description="Writes worlds, spins tales, captures hearts with words"
            />
            <Card
              imgSrc={academicIcon}
              title="An Academic"
              description="Educates minds, researches, shapes knowledge, inspires learning."
            />
            <Card
              imgSrc={trainerIcon}
              title="An Trainer"
              description="Guides, instructs, empowers, motivates, facilitates growth."
            />
          </div>
        </div>
      </div>

      {/* Itti Si Kahani Section */}
      <div className="itti-si-kahani">
        <div className="intro-video desktop">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6BvM9xwqSOU?si=OY_AmLz-59DBhHj3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="content">
          <p className="sub-title">Kahaniyan Jo Dil Ko Chhoo Lein</p>
          <h2 className="Itti-Si-Kahani primary-title">Itti Si Kahani</h2>
          <div className="intro-video mobile">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6BvM9xwqSOU?si=OY_AmLz-59DBhHj3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Itti si Kahani is a simple story that explores big truths about life. It captures small
            moments and evokes various emotions like fear, thrill, romance, compassion, anger, and
            curiosity. The stories also touch on some deep questions, leaving you with more to
            ponder.
          </p>
          <Button isUnderlined>Visit</Button>
        </div>
      </div>

      {/* The Health Factor */}
      <div className="health-factor">
        <div className="wrapper-left">
          <h3 className="secondary-title desktop">The Health Factor</h3>
          <p className="desc">
            The seminar on health misinformation highlighted the global concern exacerbated by
            digital media, suggesting "pre-bunking" as a more effective strategy. The spread of
            misinformation in smaller towns, aided by offline influencers, poses a significant
            challenge, necessitating urgent measures. Fact-checkers struggle with the overwhelming
            volume of misinformation, circulating six times faster than they can verify. Experts
            recommend media houses employ medical experts, ensure real-time government responses,
            and integrate science communication into education. The seminar, held on November 16,
            2023, in Delhi, emphasized the critical need to address health misinformation and was
            supported by DataLEADS, focusing on information ecosystem challenges.
          </p>
        </div>
        <div className="wrapper-right">
          <HealthFactorSlider />
        </div>
        <h3 className="secondary-title mobile">The Health Factor</h3>
      </div>

      {/* Latest Book - The WhatsApp India Story */}
      <div className="latest-release">
        <StaticImage
          src="../../../images/the-whatsapp-india-book.png"
          alt="The Whatsapp India Story - Inside the Digital Maya Sphere"
          width={600}
          placeholder="blurred"
          className="book-img"
        />
        <div className="content">
          <div className="head">
            <b>Latest Release</b> “The WhatsApp India Story: Inside the Digital Maya Sphere”
          </div>
          <p className="desc">
            WhatsApp is used by over half a billion people in India today in all fields – in
            business, corporate and informal sectors, in government, for education and among
            friends, families and acquaintances. This book critically explores the social messaging
            app’s rapid expansion in India and its growing influence and looks at whether, as a form
            of horizontal communication, it poses a challenge to more traditional structures of
            communication.
          </p>
          <Button isUnderlined>Get Now</Button>
        </div>
      </div>

      {/* Digital Showcase */}
      <div className="digital-showcase">
        <p className="sub-title">A Glimpse into My Work</p>
        <h2 className="primary-title">Digital Showcase</h2>
        <CardSlider cards={digitalShowcases} />
      </div>

      {/* Testimonial */}
      <Testimonials />

      {/* end */}
    </HomePageStyles>
  );
};
export default HomePage;
