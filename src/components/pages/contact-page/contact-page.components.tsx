import React from 'react';
import ContactPageStyle from './contact-page.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../../sections/contact-form/contact-form.componets';

const ContactPage: React.FC = () => {
  return (
    <ContactPageStyle>
      <h2 className="primary-title align-center underline"> Contact </h2>
      <div className="wrapper">
        {/* Left hand side of contact page */}
        <div className="left">
          <StaticImage
            src="../../../images/contact-pg-img.png"
            alt="Dr. Shalini Narayanan"
            placeholder="blurred"
            className="contact-img desktop"
            width={900}
          />
          <h3 className="name-title">Dr. Shalini Narayanan</h3>
          <div className="email-link">
            <span className="email-label">Email Id:</span>
            <Link to="mailto:nar.shalini@gmail.com">nar.shalini@gmail.com</Link>
          </div>
          <div className="social-links">
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
            <Link to="https://twitter.com/shanar68?lang=en" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
            </Link>
          </div>
        </div>

        {/* Right hand side -  Form side */}
        <div className="right">
          <StaticImage
            src="../../../images/contact-pg-img.png"
            alt="Dr. Shalini Narayanan"
            placeholder="blurred"
            className="contact-img mobile"
            width={900}
          />
          <ContactForm />
        </div>
      </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
