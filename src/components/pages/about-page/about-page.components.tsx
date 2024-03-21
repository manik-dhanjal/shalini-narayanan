import React from 'react';
import AboutStyles from './about-page.styles';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../../shared/button/button.component';

const AboutPage: React.FC = () => {
  return (
    <AboutStyles>
      <div className="summary">
        <h2 className="primary-title tablet">
          About Dr. Shalini <br /> Narayanan
        </h2>
        <StaticImage
          src="../../../images/shalinis-about-page-img.png"
          sizes="600"
          alt="Shalini Narayanan's image"
          placeholder="blurred"
          className="shalinis-img"
        />
        <div className="content">
          <h2 className="primary-title desktop">
            About Dr. Shalini <br /> Narayanan
          </h2>
          <Button className="cv-btn">Curriculum Vitae (CV)</Button>
          <p className="paragraph">
            Shalini Narayanan, D.Phil., is a Media Academic and Trainer with nearly three decades of
            experience in the government and non-government sectors. She was part of the Indian
            Information Service, Group ‘A’, for 23 years, before taking voluntary retirement in
            2013. During that time, she worked at the news division of the public broadcaster,
            Prasar Bharati, both in television and radio for over a decade. She also worked at DAVP,
            now CBC, the Central government’s advertising agency and as Editor of the only
            government-run newspaper for jobs, Employment News. As Associate Professor at the Indian
            Institute of Mass Communication, New Delhi, she headed two departments and conducted
            research.
          </p>
          <p className="paragraph">
            Post retirement, she has contributed to Non-Government Organizations in diverse fields
            such as digital financial inclusion, substance abuse and mental health. She was Head
            (Communication) for the Centre for Digital Financial Inclusion, CDFI, a non-profit
            advocating cashless transaction, in 2015-16. At the Society for Youth & Masses, SPYM,
            she was involved in the communication strategies of the organization and was designated
            the head of the media division. SPYM’s work was in the area of drug rehabilitation. Her
            association with the Richmond Fellowship Society, Delhi branch, has continued for many
            years. Currently she is part of the Media Committee for RFS and is a member of the
            Governing Council. RFS works for the re-integration of people living with serious mental
            illnesses, such as schizophrenia and bipolar disorder. In 2017, she was invited to
            Pennsylvania State University for a series of lectures on new media in India. She is the
            co-author of the book The WhatsApp India Story: Inside the Digital Maya Sphere
            (Routledge, 2024), also her co-edited book India Connected: Mapping the Impact of New
            Media was published by Sage Publications in September, 2016. The Hindi and Marathi
            editions were brought out in 2019.
          </p>
        </div>
      </div>
      <div className="service">
        <h3 className="tertiary-head">Training services</h3>
        <p className="paragraph">
          Having trained hundreds of Officer Trainees as well as officers of the Central and State
          Governments, and Public Sector Undertakings during her tenure at the Indian Institute of
          Mass Communication, Dr. Shalini has been involved with training of officers even after
          taking voluntary retirement from the Indian Information Service. Her main areas of
          expertise include new media, including social media, governance, media relations,
          marketing and fact-checking, with focus on health fact-check. During her five-year stint
          in the Indian Institute of Mass Communication, she was Course Director for the Indian
          Information Service officers, both Group ‘A’ and Group ‘B’. She has organized and
          participated in conducting courses for officers from the Ministry of Information and
          Broadcasting posted in media units such as Press Information Bureau, the Directorate of
          Advertising & Visual Publicity (DAVP, now the Central Bureau of Communication, CBC), All
          India Radio’s News Services Division, senior officers from the armed forces and many other
          officers from Ministries/Departments, as well as PSUs/autonomous organizations like BHEL,
          National Commission for Women, Employees Provident Fund Organization, the Administrative
          Staff College in Hyderabad and many more. She has been a regular invited faculty at the
          National Academy of Customs and Indirect Taxes, NACIN for over a decade now.
        </p>
      </div>
      <div className="service">
        <h3 className="tertiary-head">Academic teaching</h3>
        <p className="paragraph">
          During the year 2008-09, Dr. Shalini was the Program Director for the Advertising & Public
          Relations Department of the Indian Institute of Mass Communication, IIMC, New Delhi which
          comprised over 60 students. This involved conceptualizing the entire course for the
          year-long Post-Graduate Diploma in Advertising & Public Relations from the making of the
          syllabus to organizing classes, teaching, grading, teaching in other PG Diploma programs
          in IIMC, as well as in the Development Journalism Program meant for media persons from the
          developing world and short-training courses for Central/State government and PSU officers.
          The Development Journalism course was a challenge as there were participants from
          countries across the globe – from Nepal to Mexico, Nigeria to Russia.
        </p>
      </div>
      <div className="service">
        <h3 className="tertiary-head">Creative writing</h3>
        <p className="paragraph">
          Dr. Shalini has been writing poetry and short stories since her college days. Given the
          pressures of a demanding job and a hectic family life, her creative writing took a
          backseat. But she found her creative voice again and in April 2019, she published a
          novella based on her blog posts titled ‘Looking for Myself’ (Authorspress). The praise she
          received for the book from family and colleagues spurred her to explore her creative self
          and she has been writing daily micro-stories online since September 2021. The stories are
          under the hashtags - #oneparastories and #sookshmakathayein in Hindi.
        </p>
      </div>
      <div className="co-training">
        <h3 className="tertiary-head">
          Co-Training Endeavors with Prof. (Dr.) Sunetra Sen Narayan in University and Academy
          Sessions
        </h3>
        <div className="content">
          <StaticImage
            src="../../../images/sunetra-sen-narayanan.png"
            alt="Co-Training Endeavors with Prof. (Dr.) Sunetra Sen Narayan"
            sizes="400"
            placeholder="blurred"
            className="sunetra-sen-img"
          />
          <p className="paragraph">
            Sunetra Sen Narayan, Ph.D., has about 30 years experience in communications spanning
            print journalism, documentary film production, teaching and research. She has studied
            Economics at Delhi University. She was awarded a Master’s in Telecommunications Studies
            and a Doctorate in Mass Communications from the Pennsylvania State University, USA. She
            has teaching experience both in India and the US. She currently teaches courses in her
            areas of expertise including development, International communications, health
            communications and digital media. She is a certified health fact check trainer. She has
            conducted various training workshops in collaboration with organizations such as the BBC
            World Service Trust, Commonwealth Broadcast Association, DataLeads, Sri Lanka Press
            Institute, Pennsylvania State University and others.
          </p>
          <p className="paragraph">
            She is currently Professor, Indian Institute of Mass Communications, New Delhi. She is
            Head of the Department of Health Communications at IIMC. She joined the Institute in
            2003. She was head of the Department of Development Journalism from 2004-2013 and the
            Radio and Television Journalism Department from 2019-2021. She has been the Editor of
            the academic journal Communicator from 2008-2016 and 2019-20. Prior to this she has been
            a print journalist, writing on business and travel in India.
          </p>
          <p className="paragraph">
            She is the author of Globalization and Television, a Study of the Indian Experience
            1990-2010 (2014) Oxford University Press. She is the co-editor of India Connected
            ,Mapping the Impact of New Media (2016) Sage Publications. This book was translated into
            Hindi and Marathi by Sage. She has written numerous scholarly articles on communications
            and development related subjects. She has recently completed a new book The WhatsApp
            India Story: Inside the Digital Maya Sphere which is co-authored, due to be published in
            2024..
          </p>
        </div>
      </div>
    </AboutStyles>
  );
};

export default AboutPage;
