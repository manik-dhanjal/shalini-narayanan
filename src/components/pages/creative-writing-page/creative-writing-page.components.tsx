import React, { useState } from 'react';
import CreativeWritingPageStyles from './creative-writing-page.styles';
import HorizontalSlider from '../../shared/horizontal-slider/horizontal-slider.components';
import Dropdown, { Option } from 'react-dropdown';
// import 'react-dropdown/style.css';
import { FullWidthCardProps } from '../../shared/full-width-card/full-width-card.interface';
import Pagination from '../../shared/pagination/pagination.components';

const cards: FullWidthCardProps[] = [
  {
    title: 'India Connected: Mapping the Impact of New Media (SAGE)',
    category: 'Book',
    desc: `A first-of-its-kind analysis of the growth of new media in Digital India from a broad communications and interdisciplinary perspective.Can new media help in bringing about development or contribute to social movements? Who is left out of the new media equation? How is the public sphere affected by it? How will it be regulated?`,
    btnText: 'Get Now',
    imgSrc: '../../placeholder',
    link: '',
  },
  {
    title: 'Looking for Myself ',
    category: 'Book',
    desc: `Delve into 'Looking for Myself,' a captivating novella crafted from the author's Facebook blogs. Starting with a brief introduction, the narrative unfolds post her early retirement from a coveted Central Civil Services Group 'A' job in India. Navigating mid-life challenges, the author, still in her 40s, embarks on a quest for identity and purpose. Through open-hearted experiments and a resilient sense of humor, she reflects on the profound realization of life's true priorities. Join her on this introspective journey within the pages of this slim volume.`,
    btnText: 'Get Now',
    imgSrc: '../../placeholder',
    link: '',
  },
  {
    title: 'The WhatsApp India Story: Inside the Digital Maya Sphere',
    category: 'Book',
    desc: `WhatsApp is used by over half a billion people in India today in all fields – in business, corporate and informal sectors, in government, for education and among friends, families and acquaintances. This book critically explores the social messaging app’s rapid expansion in India and its growing influence and looks at whether, as a form of horizontal communication, it poses a challenge to more traditional structures of communication.`,
    btnText: 'Get Now',
    imgSrc: '../../placeholder',
    link: '',
  },
  {
    title: 'Government Information Dissemination Structures and Processes in Disasters',
    category: 'Book',
    desc: `A chapter on Government Information Dissemination Structures and Processes in Disasters published in International Handbook of Disaster Research (Springer) in August, 2022.`,
    btnText: 'Read Now',
    imgSrc: '../../placeholder',
    link: '',
  },
];
const CreativeWritingPage: React.FC = () => {
  const options = ['one', 'two', 'three'];
  const handleCategoryChange = (e: Option) => {
    console.log(e);
  };
  const handlePaginationChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <CreativeWritingPageStyles>
      <h2 className="primary-title underline align-center">Creative Writing & Publications</h2>
      <div className="dropdown-cont">
        <Dropdown
          options={options}
          onChange={handleCategoryChange}
          placeholder="Browse by Category"
          className="dropdown"
        />
      </div>
      <HorizontalSlider cards={cards} />
      <Pagination currentPage={currentPage} totalPages={10} handleChange={handlePaginationChange} />
    </CreativeWritingPageStyles>
  );
};

export default CreativeWritingPage;
