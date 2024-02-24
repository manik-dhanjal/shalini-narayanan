import React from 'react';
import FooterStyles from './footer.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const BgImg = () => (
  <StaticImage
    src="../../../images/footer-bg.png"
    alt="background footer image"
    layout="fullWidth"
    className="footer-bg"
    placeholder="dominantColor"
  />
);

const Footer = () => {
  return (
    <FooterStyles>
      <div className="wrapper">
        <div className="upper-wrapper">
          <div className="left-wrapper">
            <div className="name">
              Dr. Shalini <br />
              Narayanan
            </div>

            <a href="mailto:nar.shalini@gmail.com" className="email">
              nar.shalini@gmail.com
            </a>
          </div>
          <div className="right-wrapper">
            <ul className="social-links">
              <li className="underline-link">
                <Link to="#" target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li className="underline-link">
                <Link to="#" target="_blank">
                  Instagram
                </Link>
              </li>
              <li className="underline-link">
                <Link to="#" target="_blank">
                  Facebook
                </Link>
              </li>
              <li className="underline-link">
                <Link to="#" target="_blank">
                  X (Twitter)
                </Link>
              </li>
              <li className="underline-link">
                <Link to="#" target="_blank">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lower-wrapper">
          <div className="copyright">© 2024 by Dr. Shalini Narayanan</div>
          <div className="developby">
            <Link to="https://manikdhanjal.com" className="manik-link" target="_blank">
              Built by Manik Dhanjal
            </Link>
          </div>
        </div>
      </div>
      <BgImg />
    </FooterStyles>
  );
};

export default Footer;
