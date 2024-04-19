import React from 'react';
import AcademicTeachingPageStyles from './academic-teaching-page.styles';
import { GatsbyImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { CardType } from '../../shared/card-slider/card-slider.interface';
import demoImg from '../../../images/media-spotlight-demo.png';
import { getAllAcademicTeaching } from '../../../wp-queries/academic-teaching.wp-queries';
import { AcademicTeaching } from './academic-teaching.interface';
import { getAllAcademicPapers } from '../../../wp-queries/academic-papers.wp-queries';
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
      img: academicPaper.img as IGatsbyImageData,
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
            {academicTeaching.img && (
              <GatsbyImage
                image={academicTeaching.img}
                alt={academicTeaching.title}
                class="card-img"
              />
            )}
            <div className="card-content">
              <h3 className="card-title secondary-title">{academicTeaching.title}</h3>
              <p
                className="card-desc paragraph"
                dangerouslySetInnerHTML={{ __html: academicTeaching.description }}
              />
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
