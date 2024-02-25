import { ButtonStatus } from './button.enums';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {
  isUnderlined?: boolean;
  status?: ButtonStatus;
  hoverMessage?: string;
}
