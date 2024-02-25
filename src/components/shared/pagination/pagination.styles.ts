import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  button {
    cursor: pointer;
  }
  .prev-btn,
  .next-btn {
    border: 1px solid #1d1b20;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  .number-cont {
    display: flex;
    gap: 1rem;
  }
  .number-btn {
    background: none;
    border: none;
    padding: 0 0.5rem;
    font-size: 1rem;
    color: #5f5f5f;
    &.active {
      text-decoration: underline;
      color: #000;
    }
  }
`;

export default PaginationStyles;
