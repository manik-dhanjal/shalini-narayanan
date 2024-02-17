import styled from 'styled-components';

interface ButtonStyleProps {
  isUnderlined?: boolean;
}

const ButtonStyles = styled.div<ButtonStyleProps>`
  button {
    text-decoration: ${(props) => (props.isUnderlined ? 'underline' : 'none')};
    position: relative;
    padding: 0.8rem 1.5rem;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: none;
    font-size: 1rem;
    cursor: pointer;
    .btn-hover-wrap {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      overflow: hidden;
      transition: 0.8s ease;
      width: 0%;
    }
    .btn-front {
      z-index: 1;
      background-color: #000;
      color: #fff;
      padding: 0.8rem 1.5rem;
      white-space: nowrap;
      text-decoration: ${(props) => (props.isUnderlined ? 'underline' : 'none')};
    }
    &:hover {
      .btn-hover-wrap {
        width: 100%;
      }
    }
  }
`;

export default ButtonStyles;
