import styled from 'styled-components';

interface ButtonStyleProps {
  isUnderlined?: boolean;
  width: number;
}

const ButtonStyles = styled.div<ButtonStyleProps>`
  .button {
    text-decoration: ${(props) => (props.isUnderlined ? 'underline' : 'none')};
    position: relative;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: none;
    font-size: 1rem;
    transition: 0.3s ease;
    cursor: pointer;
    display: inline-block;
    .btn-back {
      color: #000;
      width: 100%;
      text-align: center;
      display: block;
      padding: 0.8rem 1.5rem;
    }
    .btn-icon {
      margin-right: 0.5rem;
      font-size: 1rem;
      .spinner-icon {
        animation: rotate 1.5s infinite linear;
      }
    }

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
      padding: 0.8rem ${({ width }) => !width && '0.8rem'};
      white-space: nowrap;
      width: ${({ width }) => (width ? width + 'px' : '100%')};
      text-decoration: ${(props) => (props.isUnderlined ? 'underline' : 'none')};
      display: flex;
      justify-content: center;
    }
    &:hover {
      .btn-hover-wrap {
        width: 100%;
      }
    }
  }
`;

export default ButtonStyles;
