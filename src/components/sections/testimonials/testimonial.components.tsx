import React from 'react';
import { TestimonialStyles } from './testimonial.styles';
import { TestimonialCardProps } from '../../shared/testimonial-card/testimonial-card.interface';
import { Language } from '../../shared/enum/language.enum';
import TestimonialCard from '../../shared/testimonial-card/testimonial-card.components';
import Slider, { Settings } from 'react-slick';

const DEFAULT_TESTIMONIALS: TestimonialCardProps[] = [
  {
    comment: `Dr. Shalini Narayanan is a communication maestro! Her in-depth knowledge combined
        with her professional experience and engaging teaching style made complex concepts
        accessible and truly captivating for our students. My students emerged from her
        class not only with sharpened communication skills, but also with a newfound
        confidence and a deeper appreciation for the power of effective communication.
      `,
    name: `Professor (Dr.) Anand Pradhan, Indian Institute of Mass Communication, New Delhi`,
  },
  {
    comment: `Your stories are so vivid yet subtle in their message that one finds them simply
    unputdownable. Who won't relate to the incidents, playfulness, banters with the
    generous use of dialects that lend the stories credibility and authenticity? You are
    in fact a master storyteller with an above average command of the craft.`,
    name: `Shashi Kumar Sinha, Former Indian Information Service officer`,
  },
  {
    comment: `I was delighted to host Dr. Shalini Narayan and her co-author Dr. Sunerta Narayan at
    Penn State University in 2017 on an invitation from the Bellisario College of
    Communications and the Penn State Center for Global Studies. Dr. Narayanan's
    interactions with students and faculty, and her visits to classes were highly
    informative and enlightening. She is not only an insightful observer and theorist of
    Indian media and telecommunications but also a versatile practitioner and inspiring
    communicator.`,
    name: `Professor (Dr.) Krishna Jayakar, Pennsylvannia State University, USA`,
  },
  {
    comment: `A well crafted compilation of essays that not only describe the journey of the
    author in search of herself, but also are an honest look at Indian society. The
    author has avoided the tendency of social commentators to be judgmental and to
    sermonise Her writing empathises not only with the subjects but also the readers.
    The humour is sharp but not nasty. A book worth reading.`,
    name: `Vivek Thaokar's review of 'Looking for Myself'`,
  },
  {
    comment: `श्रीमति शालिनी नारायणन जी ने पाठ्यक्रम निदेशक, भारतीय सूचना सेवा, भारतीय जनसंचार संस्थान
    के तौर पर सन् 2010 में मेरे भारतीय सूचना सेवा(समूह-ब) के पूरे पाठ्यक्रम को बेहद नियोजित
    और प्रभावी तरीके से संचालित किया। उन्होंने अपने कार्यकाल में 150 से अधिक परिवीक्षाधीन
    अधिकारियों को प्रशिक्षित किया। वे संचार जगत की एक प्रखर अध्येता हैं और संभवतः इसी ज्ञान
    पिपासा के कारण एक प्रशंसनीय उम्दा अधिकारी होते हुए भी उन्होंने संचार शिक्षा, अनुसंधान और
    अन्वेषण के क्षेत्र का वरण किया। शालिनी मैडम मेरी गुरु भी हैं और मैं अकिंचन भाव के साथ
    उन्हें हार्दिक शुभकामनाएं प्रेषित करता हूं।`,
    name: `Durganath Swarnakar, IIS (Group B) officer`,
    comment_language: Language.HINDI,
  },
];

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  appendDots: (dots) => <ul className="slick-pagination"> {dots} </ul>,
  customPaging: () => <div className="slick-pag-item"></div>,
  arrows: false,
  centerPadding: '40px',
  adaptiveHeight: true,
};

const Testimonials: React.FC = () => {
  return (
    <TestimonialStyles>
      <div className="testimonials">
        <p className="sub-title align-center">What Folks Are Saying!</p>
        <h2 className="primary-title align-center">Testimonials</h2>
        <div className="testimonial-for-desktop">
          <div className="wrapper">
            <div className="left-wrapper">
              {DEFAULT_TESTIMONIALS.slice(0, 2).map((testimonial, index) => (
                <TestimonialCard {...testimonial} key={testimonial.name + index} />
              ))}
            </div>
            <div className="divider" />
            <div className="right-wrapper">
              {DEFAULT_TESTIMONIALS.slice(2, 4).map((testimonial, index) => (
                <TestimonialCard {...testimonial} key={testimonial.name + index} />
              ))}
            </div>
          </div>
          {DEFAULT_TESTIMONIALS.length > 1 && DEFAULT_TESTIMONIALS.length % 2 === 1 && (
            <TestimonialCard {...DEFAULT_TESTIMONIALS[DEFAULT_TESTIMONIALS.length - 1]} />
          )}
        </div>
        <div className="testimonials-for-mobile">
          <Slider {...settings} className="health-factor-slide">
            {DEFAULT_TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard {...testimonial} key={testimonial.name + index} />
            ))}
          </Slider>
        </div>
      </div>
    </TestimonialStyles>
  );
};

export default Testimonials;
