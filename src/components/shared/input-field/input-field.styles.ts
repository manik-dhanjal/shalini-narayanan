import styled from 'styled-components';

const InputFieldStyles = styled.div`
  position: relative;
  padding-bottom: 1.5rem;
  label {
    display: block;
    font-weight: 400;
    font-family: lato;
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  input {
    border: 1px solid #79747e;
    border-radius: 4px;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    font-family: lato;
    color: #0c0c0c;
    width: 100%;
  }
  textarea {
    border: 1px solid #79747e;
    border-radius: 4px;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    font-family: lato;
    color: #0c0c0c;
    width: 100%;
    min-height: 10rem;
  }
  .error {
    position: absolute;
    font-size: 0.7rem;
    bottom: 0.5rem;
    left: 0;
    color: #ff5f5f;
    font-weight: 400;
  }
  .required {
    color: #ff5f5f;
  }
`;

export default InputFieldStyles;
