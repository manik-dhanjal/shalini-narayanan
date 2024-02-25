import React from 'react';
import AlertStyles from './alert.styles';
import { AlertProps } from './alert.interface';
import { AlertTypes } from './alert.enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Alert: React.FC<AlertProps> = ({ children, timeout = 3000, type }) => {
  return (
    <AlertStyles type={type}>
      <span className="alert-icon">
        {type === AlertTypes.PRIMARY && <FontAwesomeIcon icon={faBell} className="icon" />}
        {type === AlertTypes.SUCCESS && <FontAwesomeIcon icon={faCircleCheck} className="icon" />}
        {type === AlertTypes.ERROR && (
          <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
        )}
      </span>
      {children}
    </AlertStyles>
  );
};

export default Alert;
