import React from 'react';
import CardSliderStyles from './card-slider.styles';
import { Card, CardSliderProps, CardType } from './card-slider.interface';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <CardSliderStyles className="card-slider">
      <div className="slides-wrapper">
        {cards.map((card: Card, index: number) => (
          <div className="card" key={`${card.title}-${index}`}>
            <Link to={card.link} target={card.type === CardType.YOUTUBE ? '_blank' : '_self'}>
              <div className="card-img">
                <GatsbyImage image={card.img} alt={card.title} />
                {card.type === CardType.YOUTUBE && (
                  <StaticImage
                    src="../../../images/youtube-logo.png"
                    alt="youtube logo"
                    width={100}
                    placeholder="blurred"
                    className="youtube-logo"
                  />
                )}
              </div>
              <h4 className="card-title">{card.title}</h4>
              <div className="card-desc" dangerouslySetInnerHTML={{ __html: card.desc }} />
            </Link>
          </div>
        ))}
      </div>
    </CardSliderStyles>
  );
};
export default CardSlider;
