import React, { useState } from 'react';
import Banner from '../../sections/banner/banner.component';
import Button from '../../shared/button/button.component';
import HomePageStyles from './home-page.styles';
import Card from '../../shared/about-card/about-card.component';
import authorIcon from '../../../../static/images/author-icon.png';
import academicIcon from '../../../../static/images/academic-icon.png';
import trainerIcon from '../../../../static/images/trainer-icon.png';
import Slider, { Settings } from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import CardSlider from '../../shared/card-slider/card-slider.component';
import Testimonials from '../../sections/testimonials/testimonial.components';
import { navigate } from 'gatsby';
import { getAllDigitalShowcases, getDataForHomePageAboutSummary } from '../../../content';
import { openLinkInNewTab } from '../../../utils/links.utils';
import Banner2 from '../../sections/banner-2/banner-2.components';

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
          src="../../../../static/images/health-factor-2.png"
          alt="The Health Factor - summary image"
          width={800}
          placeholder="blurred"
        />
      </div>
      <div className="health-factor-slide">
        <StaticImage
          src="../../../../static/images/health-factor-1.png"
          alt="The Health Factor - group photo 1"
          width={800}
          placeholder="blurred"
        />
      </div>
      <div className="health-factor-slide">
        <StaticImage
          src="../../../../static/images/health-factor-3.png"
          alt="The Health Factor - group photo 2"
          width={800}
          placeholder="blurred"
        />
      </div>
    </Slider>
  );
}

// Shows a custom thumbnail and only loads the YouTube player once clicked
function AnalogGenerationVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  if (isPlaying) {
    return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9f_Z_qRIMUU?autoplay=1"
        title="The Analog Generation podcast"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    );
  }
  return (
    <button
      type="button"
      className="video-thumbnail"
      aria-label="Play The Analog Generation podcast"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src="/images/analog-generation-thumbnail.jpg"
        alt="Dr. Shalini Narayanan in conversation on The Analog Generation"
        loading="lazy"
      />
      <StaticImage
        src="../../../../static/images/youtube-logo.png"
        alt=""
        width={100}
        placeholder="blurred"
        className="play-icon"
      />
    </button>
  );
}

const HomePage: React.FC = () => {
  const digitalShowcases = getAllDigitalShowcases();
  const aboutSummary = getDataForHomePageAboutSummary();
  return (
    <HomePageStyles>
      {/*Intro Banner  */}
      <Banner2 />
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
                I am Shalini Narayanan, D. Phil, and I straddle the worlds of academia and public
                service with my background as a communications scholar and Indian Information
                service officer. Since I took voluntary retirement from service in 2013, I have been
                engaged in academic and literary writing, training, teaching and learning. I have
                two books, academic papers and a collection of over 500 micro-stories to my name. I
                am the co-author of The WhatsApp India Story: Inside the Maya Sphere (Routledge,
                2024) and the co-editor of India Connected: Mapping the Impact of New Media (2016)
                Sage Publications.
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

      {/* The Analog Generation Podcast */}
      <div className="itti-si-kahani analog-generation">
        <div className="content">
          <p className="sub-title">Seen. Lived. Now Told.</p>
          <h2 className="primary-title">The Analog Generation</h2>
          <div className="intro-video mobile">
            <AnalogGenerationVideo />
          </div>
          <p className="description">
            The Analog Generation is a podcast that brings history to life through the people who
            lived it. I interview people nearing 90 years of age to understand how India used to be
            in the 1940s – their homes, memories, traditions and struggles, and the stories that
            never made it into textbooks. Honest conversations, lived experiences and wonderfully
            human stories, recorded before they disappear.
          </p>
          <Button
            isUnderlined
            onClick={() => openLinkInNewTab('https://www.youtube.com/@analoggeneration')}
          >
            Listen Now
          </Button>
        </div>
        <div className="intro-video desktop">
          <AnalogGenerationVideo />
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
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
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
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
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

      {/* Latest Book - Health Communication in India */}
      <div className="latest-release">
        <StaticImage
          src="../../../../static/images/health-communication-in-india-book.png"
          alt="Health Communication in India - Strategies and Digital Innovations"
          width={600}
          placeholder="blurred"
          className="book-img"
        />
        <div className="content">
          <div className="head">
            <b>Latest Release</b> “Health Communication in India: Strategies and Digital
            Innovations”
          </div>
          <div className="desc">
            India accounts for 20% of the global disease burden despite having only 17% of the
            world’s population, underscoring the critical need for effective health communication.
            This volume delves into how the world’s most populous democracy addresses health
            communication challenges across its vast linguistic, cultural, and socio-economic
            diversity, offering vital insights for global health practitioners.
            <div className="desc-higlight">
              From theoretical foundations to campaigns on cancer, tuberculosis, leprosy and
              COVID-19, and digital advances such as mHealth, artificial intelligence and the fight
              against health misinformation.
            </div>
          </div>
          <Button
            isUnderlined
            onClick={() =>
              openLinkInNewTab(
                'https://www.routledge.com/Health-Communication-in-India-Strategies-and-Digital-Innovations/Narayanan-Narayan/p/book/9781041318385'
              )
            }
          >
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
