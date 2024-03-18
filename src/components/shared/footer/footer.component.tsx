import React from 'react';
import FooterStyles from './footer.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
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
            <div className="social-link-icons">
              <Link to="https://www.linkedin.com/in/shalini-narayanan-2b665014" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </Link>
              <Link
                to="https://www.instagram.com/narayananshalini?utm_source=qr&igsh=bWh1NTRqenhvemp5"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </Link>
              <Link to="https://www.youtube.com/@ittisikahani" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </Link>
              <Link to="https://www.facebook.com/AuthorShaNar?mibextid=2JQ9oc" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </Link>
              <Link to="https://www.facebook.com/AuthorShaNar?mibextid=2JQ9oc" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lower-wrapper">
          <div className="copyright">© 2024 by Dr. Shalini Narayanan</div>
          <div className="developby">
            <Link to="https://manikdhanjal.com" className="manik-link" target="_blank">
              Built by <u>Manik Dhanjal</u>
            </Link>
          </div>
        </div>
      </div>
      <BgImg />
    </FooterStyles>
  );
};

export default Footer;
