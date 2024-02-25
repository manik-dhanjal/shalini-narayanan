import { ButtonProps } from './button.interface';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ButtonStyles from './button.styles';
import { ButtonStatus } from './button.enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Button: React.FC<ButtonProps> = ({
  children,
  isUnderlined = false,
  className,
  status,
  hoverMessage,
  ...otherProps
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(ref?.current?.offsetWidth || 0);
  }, [children, hoverMessage]);
  return (
    <ButtonStyles isUnderlined={!!isUnderlined} className={className} width={width}>
      <button {...otherProps} ref={ref}>
        {status !== ButtonStatus.LOADING && (
          <div className="btn-hover-wrap">
            <div className="btn-front">{hoverMessage || children}</div>
          </div>
        )}
        <div className="btn-back">
          {status === ButtonStatus.LOADING && (
            <span className="btn-icon">
              <FontAwesomeIcon icon={faSpinner} className="spinner-icon" />
            </span>
          )}
          {status === ButtonStatus.SUCCESS && (
            <span className="btn-icon">
              <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
            </span>
          )}
          {status === ButtonStatus.ERROR && (
            <span className="btn-icon">
              <FontAwesomeIcon icon={faCircleExclamation} className="error-icon" />
            </span>
          )}
          {children}
        </div>
      </button>
    </ButtonStyles>
  );
};

export default Button;
