import { DetailedHTMLProps, HTMLAttributes, ReactHTMLElement } from 'react';
import { AlertTypes } from './alert.enum';

export interface AlertProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    React.AriaAttributes {
  timeout?: number;
  type: AlertTypes;
}
