import { ButtonProps } from './button.interface';
import React from 'react';
import ButtonStyles from './button.styles';

const Button: React.FC<ButtonProps> = ({
  children,
  isUnderlined = false,
  className,
  ...otherProps
}) => {
  return (
    <ButtonStyles isUnderlined={!!isUnderlined} className={className}>
      <button {...otherProps}>
        <div className="btn-hover-wrap">
          <div className="btn-front">{children}</div>
        </div>
        <div className="btn-back">{children}</div>
      </button>
    </ButtonStyles>
  );
};

export default Button;
