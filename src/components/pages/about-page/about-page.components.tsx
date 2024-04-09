import React from 'react';
import AboutStyles from './about-page.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../../shared/button/button.component';
import { getDataForAboutPage } from '../../../wp-queries/about.wp-queries';
import { AboutSectionTypes } from './about.enum';

const AboutPage: React.FC = () => {
  const allAbout = getDataForAboutPage();
  const primaryAbout =
    allAbout.find((about) => about.sectionType === AboutSectionTypes.PRIMARY) || null;

  const subPrimaryAboutList =
    allAbout.filter((about) => about.sectionType === AboutSectionTypes.SUB_PRIMARY) || [];

  const secondaryAbout =
    allAbout.find((about) => about.sectionType === AboutSectionTypes.SECONDARY) || null;

  return (
    <AboutStyles>
      <div className="summary">
        <h2 className="primary-title tablet">
          About Dr. Shalini <br /> Narayanan
        </h2>
        {primaryAbout?.img && (
          <GatsbyImage
            image={primaryAbout.img}
            alt="Shalini Narayanan's image"
            class="card-img shalinis-img"
          />
        )}

        <div className="content">
          <h2 className="primary-title desktop">
            About Dr. Shalini <br /> Narayanan
          </h2>
          <Button className="cv-btn">Curriculum Vitae (CV)</Button>
          {primaryAbout?.description && (
            <div
              className="about-primary-description"
              dangerouslySetInnerHTML={{ __html: primaryAbout.description }}
            />
          )}
        </div>
      </div>
      {subPrimaryAboutList?.length &&
        subPrimaryAboutList.map((subPrimaryAbout, index) => (
          <div className="service" key={subPrimaryAbout.title + index}>
            <h3 className="tertiary-head">{subPrimaryAbout.title}</h3>
            <div
              className="sub-primary-description paragraph"
              dangerouslySetInnerHTML={{ __html: subPrimaryAbout.description }}
            />
          </div>
        ))}

      {secondaryAbout && (
        <div className="co-training">
          <h3 className="tertiary-head">{secondaryAbout.title}</h3>
          <div className="content">
            {secondaryAbout.img && (
              <GatsbyImage
                image={secondaryAbout.img}
                alt={secondaryAbout.title}
                className="sunetra-sen-img"
              />
            )}
            <div
              className="secondary-about-description"
              dangerouslySetInnerHTML={{ __html: secondaryAbout?.description }}
            ></div>
          </div>
        </div>
      )}
    </AboutStyles>
  );
};

export default AboutPage;
