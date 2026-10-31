import React from 'react';
import Slider, { Settings } from 'react-slick';
import AcademicTeachingPageStyles from './academic-teaching-page.styles';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { CardType } from '../../shared/card-slider/card-slider.interface';
import demoImg from '../../../../static/images/media-spotlight-demo.png';
import { AcademicTeaching, AcademicTeachingImage } from './academic-teaching.interface';
import { getAllAcademicPapers, getAllAcademicTeaching } from '../../../content';
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
// a single image, or a captioned carousel when a card has several
function CardImages({ images, title }: { images: AcademicTeachingImage[]; title: string }) {
  const renderImage = (image: AcademicTeachingImage) => (
    <figure className="card-figure" key={image.src}>
      <img src={image.src} alt={image.caption || title} loading="lazy" />
      {image.caption && <figcaption className="card-caption">{image.caption}</figcaption>}
    </figure>
  );
  if (images.length === 1) return renderImage(images[0]);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    appendDots: (dots) => <ul className="slick-pagination"> {dots} </ul>,
    customPaging: () => <div className="slick-pag-item"></div>,
    arrows: false,
  };
  return (
    <Slider {...settings} className="card-slider">
      {images.map(renderImage)}
    </Slider>
  );
}

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
                <CardImages images={academicTeaching.images} title={academicTeaching.title} />
              </div>
            )}
            <div className="card-content">
              <h3 className="card-title secondary-title">{academicTeaching.title}</h3>
              <div
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
