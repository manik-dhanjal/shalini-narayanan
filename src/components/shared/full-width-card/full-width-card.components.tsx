import React from 'react';
import FullWidthCardStyles from './full-width-card.styles';
import { FullWidthCardProps } from './full-width-card.interface';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../button/button.component';

const FullWidthCard: React.FC<FullWidthCardProps> = ({
  imgSrc,
  title,
  desc,
  link,
  category,
  btnText,
}) => {
  return (
    <FullWidthCardStyles className="full-width-card">
      <StaticImage
        src="../../../images/placeholder-img.png"
        alt={title}
        width={600}
        placeholder="blurred"
        className="card-img"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-category">{category}</div>
        <p className="card-desc">{desc}</p>
        <Button isUnderlined>{btnText}</Button>
      </div>
    </FullWidthCardStyles>
  );
};

export default FullWidthCard;
