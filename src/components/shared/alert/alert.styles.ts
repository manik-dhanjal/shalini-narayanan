import styled from 'styled-components';
import { AlertTypes } from './alert.enum';

interface AlertStylesProps {
  type: AlertTypes;
}
const AlertStyles = styled.div<AlertStylesProps>`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  max-width: 1440px;
  padding: 1rem 0.5rem;
  background-color: #ccecff;
`;

export default AlertStyles;
