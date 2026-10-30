import React from 'react';
import CardSliderStyles from './card-slider.styles';
import { Card, CardSliderProps, CardType } from './card-slider.interface';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
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
            >
              <div className="card-img">
                {card.img && <img src={card.img} alt={card.title} loading="lazy" />}
                {card.type === CardType.YOUTUBE && (
                  <StaticImage
                    src="../../../../static/images/youtube-logo.png"
                    alt="youtube logo"
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
              <h4 className="card-title">{card.title}</h4>
              <div className="card-desc" dangerouslySetInnerHTML={{ __html: card.desc }} />
            </a>
          </div>
        ))}
      </div>
    </CardSliderStyles>
  );
};
export default CardSlider;
