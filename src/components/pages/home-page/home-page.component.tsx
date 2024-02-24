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
import demoImg from '../../../images/demo-img.png';
import { CardType } from '../../shared/card-slider/card-slider.interface';

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
  };
  return (
    <Slider {...settings} className="health-factor-slide">
      <div className="health-factor-slide">
        <StaticImage
          src="../../../images/health-factor-2.png"
          alt="The Health Factor - summary image"
          width={600}
          placeholder="blurred"
        />
      </div>
      <div className="health-factor-slide">
        <StaticImage
          src="../../../images/health-factor-1.png"
          alt="The Health Factor - group photo 1"
          width={600}
          placeholder="blurred"
        />
      </div>
      <div className="health-factor-slide">
        <StaticImage
          src="../../../images/health-factor-3.png"
          alt="The Health Factor - group photo 2"
          width={600}
          placeholder="blurred"
        />
      </div>
    </Slider>
  );
}

const cards = [
  {
    title:
      'Interview with Drs. Sunetra Sen Narayan and Shalini Narayanan netra Sen Narayan and Shalini Narayana netra Sen Narayan and Shalini Narayana',
    desc: "Penn State students interviewed Dr. Sunetra Sen Narayan and Dr. Shalini Narayanan on their research about social media's impact on Indian society, featured in their book 'India Connected.'",
    img: demoImg,
    link: 'https://www.youtube.com/watch?v=y-IMwTl3ES4&ab_channel=CivilsdailyIAS',
    type: CardType.YOUTUBE,
  },
  {
    title: 'Interview with Drs. Sunetra Sen Narayan and Shalini Narayanan',
    desc: "Penn State students interviewed Dr. Sunetra Sen Narayan and Dr. Shalini Narayanan on their research about social media's impact on Indian society, featured in their book 'India Connected.'",
    img: demoImg,
    link: 'https://www.youtube.com/watch?v=y-IMwTl3ES4&ab_channel=CivilsdailyIAS',
    type: CardType.YOUTUBE,
  },
  {
    title: 'Interview with Drs. Sunetra Sen Narayan and Shalini Narayanan',
    desc: "Penn State students interviewed Dr. Sunetra Sen Narayan and Dr. Shalini Narayanan on their research about social media's impact on Indian society, featured in their book 'India Connected.'",
    img: demoImg,
    link: 'https://www.youtube.com/watch?v=y-IMwTl3ES4&ab_channel=CivilsdailyIAS',
    type: CardType.YOUTUBE,
  },
  {
    title: 'Interview with Drs. Sunetra Sen Narayan and Shalini Narayanan',
    desc: "Penn State students interviewed Dr. Sunetra Sen Narayan and Dr. Shalini Narayanan on their research about social media's impact on Indian society, featured in their book 'India Connected.'",
    img: demoImg,
    link: 'https://www.youtube.com/watch?v=y-IMwTl3ES4&ab_channel=CivilsdailyIAS',
    type: CardType.YOUTUBE,
  },
];
const HomePage: React.FC = () => {
  return (
    <HomePageStyles>
      {/*Intro Banner  */}
      <Banner />

      {/* Summary About section */}
      <div className="about">
        <p className="sub-title">A Closer Look</p>
        <div className="about-wrapper">
          <div className="about-left-wrapper">
            <h2 className="primary-title">About</h2>
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
        <div className="intro-video">
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
          <h3 className="secondary-title">The Health Factor</h3>
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
        <CardSlider cards={cards} />
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <p className="sub-title align-center">What Folks Are Saying!</p>
        <h2 className="primary-title align-center">Testimonials</h2>
        <div className="wrapper">
          <div className="left-wrapper">
            <div className="testimonial-card">
              <p className="desc">
                Dr. Shalini Narayanan is a communication maestro! Her in-depth knowledge combined
                with her professional experience and engaging teaching style made complex concepts
                accessible and truly captivating for our students. My students emerged from her
                class not only with sharpened communication skills, but also with a newfound
                confidence and a deeper appreciation for the power of effective communication.
              </p>
              <p className="name">
                - Professor (Dr.) Anand Pradhan, Indian Institute of Mass Communication, New Delhi
              </p>
            </div>
            <div className="testimonial-card">
              <p className="desc">
                Your stories are so vivid yet subtle in their message that one finds them simply
                unputdownable. Who won't relate to the incidents, playfulness, banters with the
                generous use of dialects that lend the stories credibility and authenticity? You are
                in fact a master storyteller with an above average command of the craft.
              </p>
              <p className="name">
                - Shashi Kumar Sinha, Former Indian Information Service officer
              </p>
            </div>
          </div>
          <div className="divider" />
          <div className="right-wrapper">
            <div className="testimonial-card">
              <p className="desc">
                I was delighted to host Dr. Shalini Narayan and her co-author Dr. Sunerta Narayan at
                Penn State University in 2017 on an invitation from the Bellisario College of
                Communications and the Penn State Center for Global Studies. Dr. Narayanan's
                interactions with students and faculty, and her visits to classes were highly
                informative and enlightening. She is not only an insightful observer and theorist of
                Indian media and telecommunications but also a versatile practitioner and inspiring
                communicator.
              </p>
              <p className="name">
                - Professor (Dr.) Krishna Jayakar, Pennsylvannia State University, USA
              </p>
            </div>
            <div className="testimonial-card">
              <p className="desc">
                A well crafted compilation of essays that not only describe the journey of the
                author in search of herself, but also are an honest look at Indian society. The
                author has avoided the tendency of social commentators to be judgmental and to
                sermonise Her writing empathises not only with the subjects but also the readers.
                The humour is sharp but not nasty. A book worth reading.
              </p>
              <p className="name">- Vivek Thaokar's review of 'Looking for Myself'</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="desc hindi">
            श्रीमति शालिनी नारायणन जी ने पाठ्यक्रम निदेशक, भारतीय सूचना सेवा, भारतीय जनसंचार संस्थान
            के तौर पर सन् 2010 में मेरे भारतीय सूचना सेवा(समूह-ब) के पूरे पाठ्यक्रम को बेहद नियोजित
            और प्रभावी तरीके से संचालित किया। उन्होंने अपने कार्यकाल में 150 से अधिक परिवीक्षाधीन
            अधिकारियों को प्रशिक्षित किया। वे संचार जगत की एक प्रखर अध्येता हैं और संभवतः इसी ज्ञान
            पिपासा के कारण एक प्रशंसनीय उम्दा अधिकारी होते हुए भी उन्होंने संचार शिक्षा, अनुसंधान और
            अन्वेषण के क्षेत्र का वरण किया। शालिनी मैडम मेरी गुरु भी हैं और मैं अकिंचन भाव के साथ
            उन्हें हार्दिक शुभकामनाएं प्रेषित करता हूं।
          </p>
          <p className="name">- Durganath Swarnakar, IIS (Group B) officer</p>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
