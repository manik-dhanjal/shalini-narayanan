import React, { useState } from 'react';
import CreativeWritingPageStyles from './creative-writing-page.styles';
import HorizontalSlider from '../../shared/horizontal-slider/horizontal-slider.components';
import Dropdown, { Option } from 'react-dropdown';
// import 'react-dropdown/style.css';
import { FullWidthCardProps } from '../../shared/full-width-card/full-width-card.interface';
import { getAllCategories } from '../../../wp-queries/categories.wp-queries';
import { getAllCreativeWriting } from '../../../wp-queries/creative-writing.wp-queries';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { CreativeWritingProps } from './creative-writing.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';

const CreativeWritingPage: React.FC = () => {
  const INITIAL_CATEGORY = { label: 'All', value: 'all' };
  const listOfContent = getAllCreativeWriting();
  const rawCategories = getAllCategories().map((category) => {
    return {
      label: category.name,
      value: category.id,
    };
  });
  const categories = [INITIAL_CATEGORY, ...rawCategories];
  const [activeCategory, setActiveCategory] = useState<Partial<Option>>(INITIAL_CATEGORY);

  const handleCategoryChange = (e: Option) => {
    setActiveCategory({
      label: e.label,
      value: e.value,
    });
  };
  const getfilteredList = (list: CreativeWritingProps[], catId: string): FullWidthCardProps[] => {
    return list
      .filter((content) => {
        if (catId === 'all') return true;
        return !!content.categories.find((category) => category.id === catId);
      })
      .map((content) => {
        return {
          title: content.title,
          categories: content.categories,
          desc: content.description,
          btnText: 'View',
          imgSrc: content.img as IGatsbyImageData,
          link: content.link,
        };
      });
  };

  const cards = getfilteredList(listOfContent, activeCategory.value as string);

  return (
    <CreativeWritingPageStyles>
      <h2 className="primary-title underline align-center">Creative Writing & Publications</h2>
      <div className="dropdown-cont">
        <Dropdown
          options={categories}
          onChange={handleCategoryChange}
          placeholder="Browse by Category"
          className="dropdown"
          value="all"
        />
      </div>
      {!cards?.length ? (
        // show this if no cards are available for following category
        <div className="Not-found">
          <FontAwesomeIcon icon={faHourglassStart} className="icon" />
          <p>Content for {activeCategory.label} Category will be uploaded soon ...</p>
        </div>
      ) : (
        <HorizontalSlider cards={cards} />
      )}

      {/* <Pagination currentPage={currentPage} totalPages={10} handleChange={handlePaginationChange} /> */}
    </CreativeWritingPageStyles>
  );
};

export default CreativeWritingPage;
