import React from 'react';
import TrainingServicesPageStyles from './training-service-page.styles';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { TrainingService } from './training-service.interface';
import ImageCarousel from '../../shared/image-carousel/image-carousel.component';
import { getAllMediaSpotlight, getAllTrainingServices } from '../../../content';
import Button from '../../shared/button/button.component';

const TrainingServicesPage: React.FC = () => {
  const trainingService = getAllTrainingServices();
  const mediaSpotlight = getAllMediaSpotlight();
  return (
    <TrainingServicesPageStyles>
      <h1 className="primary-title underline align-center">Training Services</h1>
      <div className="content">
        {trainingService.map((trainingService: TrainingService, index) => (
          // reverse card horizontal orienation if card number is odd
          <div
            className={`service-card ${index % 2 === 0 && 'reverse'}`}
            key={trainingService.title + index}
          >
            {trainingService.images.length > 0 && (
              <div className="card-img">
                <ImageCarousel images={trainingService.images} title={trainingService.title} />
              </div>
            )}
            <div className="card-content">
              <h2 className="card-title secondary-title">{trainingService.title}</h2>
              <div
                className="card-desc paragraph"
                dangerouslySetInnerHTML={{ __html: trainingService.description }}
              />
              {trainingService.link && (
                <Button
                  isUnderlined
                  href={trainingService.link}
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
      {/* you tube video link: https://www.youtube.com/watch?v=TblgIhkMgqw*/}

      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/TblgIhkMgqw?si=gZp_LI4b23mA4EbF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Media Spotlight cards carosel */}
      <div className="media-spotlight">
        <h2 className="primary-title">Media Spotlight</h2>
        <CardSlider cards={mediaSpotlight} />
      </div>
    </TrainingServicesPageStyles>
  );
};

export default TrainingServicesPage;
