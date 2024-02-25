import styled from 'styled-components';

const CreativeWritingPageStyles = styled.div`
  margin-bottom: 4.5rem;
  margin-top: 2.5rem;
  .primary-title {
    margin-bottom: 3.5rem;
  }
  .dropdown-cont {
    display: flex;
    justify-content: end;
  }
  .dropdown {
    position: relative;
    margin-bottom: 3rem;
    min-width: 13rem;
    padding: 0.6rem 1rem;
    padding-right: 2.5rem;
    color: #1d1b20;
    border-bottom: 1px solid #cac4d0;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 1px;
      background-color: #1d1b20;
      width: 0%;
      transition: 0.3s ease;
    }

    .Dropdown-menu {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0;
      border-radius: 0.4rem;
      box-shadow: 0px 2px 6px 2px #00000026;
      min-width: 13rem;
      position: absolute;
      right: 0;
      top: 3rem;
      font-size: 1rem;
      background-color: #fff;
      z-index: 1001;
      .Dropdown-option {
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        &:hover {
          background: #f3f3f3;
          transition: 0.3s ease;
        }
      }
    }
    .Dropdown-arrow {
      border-color: #1d1b20 transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: block;
      height: 0;
      margin-top: -ceil(2.5);
      position: absolute;
      right: 0.8rem;
      top: 55%;
      transform: translateY(-50%);
      width: 0;
    }
    &.is-open {
      &:after {
        width: 100%;
      }
    }
    &.is-open .Dropdown-arrow {
      border-color: transparent transparent #1d1b20;
      border-width: 0 5px 5px;
    }
  }
  .pagination {
    margin: 4.5rem 0;
  }
`;

export default CreativeWritingPageStyles;
