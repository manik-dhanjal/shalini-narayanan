import { ButtonProps } from './button.interface';
import React, { useEffect, useRef, useState } from 'react';
import ButtonStyles from './button.styles';
import { ButtonStatus } from './button.enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { isInternalLink } from '../../../utils/links.utils';

const Button: React.FC<ButtonProps> = ({
  children,
  isUnderlined = false,
  className,
  status,
  hoverMessage,
  href,
  download,
  target = '_self',
  ...otherProps
}) => {
  const ref = useRef(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth((ref?.current as any)?.offsetWidth || 0);
  }, [children, hoverMessage]);

  const linkContent = (
    <>
      <div className="btn-hover-wrap">
        <div className="btn-front">{hoverMessage || children}</div>
      </div>
      <div className="btn-back" ref={ref}>
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
    </>
  );

  return (
    <ButtonStyles $isUnderlined={!!isUnderlined} className={className} $width={width}>
      {!href ? (
        <button {...otherProps} ref={ref} className="button">
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
      ) : isInternalLink(href) && !download ? (
        <Link to={href} className="button" target={target}>
          {linkContent}
        </Link>
      ) : (
        <a
          href={href}
          download={download}
          className="button"
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {linkContent}
        </a>
      )}
    </ButtonStyles>
  );
};

export default Button;
