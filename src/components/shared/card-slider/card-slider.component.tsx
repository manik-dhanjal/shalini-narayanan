import React, { useCallback, useState } from 'react';
import CardSliderStyles from './card-slider.styles';
import { Card, CardSliderProps, CardType } from './card-slider.interface';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import VideoModal from '../video-modal/video-modal.component';
import ContentImage from '../content-image/content-image.component';

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const [activeVideo, setActiveVideo] = useState<Card | null>(null);
  const closeVideo = useCallback(() => setActiveVideo(null), []);
  return (
    <CardSliderStyles className="card-slider">
      <div className="slides-wrapper">
        {cards.map((card: Card, index: number) => (
          <div className="card" key={`${card.title}-${index}`}>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              download={card.type === CardType.DOWNLOADABLE ? card.title : undefined}
              onClick={(event) => {
                // self-hosted videos play in a popup instead of a new tab
                if (card.type === CardType.VIDEO) {
                  event.preventDefault();
                  setActiveVideo(card);
                }
              }}
            >
              <div className="card-img">
                {card.img && <ContentImage src={card.img} alt={card.title} />}
                {(card.type === CardType.YOUTUBE || card.type === CardType.VIDEO) && (
                  <StaticImage
                    src="../../../../static/images/youtube-logo.webp"
                    alt="Play video"
                    width={100}
                    placeholder="blurred"
                    className="youtube-logo"
                  />
                )}
                {card.type === CardType.DOWNLOADABLE && (
                  <div className="download-icon">
                    <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
                  </div>
                )}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <div className="card-desc" dangerouslySetInnerHTML={{ __html: card.desc }} />
            </a>
          </div>
        ))}
      </div>
      {activeVideo && (
        <VideoModal src={activeVideo.link} title={activeVideo.title} onClose={closeVideo} />
      )}
    </CardSliderStyles>
  );
};
export default CardSlider;
