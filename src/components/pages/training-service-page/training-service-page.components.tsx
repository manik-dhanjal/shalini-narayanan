import React from 'react';
import TrainingServicesPageStyles from './training-service-page.styles';
import CardSlider from '../../shared/card-slider/card-slider.component';
import { TrainingService } from './training-service.interface';
import { getAllMediaSpotlight, getAllTrainingServices } from '../../../content';

const TrainingServicesPage: React.FC = () => {
  const trainingService = getAllTrainingServices();
  const mediaSpotlight = getAllMediaSpotlight();
  return (
    <TrainingServicesPageStyles>
      <h2 className="primary-title underline align-center">Training Services</h2>
      <div className="content">
        {trainingService.map((trainingService: TrainingService, index) => (
          // reverse card horizontal orienation if card number is odd
          <div
            className={`service-card ${index % 2 === 0 && 'reverse'}`}
            key={trainingService.title + index}
          >
            {trainingService.img && (
              <img
                src={trainingService.img}
                alt={trainingService.title}
                className="card-img"
                loading="lazy"
              />
            )}
            <div className="card-content">
              <h3 className="card-title secondary-title">{trainingService.title}</h3>
              <div
                className="card-desc paragraph"
                dangerouslySetInnerHTML={{ __html: trainingService.description }}
              />
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
        <h3 className="primary-title">Media Spotlight</h3>
        <CardSlider cards={mediaSpotlight} />
      </div>
    </TrainingServicesPageStyles>
  );
};

export default TrainingServicesPage;
