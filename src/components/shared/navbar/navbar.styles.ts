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
  #nav-menu {
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
  }
  .sub-menu-icon {
    display: none;
  }

  // close icon
  .menu-btn {
    z-index: 1001;
    display: none;
    width: 45px;
    height: 30px;
    cursor: pointer; /* Comment this when use on Tablets/Smartphones */
    position: relative;
  }
  .menu-btn span {
    position: absolute;
    background: #000;
    width: 100%;
    height: 16%;
    transition: 0.4s 0.4s top, 0.4s 0.4s bottom, 0.3s transform, 0.2s background-color;
  }
  .menu-btn span:nth-of-type(1) {
    top: 0;
    z-index: 1;
  }
  .menu-btn span:nth-of-type(2) {
    top: 40%;
    opacity: 1;
    transition: opacity 0.1s 0.4s;
  }
  .menu-btn span:nth-of-type(3) {
    bottom: 0;
    z-index: 1;
  }

  /* Animation */
  .close span {
    transition: 0.4s top, 0.4s bottom, 0.4s 0.4s transform, 0.4s background-color;
    background: #fff;
  }
  .close span:nth-of-type(1) {
    top: 40%;
    transform: rotate(45deg);
  }
  .close span:nth-of-type(2) {
    opacity: 0;
    transition: opacity 0.1s 0.4s;
  }
  .close span:nth-of-type(3) {
    bottom: 40%;
    transform: rotate(-45deg);
  }

  @media screen and (min-width: 780px) {
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
    .social-links {
      display: none;
    }
  }
  @media screen and (max-width: 780px) {
    padding: 0.8rem 2rem;
    .menu {
      position: fixed;
      top: 0;
      left: 100%;
      background-color: #000;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
      padding: 3rem 2rem;
      transition: 0.4s ease;
      overflow-y: auto;
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: center;
      &.close {
        left: 0;
      }
    }
    #nav-menu {
      color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      display: flex;
      gap: 0;
      .menu-item {
        a {
          color: #fff !important;
        }
        &::after {
          display: none;
        }
        color: #fff !important;
        font-size: 2rem;
        position: relative;
        padding: 0;
        margin-bottom: 2rem;
        &.with-sub {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          ul {
            list-style-type: none;
          }
          .sub-menu-item {
            margin-left: 2rem;
            margin-bottom: 2rem;
            &:last-of-type {
              margin-bottom: 0;
            }
            &:first-of-type {
              margin-top: 2rem;
            }
          }
        }
        .sub-menu {
          overflow: hidden;
          transition: 0.4s ease;
          height: 213px;
          &.close {
            height: 0;
          }
        }
      }
    }
    .menu-btn {
      display: block;
    }
    .sub-menu-icon {
      color: #fff;
      font-size: 1.5rem;
      margin-left: 2rem;
      transition: 0.4s ease;
      display: inline-block;
      &.close {
        transform: rotate(180deg);
      }
    }
    .social-links {
      margin-top: 2rem;
      display: flex;
      gap: 2rem;
      color: #fff;
      a {
        color: #fff;
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0.8rem 1rem;
    .logo {
      max-width: 160px;
    }
    .menu-btn {
      width: 30px;
      height: 20px;
    }
    #nav-menu {
      a {
        font-size: 1.5rem;
      }
      .menu-item {
        margin-bottom: 1.5rem;
      }
      .sub-menu-item {
        margin-bottom: 1.5rem !important;
      }
      .menu-item-with-sub {
        font-size: 1.5rem;
        .sub-menu-icon {
          font-size: 1rem;
          margin-left: 1rem;
        }
      }
    }
  }
`;
