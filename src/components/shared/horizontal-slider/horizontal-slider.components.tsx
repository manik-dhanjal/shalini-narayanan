import React from 'react';
import HorizontalSliderStyles from './horizontal-slider.styles';
import { HorizontalSliderProps } from './horizontal-slider.interface';
import FullWidthCard from '../full-width-card/full-width-card.components';

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ cards }) => {
  return (
    <HorizontalSliderStyles>
      <div className="slider-wrapper">
        <div className="left">
          {cards.slice(0, cards.length / 2).map((card, index) => (
            <FullWidthCard {...card} key={card.title + index} />
          ))}
        </div>
        <div className="right">
          {cards.slice(cards.length / 2, cards.length).map((card, index) => (
            <FullWidthCard {...card} key={card.title + index} />
          ))}
        </div>
      </div>
    </HorizontalSliderStyles>
  );
};

export default HorizontalSlider;
