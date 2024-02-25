import React from 'react';
import AcademicTeachingPageStyles from './academic-teaching-page.styles';
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
const AcademicTeachingPage: React.FC = () => {
  return (
    <AcademicTeachingPageStyles>
      <h2 className="primary-title underline align-center">Academic Teaching</h2>
      <div className="content">
        <div className="service-card reverse">
          <StaticImage
            src="../../../images/education-at-iimc-academic.png"
            placeholder="blurred"
            width={800}
            alt="Leadership in Education at IIMC (2008-09)"
            class="card-img"
          />
          <div className="card-content">
            <h3 className="card-title secondary-title">
              Leadership in Education at IIMC (2008-09)
            </h3>
            <p className="card-desc paragraph">
              In the academic year 2008-09, Dr. Shalini took on the role of Program Director for the
              Advertising & Public Relations Department at the Indian Institute of Mass
              Communication (IIMC), New Delhi. Overseeing a diverse group of 60+ students, she
              conceptualized and managed the year-long Post-Graduate Diploma in Advertising & Public
              Relations. This encompassed syllabus creation, class organization, teaching, grading,
              and involvement in other PG Diploma programs and short-training courses, including the
              unique Development Journalism Program catering to media professionals from various
              countries.
            </p>
          </div>
        </div>
        <div className="service-card">
          <StaticImage
            src="../../../images/global-engagements-academic.png"
            placeholder="blurred"
            width={800}
            alt="Recognition and Global Engagements"
            class="card-img"
          />
          <div className="card-content">
            <h3 className="card-title secondary-title">Recognition and Global Engagements</h3>
            <p className="card-desc paragraph">
              Awarded the Best Professor Teaching Advertising Management by ABP National B-School
              Awards in 2013, Dr. Narayanan's influence extends globally. She has been an invited
              speaker at esteemed institutions like Jamia Milia Islamia, OP Jindal Global
              University, and Pennsylvania State University. Her speaking engagements cover diverse
              topics, from advertising to new media.
            </p>
          </div>
        </div>
        <div className="service-card reverse">
          <StaticImage
            src="../../../images/media-outreach-academic.png"
            placeholder="blurred"
            width={800}
            alt="Media Outreach and Health Communication"
            class="card-img"
          />
          <div className="card-content">
            <h3 className="card-title secondary-title">Media Outreach and Health Communication</h3>
            <p className="card-desc paragraph">
              Dr. Shalini's impact goes beyond traditional lectures; she has conducted video
              sessions on Vyas TV, reaching over a hundred higher education institutes
              simultaneously. Additionally, she coordinated a Health Communication module for the
              Tata Memorial Centre in Mumbai and contributed to the CPN Indonesia program. This
              program involved lectures by Dr. Narayanan and invited guest faculty, aligning with
              the expertise of Prof. (Dr.) Sunetra Sen Narayan, Head of Health Communication at
              IIMC.
            </p>
          </div>
        </div>
      </div>
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/rSXbl-Wl9iM?si=I5bjrc00ReeKbbKK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="media-spotlight">
        <h3 className="primary-title">Academic Papers</h3>
        <CardSlider cards={cards} />
      </div>
    </AcademicTeachingPageStyles>
  );
};

export default AcademicTeachingPage;
