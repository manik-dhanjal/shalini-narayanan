import React from 'react';
import AchievementPageStyle from './achievements-page.styles';
import AchievementCard from '../../shared/achievement-card/achievement-card.components';

const achievementsList: string[] = [
  'Invited for lectures at major academies for civil servants including LBSNAA, NPA, NACIN, NAA etc.',
  'Conducted a Health Communication module for the Tata Memorial Centre, Aug-Dec 2022. Also in the Cancer Patient Navigation program for Indonesian doctors and medical professionals in 2022-23.',
  'Chapter on Government Information Dissemination Structures and Processes in Disasters published in International Handbook of Disaster Research (Springer) in August, 2022.',
  'Panelist at a discussion held at Press Club, Kolkata on 5 Nov, 2016 on New Media & Historical Exclusions: The Challenges Ahead. ',
  'Participated in panel discussions as Guest of Honour at the International Conference on (Dis) Ability Communication held by the University of Mumbai and the Jonkoping University of Sweden in January, 2017',
  'Conducted workshops for training civil service officers and officers of the armed forces at the Indian Institute of Mass Communication, IIMC; the National Academy for Customs, Indirect Taxes and Narcotics, NACEN; the Administrative Staff College of India, ASCI; Staff Training Institute, STI & News Services Division, All India Radio, etc. ',
  'Held video lectures on Vyas TV on diverse topics relating to media and communication. (A note on Vyas television: The Consortium for Educational Communication, CEC, established by the University Grants Commission of India, airs programmes on Vyas television which go live to over a hundred institutes of higher education simultaneously.)',
  'Became a certified Health Fact checker in 2020',
  'Awarded Best Professor Teaching Advertising Management by ABP National B-School Awards, 2013.',
  'Panelist at the International Conference on Globalization, Communication and Cultural Change: The Transformation of Local Communities and the Rise of Network Society on November 6, 2019 organized in New Delhi by the Global Research and Educational Foundation India (GREFI) in collaboration with ISS RC 14- Globalization & Culture.',
  'Invited as special member to the Board of Studies for proposed MA in Health Communication in IIMC in January 2020.',
  'Interviewed by the national broadcaster, Doordarshan National for its breakfast news programme Aaj Savere on new media and its impact on India in April, 2017',
  'Conducted special lecture for nearly a hundred Officer Trainees at the National Academy for Customs, Indirect Tax and Narcotics as an expert invitee in October 2019.',
  'Faculty for final day evaluation of IIT, Delhi’s course on How to engage in broadband policy and regulatory processes in August 2016',
  'Held special lectures for undergraduate and post graduate students in institutions like IIMC, Lady Shri Ram College, GGSIP University, OP Jindal Global University, Galgotias University and others.',
  'Spoke as expert commentator on how information technology is impacting society at a discussion recorded for Doordarshan’s Urdu channel on 5th Sept 2014.',
];
const AchievementsPage: React.FC = () => {
  return (
    <AchievementPageStyle>
      <h2 className="primary-title underline align-center">Achievements</h2>
      <div className="main-achievements">
        <AchievementCard
          className="img-cards"
          imgSrc="../../../images/ach1.png"
          title="Invited to the Pennsylvania State University"
          desc="For a series of lectures culminating in a public lecture on New Media in India: From Fad to Fundamental in 2017"
        />
        <AchievementCard
          className="img-cards"
          imgSrc="../../../images/ach2.png"
          title="Organised The Health Factor"
          desc="A seminar on Health Misinformation and Media Representation in 2023 at the India International Centre, sponsored by DataLEADS and SPYM"
        />
        <AchievementCard
          className="img-cards"
          imgSrc="../../../images/ach3.png"
          title="Published a novella ‘Looking for Myself’"
          desc="A story about finding oneself in mid-life, 'Looking for Myself' is a novella of blogs detailing post-retirement challenges"
        />
      </div>
      <div className="other-achievements">
        <div className="left-side list">
          {achievementsList
            .slice(0, Math.floor(achievementsList.length / 2))
            .map((title, index) => (
              <AchievementCard title={title} key={title + index} />
            ))}
        </div>
        <div className="divider"></div>
        <div className="right-side list">
          {achievementsList
            .slice(Math.floor(achievementsList.length / 2), achievementsList.length)
            .map((title, index) => (
              <AchievementCard title={title} key={title + '2' + index} />
            ))}
        </div>
      </div>
    </AchievementPageStyle>
  );
};
export default AchievementsPage;
