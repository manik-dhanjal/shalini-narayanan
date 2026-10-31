import React from 'react';
import FooterStyles from './footer.styles';
import { StaticImage } from 'gatsby-plugin-image';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BgImg = () => (
  <StaticImage
    src="../../../../static/images/footer-bg.webp"
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
                <a
                  href="https://www.linkedin.com/in/shalini-narayanan-2b665014"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="underline-link">
                <a
                  href="https://www.instagram.com/ittisikahani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="underline-link">
                <a
                  href="https://www.facebook.com/AuthorShaNar?mibextid=2JQ9oc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="underline-link">
                <a
                  href="https://twitter.com/shanar68?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </li>
              <li className="underline-link">
                <a
                  href="https://www.youtube.com/@ittisikahani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
            <div className="social-link-icons">
              <a
                href="https://www.linkedin.com/in/shalini-narayanan-2b665014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </a>
              <a
                href="https://www.instagram.com/ittisikahani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a
                href="https://www.youtube.com/@ittisikahani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </a>
              <a
                href="https://www.facebook.com/AuthorShaNar?mibextid=2JQ9oc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </a>
              <a
                href="https://twitter.com/shanar68?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="lower-wrapper">
          <div className="copyright">© 2024 by Dr. Shalini Narayanan</div>
          <div className="developby">
            <a
              href="https://manikdhanjal.com"
              className="manik-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built by <u>Manik Dhanjal</u>
            </a>
          </div>
        </div>
      </div>
      <BgImg />
    </FooterStyles>
  );
};

export default Footer;
