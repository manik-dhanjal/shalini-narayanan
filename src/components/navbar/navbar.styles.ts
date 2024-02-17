import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3.5rem;
  max-width: 1440px;
  margin: auto;
  background-color: #fff;
  z-index: 1000;
  position: sticky;
  top: 0;
  // main nav menu
  .menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    font-size: 1.1rem;
    .menu-item {
      padding: 1rem 0rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      a {
        color: #000;
        text-decoration: none;
      }

      &::after {
        content: '';
        width: 0%;
        height: 1px;
        background: #000;
        position: absolute;
        bottom: 0.9rem;
        left: 0;
        transition: 0.3s ease;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    // toogle sub menu on hover
    .with-sub {
      .sub-menu {
        display: none;
      }
      &:hover {
        .sub-menu {
          display: block;
        }
      }
    }
  }

  // sub menu
  .sub-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    border-radius: 0.4rem;
    box-shadow: 0px 2px 6px 2px #00000026;
    min-width: 12rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 3rem;
    font-size: 1rem;
    background-color: #fff;
    z-index: 1001;
    .sub-menu-item {
      padding: 0.6rem 1.5rem;
      cursor: pointer;
      &:hover {
        background: #f3f3f3;
        transition: 0.3s ease;
      }
    }
  }
`;
