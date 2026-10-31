import React from 'react';
import ContactPageStyle from './contact-page.styles';
import { StaticImage } from 'gatsby-plugin-image';
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
            src="../../../../static/images/contact-pg-img.webp"
            alt="Dr. Shalini Narayanan"
            placeholder="blurred"
            className="contact-img desktop"
            width={900}
          />
          <h3 className="name-title">Dr. Shalini Narayanan</h3>
          <div className="email-link">
            <span className="email-label">Email Id:</span>
            <a href="mailto:nar.shalini@gmail.com">nar.shalini@gmail.com</a>
          </div>
          <div className="social-links">
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

        {/* Right hand side -  Form side */}
        <div className="right">
          <StaticImage
            src="../../../../static/images/contact-pg-img.webp"
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
