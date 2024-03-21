import styled from 'styled-components';

const ContactFormStyles = styled.div`
  .required {
    color: #ff5f5f;
  }
  form {
    margin-bottom: 1rem;
  }
  .name-fields {
    label {
      margin-bottom: 0.8rem;
      display: block;
    }
    .name-fields-wrapper {
      display: flex;
      gap: 2rem;
      .input-field-wrapper {
        width: 50%;
      }
    }
  }
  .input-field-wrapper {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    .name-fields-wrapper {
      gap: 1rem !important;
    }
  }
`;

export default ContactFormStyles;
