import React from 'react';
import TrainingServicesPageStyles from './training-service-page.styles';
import { StaticImage } from 'gatsby-plugin-image';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { CardType } from '../../shared/card-slider/card-slider.interface';
import demoImg from '../../../images/media-spotlight-demo.png';
const cards = [
  {
    title: 'Workshop at NAAA Creating Memories and Skillful Scenarios!',
    desc: 'Learning should be fun. And as a trainer one feels fulfilled if a half-day #workshop eats into lunchtime without your trainees even realising it!...',
    img: demoImg,
    link: 'https://www.linkedin.com/posts/shalini-narayanan-2b665014_training-workshop-naaa-activity-7126508166942457857-4yrH/?utm_source=share&utm_medium=member_desktop',
    type: CardType.OTHER,
  },
  {
    title: 'Workshop at NAAA Creating Memories and Skillful Scenarios!',
    desc: 'Learning should be fun. And as a trainer one feels fulfilled if a half-day #workshop eats into lunchtime without your trainees even realising it!...',
    img: demoImg,
    link: 'https://www.linkedin.com/posts/shalini-narayanan-2b665014_training-workshop-naaa-activity-7126508166942457857-4yrH/?utm_source=share&utm_medium=member_desktop',
    type: CardType.OTHER,
  },
  {
    title: 'Workshop at NAAA Creating Memories and Skillful Scenarios!',
    desc: 'Learning should be fun. And as a trainer one feels fulfilled if a half-day #workshop eats into lunchtime without your trainees even realising it!...',
    img: demoImg,
    link: 'https://www.linkedin.com/posts/shalini-narayanan-2b665014_training-workshop-naaa-activity-7126508166942457857-4yrH/?utm_source=share&utm_medium=member_desktop',
    type: CardType.OTHER,
  },
  {
    title: 'Workshop at NAAA Creating Memories and Skillful Scenarios!',
    desc: 'Learning should be fun. And as a trainer one feels fulfilled if a half-day #workshop eats into lunchtime without your trainees even realising it!...',
    img: demoImg,
    link: 'https://www.linkedin.com/posts/shalini-narayanan-2b665014_training-workshop-naaa-activity-7126508166942457857-4yrH/?utm_source=share&utm_medium=member_desktop',
    type: CardType.OTHER,
  },
];
const TrainingServicesPage: React.FC = () => {
  return (
    <TrainingServicesPageStyles>
      <h2 className="primary-title underline align-center">Training Services</h2>
      <div className="content">
        <div className="service-card reverse">
          <StaticImage
            src="../../../images/iimc-training-service.png"
            placeholder="blurred"
            width={800}
            alt="Training Excellence at IIMC"
            class="card-img"
          />
          <div className="card-content">
            <h3 className="card-title secondary-title">Training Excellence at IIMC</h3>
            <p className="card-desc paragraph">
              Dr. Shalini Narayanan's extensive career has seen her train Officer Trainees,
              government officials, and PSU executives at the Indian Institute of Mass Communication
              (IIMC). Specializing in new media, governance, and fact-checking, she served as the
              Course Director for Indian Information Service officers, both Group 'A' and Group 'B,'
              during her impactful five-year tenure.
            </p>
          </div>
        </div>
        <div className="service-card">
          <StaticImage
            src="../../../images/national-speaker-training.png"
            placeholder="blurred"
            width={800}
            alt="National Speaker and Academic Recognition"
            class="card-img"
          />
          <div className="card-content">
            <h3 className="card-title secondary-title">
              National Speaker and Academic Recognition
            </h3>
            <p className="card-desc paragraph">
              Beyond her training role, Dr. Narayanan has gained national recognition as a speaker
              and academician. In 2022, she was invited to prestigious institutions like the
              National Academy of Audit and Accounts (NAAA) in Shimla, Lal Bahadur Shastri National
              Academy of Administration (LBSNAA) in Mussoorie, and the National Police Academy (NPA)
              in Hyderabad to deliver lectures on new media and governance.
            </p>
          </div>
        </div>
        <div className="service-card reverse">
          <StaticImage
            src="../../../images/health-fact-checking-training.png"
            placeholder="blurred"
            width={800}
            alt="Training Excellence at IIMC"
            class="card-img"
          />
          <div className="card-content">
            <h3 className="card-title secondary-title">Health Fact-Checking Expertise</h3>
            <p className="card-desc paragraph">
              In 2020, Dr. Narayanan achieved a significant milestone by becoming a certified Health
              Fact Checker. This certification reflects her dedication to ensuring accuracy not only
              in media and governance but also in the critical realm of health information.
            </p>
          </div>
        </div>
      </div>
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/TblgIhkMgqw?si=gZp_LI4b23mA4EbF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="media-spotlight">
        <h3 className="primary-title">Media Spotlight</h3>
        <CardSlider cards={cards} />
      </div>
    </TrainingServicesPageStyles>
  );
};

export default TrainingServicesPage;
