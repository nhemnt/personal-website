import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'


const bio = {
  firstName: "Hemant",
  lastName: "Negi",
  info: `Technical and highly motivated front end developer, with technical
  skills in end-to-end software development and web application
  designing, possessing knowledge of various software languages and
  tools with fierce passion about the user experience and
  integrating software per the requirement and enhancing the working
  ability of IT systems. Skilled in front-end technologies, software
  engineering and infrastructure in addition to uncommon ability to
  grasp new technical concepts and utilizing them to achieve project
  objectives.`,
  address: "Delhi, India",
  email: "nhemnt@gmail.com"
}
//Find here all available brands
//https://fortawesome.com/sets/font-awesome-5-brands
const skills = [
  'node-js',
  'react',
  'node',
  'npm',
  'js-square',
  'angular',
  'sass',
  'wordpress',
  'html5',
  'css3-alt',
]

const socials = [
  {
    icon: 'linkedin-in',
    url: 'https://www.linkedin.com/in/nhemnt',
  },
  {
    icon: 'github',
    url: 'https://github.com/nhemnt',
  },
  {
    icon: 'behance',
    url: 'https://behance.net/nhemnt',
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/nhemnt',
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/nhemnt',
  },
  {
    icon: 'facebook-f',
    url: 'https://www.facebook.com/nhemnt',
  },
]

const navList = [
  'about',
  'experience',
  'education',
  'skills',
  'interests',
  'awards',
]

const experiences = [
  {
    companyName: 'Quincus Ltd.',
    designation: 'Software Developer',
    info: `Developed and deployed a Web Application on React.js to AWS
    server from scratch. Create Multiple tools to Optimise human
    efforts.`,
    date: 'September 2018 - Present',
  },
  {
    companyName: 'Leewayhertz',
    designation: 'Software Developer Intern',
    info: `Developed several Apps with react JS and maintained multiple webistes.`,
    date: 'February 2018 - August 2018',
  },
]

const educations = [
  {
    instituteName: 'WCTM Gurgaon',
    course: 'Bachelor of Technology',
    field: 'Computer Science',
    date: '2014 - 2018',
  },
  {
    instituteName: 'SBM Punjabi Bagh',
    course: 'Graduation',
    field: 'Science(Non Medical)',
    date: '2013 - 2014',
  },
]

const workflows = [
  'Responsive Design',
  'Cross Browser Testing & Debugging',
  'Cross Functional Teams',
  'Agile Development & Scrum',
]

const interests = [
  `Apart from being a web developer, I enjoy most of my time being
  outdoors. In the winter, I am an explorer. During the Summer months here in India, I enjoy
  Swimming, Football, and Table Tennis.`,
  `When forced indoors, I follow a number of sci-fi and fantasy genre
  movies and television shows, I am an aspiring chef, and I spend a
  large amount of my free time exploring the latest technology
  advancements in the front-end web development world.`,
]

const awards = [
  'Employee of the year at Quincus Ltd (2019)',
  'Certified in developing websites with react JS from Udemy',
  'Certified in Cyber Security by Gurgaon Police',
]

const Resume = () => {
  const data = useStaticQuery(graphql`
  {
    profile_picture: file(relativePath: { eq: "hemant_profile.png" }) {
      childImageSharp {
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`)
  return (
    <div id="resume">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{`${bio.firstName} ${bio.lastName}`}</span>
          <span className="d-none d-lg-block">
            {/* <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={image}
              alt="hemant negi"
            /> */}
             <GatsbyImage className= "img-fluid img-profile rounded-circle mx-auto mb-2" {...data.profile_picture.childImageSharp} />
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navList.map(nav => (
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={`#${nav}`}>
                  {nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0 title">
              {bio.firstName} <span className="text-primary">{bio.lastName}</span>
            </h1>
            <div className="subheading mb-5">
              {bio.address} ·{' '}
              <a href={`mailto:${bio.email}`}>{bio.email}</a>
            </div>
            <p className="lead mb-5">
              {bio.info}
            </p>
            <div className="social-icons">
              {socials.map(social => (
                <a href={social.url} target="blank" key={social.icon}>
                  <i className={`fab fa-${social.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>
            {experiences.map(experience => (
              <div
                key={experience.companyName}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="resume-content">
                  <h3 className="mb-0">{experience.designation}</h3>
                  <div className="subheading mb-3">
                    {experience.companyName}
                  </div>
                  <p>{experience.info}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{experience.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Education</h2>
            {educations.map(education => (
              <div
                key={education.instituteName}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="resume-content">
                  <h3 className="mb-0">{education.instituteName}</h3>
                  <div className="subheading mb-3">{education.course}</div>
                  <div>{education.field}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{education.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              {skills.map(skill => (
                <li className="list-inline-item" key={skill}>
                  <i className={`fab fa-${skill}`} />
                </li>
              ))}
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              {workflows.map(workflow => (
                <li key={workflow}>
                  <i className="fa-li fa fa-check" />
                  {workflow}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div className="w-100">
            <h2 className="mb-5">Interests</h2>
            {interests.map((interest, i) => (
              <p className={i === interests.length - 1 ? 'mb-0' : ''}>
                {interest}
              </p>
            ))}
          </div>
        </section>
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div className="w-100">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
              {awards.map(award => (
                <li key={award}>
                  <i className="fa-li fa fa-trophy text-warning" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
