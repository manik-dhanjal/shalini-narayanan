import React from 'react';
import AboutStyles from './about-page.styles';
import Button from '../../shared/button/button.component';
import { downloadFileFromUrl } from '../../../utils/links.utils';
import ContentImage from '../../shared/content-image/content-image.component';

const PROFILE_IMG = '/images/content/about/shalinis-about-page-img-2.webp';
const RESUME_LINK = '/files/Shalini-Naryanans-CV-Sept-2023.pdf';
const CO_TRAINING_IMG = '/images/content/about/Shalini-and-Sunetra-3.webp';
const CO_TRAINING_TITLE =
  'Co-Training Endeavors with Prof. (Dr.) Sunetra Sen Narayan in University and Academy Sessions';

const AboutPage: React.FC = () => (
  <AboutStyles>
    <div className="summary">
      <h1 className="primary-title tablet">
        About Dr. Shalini <br /> Narayanan
      </h1>
      <ContentImage
        src={PROFILE_IMG}
        alt="Shalini Narayanan's image"
        className="card-img shalinis-img"
      />

      <div className="content">
        <h1 className="primary-title desktop">
          About Dr. Shalini <br /> Narayanan
        </h1>
        <Button className="cv-btn" onClick={() => downloadFileFromUrl(RESUME_LINK)}>
          Curriculum Vitae (CV)
        </Button>
        <div className="about-primary-description">
          <p className="paragraph">
            I am a multi-faceted media professional, academic, author, trainer, and podcaster. I
            served in the Indian Information Service (IIS), Group ‘A’, for 23 years before taking
            voluntary retirement in 2013. During my tenure, I spent over a decade working with the
            news division of the public broadcaster, Prasar Bharati, across both television and
            radio. I also served at the DAVP (now CBC)—the Central government’s advertising
            agency—and as the Editor of <em>Employment News</em>, the only government-run job
            newspaper. Later, as an Associate Professor at the Indian Institute of Mass
            Communication (IIMC), New Delhi, I headed two departments and conducted academic
            research.
          </p>
          <p className="paragraph">
            Following my retirement, I pivoted toward the social sector, contributing to
            non-governmental organizations in the fields of digital financial inclusion, substance
            abuse, and mental health. In 2015–16, I was the Head of Communication for the Centre for
            Digital Financial Inclusion (CDFI), a non-profit advocating for cashless transactions.
            At the Society for Youth &amp; Masses (SPYM), which specializes in drug rehabilitation,
            I shaped communication strategies and headed the media division. I have also maintained
            a long-standing association with the Richmond Fellowship Society (RFS) Delhi branch,
            supporting the rehabilitation of individuals living with serious mental illnesses like
            schizophrenia and bipolar disorder. In recognition of my work in media scholarship, I
            was invited to Pennsylvania State University in 2017 to deliver a series of lectures on
            new media in India.
          </p>
        </div>
      </div>
    </div>

    <div className="service">
      <h2 className="tertiary-head">Creative Endeavours</h2>
      <div className="sub-primary-description paragraph">
        <p className="paragraph">
          In 2026, I produced and launched <em>The Analog Generation</em>, a podcast dedicated to
          recreating the India of the 1940s through interviews with those who lived through and
          witnessed that pivotal decade. My guests have included Begum Noor Bano of the Rampur
          princely estate, Col. Damodar Prasad and Gen. G. K. Sen from the first batch of the
          National Defence Academy (then the Joint Services Wing), and many others who experienced
          pre-independence India. The podcast is entirely hosted and produced by me, and is
          available on YouTube and Instagram.
        </p>
        <p className="paragraph">
          My journey into creative writing expanded in April 2019 when I published my debut novella,{' '}
          <em>Looking for Myself</em> (Authorspress), which was adapted from my personal blog posts.
          The encouraging feedback from family and colleagues inspired me to write daily
          micro-stories online. Since September 2021, I have been publishing these stories on
          Facebook under the hashtags #oneparastories and #sookshmakathayein (in Hindi), with select
          visual adaptations available on Instagram at @Ittisikahani. Additionally, I am an active
          member and occasional host for Sanchaari – The Delhi Chapter, a literary group that hosts
          baithaks and cultural programs focused on the Purvanchal region of Uttar Pradesh.
        </p>
      </div>
    </div>

    <div className="service">
      <h2 className="tertiary-head">Academic Pursuits</h2>
      <div className="sub-primary-description paragraph">
        <p className="paragraph">
          Since 2020, I have served as the course coordinator for the health communication module of
          the Master’s program in Patient Navigation in Oncology at Tata Memorial Hospital—a
          curriculum I helped transition from a PG Diploma to a full Master&apos;s degree in 2025.
          In this role, I teach core modules and invite eminent global scholars as guest faculty. I
          also continue to teach at Delhi University and IIMC (now a deemed university). This builds
          on my earlier academic leadership; during 2008–09, I was the Program Director for IIMC’s
          Advertising &amp; Public Relations Department. In that role, I conceptualized the entire
          year-long PG Diploma syllabus, managed a cohort of over 60 students, and taught across
          various programs. This included leading the Development Journalism Program for
          international media professionals from nations spanning Mexico to Russia, as well as
          short-term training courses for government and PSU officers.
        </p>
        <p className="paragraph">
          My published academic works include my co-edited volume,{' '}
          <em>Health Communication in India: Strategies &amp; Digital Innovations</em> (Routledge,
          2027), an interdisciplinary collaboration featuring leading global scholars. I am also the
          co-author of <em>The WhatsApp India Story: Inside the Digital Maya Sphere</em> (Routledge,
          2024), and the co-editor of <em>India Connected: Mapping the Impact of New Media</em>{' '}
          (Sage Publications, 2016), which saw its Hindi and Marathi editions published in 2019.
        </p>
      </div>
    </div>

    <div className="service">
      <h2 className="tertiary-head">Training Services</h2>
      <div className="sub-primary-description paragraph">
        <p className="paragraph">
          Leveraging my background in public service and media education, I train officer trainees,
          senior executives, and government officials. My primary areas of expertise encompass new
          and social media, governance, media relations, marketing, and health-focused
          fact-checking. During my five years at IIMC, I served as the Course Director for both
          Group ‘A’ and Group ‘B’ IIS officers. I have curated and led training programs for the
          Ministry of Information and Broadcasting (including the Press Information Bureau and CBC),
          All India Radio’s News Services Division, senior armed forces officers, and public sector
          undertakings like BHEL, the National Commission for Women, and the EPFO. I have also been
          a regularly invited faculty member at the National Academy of Customs and Indirect Taxes
          (NACIN) for over a decade.
        </p>
      </div>
    </div>

    <div className="co-training">
      <h2 className="tertiary-head">{CO_TRAINING_TITLE}</h2>
      <div className="content">
        <ContentImage src={CO_TRAINING_IMG} alt={CO_TRAINING_TITLE} className="sunetra-sen-img" />
        <div className="secondary-about-description">
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
            1990-2010 (2014) Oxford University Press. She is the co-editor of India Connected,
            Mapping the Impact of New Media (2016) Sage Publications. This book was translated into
            Hindi and Marathi by Sage. She has written numerous scholarly articles on communications
            and development related subjects. She has recently completed a new book The WhatsApp
            India Story: Inside the Digital Maya Sphere which is co-authored, due to be published in
            2024.
          </p>
        </div>
      </div>
    </div>
  </AboutStyles>
);

export default AboutPage;
