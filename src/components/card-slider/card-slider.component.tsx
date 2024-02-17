import React from 'react';
import CardSliderStyles from './card-slider.styles';
import { Card, CardSliderProps, CardType } from './card-slider.interface';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  return (
    <CardSliderStyles className="card-slider">
      <div className="slides-wrapper">
        {cards.map((card: Card, index: number) => (
          <div className="card" key={`${card.title}-${index}`}>
            <Link to={card.link}>
              <StaticImage
                src={card.img}
                alt={card.title}
                placeholder="blurred"
                className="card-img"
                width={400}
              />
              <div className="card-img">
                {/* only show you tube logo if card type is youtube */}
                {card.type === CardType.YOUTUBE && (
                  <StaticImage
                    src="../../images/youtube-logo.png"
                    alt="youtube logo"
                    width={100}
                    placeholder="blurred"
                    className="youtube-logo"
                  />
                )}

                <img src={card.img} />
              </div>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-desc">{card.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </CardSliderStyles>
  );
};
export default CardSlider;
