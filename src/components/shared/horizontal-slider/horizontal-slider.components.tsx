import React from 'react';
import HorizontalSliderStyles from './horizontal-slider.styles';
import { HorizontalSliderProps } from './horizontal-slider.interface';
import FullWidthCard from '../full-width-card/full-width-card.components';

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ cards }) => {
  return (
    <HorizontalSliderStyles>
      <div className="slider-wrapper">
        {cards.map((card, index) => (
          <FullWidthCard {...card} key={card.title + index} />
        ))}
      </div>
    </HorizontalSliderStyles>
  );
};

export default HorizontalSlider;
