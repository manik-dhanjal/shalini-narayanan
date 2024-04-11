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
import { navigate } from 'gatsby';
import { getDataForHomePageAboutSummary } from '../../../wp-queries/about.wp-queries';
import { openLinkInNewTab } from '../../../utils/links.utils';

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
  const aboutSummary = getDataForHomePageAboutSummary();
  return (
    <HomePageStyles>
      {/*Intro Banner  */}
      <Banner />

      {/* Summary About section */}
      <div className="about">
        <p className="sub-title">A Closer Look</p>
        <div className="about-wrapper">
          <div className="about-left-wrapper">
            <h2 className="primary-title">
              {aboutSummary?.title ? aboutSummary.title : 'About Me'}
            </h2>
            {/* if we have a summary post in backend then show that else show this fall back summary */}
            {aboutSummary?.description ? (
              <div
                className="about-desc"
                dangerouslySetInnerHTML={{ __html: aboutSummary.description }}
              />
            ) : (
              <p className="about-desc">
                Shalini Narayanan, D. Phil, straddles the worlds of academia and public service with
                her background as a communications scholar and Indian Information service officer.
                Since she took voluntary retirement from service in 2013, she has been engaged in
                academic and literary writing, training, teaching and learning. She has two books,
                academic papers and a collection of over 500 micro-stories to her name. She is the
                co-author of The WhatsApp India Story: Inside the Maya Sphere (Routledge, 2024) and
                the co-editor of India Connected: Mapping the Impact of New Media (2016) Sage
                Publications.
              </p>
            )}
            <Button onClick={() => navigate('/about')}>Read More</Button>
          </div>
          <div className="about-right-wrapper">
            <Card
              imgSrc={authorIcon}
              title="An Author"
              description="Writes worlds, spins tales, captures hearts with words."
            />
            <Card
              imgSrc={academicIcon}
              title="An Academic"
              description="Educates minds, researches, shapes knowledge, inspires learning."
            />
            <Card
              imgSrc={trainerIcon}
              title="A Trainer"
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
            Itti si Kahani are simple stories that explore big truths about life. They capture small
            moments and evoke various emotions like fear, thrill, romance, compassion, anger, and
            curiosity. The stories also touch on some deep questions, leaving you with more to
            ponder.
          </p>
          <Button
            isUnderlined
            onClick={() => openLinkInNewTab('https://www.youtube.com/@ittisikahani')}
          >
            Visit
          </Button>
        </div>
      </div>

      {/* The Health Factor */}
      <div className="health-factor">
        <div className="wrapper-left">
          <h3 className="secondary-title desktop">The Health Factor</h3>
          <p className="desc">
            It was my honour and privilege to organise <em>The Health Factor</em> – a seminar on
            Health Misinformation and Media Representation, along with Prof. (Dr.) Sunetra Sen
            Narayan in November 2023. The seminar was graced by eminent personalities from the field
            of academics, medicine and media. The experts at the seminar were of the view that
            “pre-bunking” of misinformation or fake news might be a better way to combat
            misinformation in today’s world going through an “infodemic” rather than trying to
            spread media literacy as that effort is slow-moving. They also felt that misinformation
            on health issues could not only lead to delay in getting treatment, with sometimes fatal
            consequences, but could also create a lack of trust in scientific approaches to tackle
            disease. The need for fact-checking myths being perpetuated via social media about
            psychological disorders was also strongly felt. When it comes to media representations,
            the panellists stressed upon the need to sensitise media teams before working on any
            health-related issues- whether on OTT, films or news. the BBC and others. The seminar
            was supported by DataLEADS.
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
          <Button isUnderlined onClick={() => openLinkInNewTab('https://amzn.in/d/hOnX4FN')}>
            Get Now
          </Button>
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
