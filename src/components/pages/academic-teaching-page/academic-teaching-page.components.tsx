import React from 'react';
import AcademicTeachingPageStyles from './academic-teaching-page.styles';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { CardType } from '../../shared/card-slider/card-slider.interface';
import demoImg from '../../../../static/images/media-spotlight-demo.webp';
import { AcademicTeaching } from './academic-teaching.interface';
import ImageCarousel from '../../shared/image-carousel/image-carousel.component';
import { getAllAcademicPapers, getAllAcademicTeaching } from '../../../content';
import Button from '../../shared/button/button.component';
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
  const academicTeaching = getAllAcademicTeaching();
  const academicPapers = getAllAcademicPapers();
  const academicPapersForCards = academicPapers.map((academicPaper) => {
    return {
      title: academicPaper.title,
      desc: academicPaper.description,
      img: academicPaper.img,
      link: academicPaper.link,
      type: academicPaper.isDownloable ? CardType.DOWNLOADABLE : CardType.OTHER,
    };
  });
  return (
    <AcademicTeachingPageStyles>
      <h2 className="primary-title underline align-center">Academic Teaching</h2>
      <div className="content">
        {academicTeaching.map((academicTeaching: AcademicTeaching, index) => (
          // reverse card horizontal orienation if card number is odd
          <div
            className={`service-card ${index % 2 === 0 && 'reverse'}`}
            key={academicTeaching.title + index}
          >
            {academicTeaching.images.length > 0 && (
              <div className="card-img">
                <ImageCarousel images={academicTeaching.images} title={academicTeaching.title} />
              </div>
            )}
            <div className="card-content">
              <h3 className="card-title secondary-title">{academicTeaching.title}</h3>
              <div
                className="card-desc paragraph"
                dangerouslySetInnerHTML={{ __html: academicTeaching.description }}
              />
              {academicTeaching.link && (
                <Button
                  isUnderlined
                  href={academicTeaching.link}
                  target="_blank"
                  className="card-link"
                >
                  View Post
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/rSXbl-Wl9iM?si=I5bjrc00ReeKbbKK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="media-spotlight">
        <h3 className="primary-title">Academic Papers</h3>
        <CardSlider cards={academicPapersForCards} />
      </div>
    </AcademicTeachingPageStyles>
  );
};

export default AcademicTeachingPage;
