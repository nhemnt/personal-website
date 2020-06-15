import React from 'react'
import GatsbyImage from 'gatsby-image'
import {
  VerticalCenter,
  Hello,
  Title,
  SocialIcon,
  StyledIntro,
  TimelineSection,
  ProjectSection,
} from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Timeline from '../Timeline'
import Project from './project'

const socials = [
  {
    icon: 'linkedin-in',
    url: 'https://www.linkedin.com/in/nhemnt',
    title: 'Linkdin',
  },
  {
    icon: 'github',
    url: 'https://github.com/nhemnt',
    title: 'Github',
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/nhemnt',
    title: 'Twitter',
  },
  {
    icon: 'behance',
    url: 'https://behance.net/nhemnt',
    title: 'Behance',
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/nhemnt',
    title: 'Instagram',
  },
  {
    icon: 'facebook-f',
    url: 'https://www.facebook.com/nhemnt',
    title: 'Facebook',
  },
]

const Intro = [
  "I'm a self-taught developer with a love of performant, beautiful, and usable web applications. Curious about technology. This website was made to showcase all of what I can do and plan to do.",
  'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an explorer. During the Summer months here in India, I enjoy Swimming, Football, and Table Tennis.When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.',
]

const projects = [
  {
    title: 'Humpanel',
    imageUrl:
      'https://raw.githubusercontent.com/nhemnt/hum-panel/master/humpanel-full.png',
    description:
      'A Panel for Financial report calculation where user can register and manage all thier financial report.',
    tags: ['javascript', 'react', 'firebase'],
    githubUrl: 'https://github.com/nhemnt/hum-panel',
    demoUrl: 'https://clientpanel-e38c7.firebaseapp.com/',
  },
  {
    title: 'React Bitmoji',
    imageUrl:
      'https://raw.githubusercontent.com/nhemnt/react-bitmoji/master/example/example4.png',
    description:
      'Create your own avataar and download it in SVG/PNG format. A Simple avatar generator React component using Avataaars.',
    tags: ['javascript', 'react'],
    githubUrl: 'https://github.com/nhemnt/react-bitmoji',
    demoUrl: 'https://bitmoji.netlify.app/',
  },
  {
    title: 'Campdekho',
    imageUrl:
      'https://raw.githubusercontent.com/nhemnt/campdekho/master/campdekho-logo.png',
    description:
      'A site for travellers to pick their camping destination ~Users can interact with each other by creating profile ~An individual can share their camping spots with image and description',
    tags: ['node', 'javascript', 'react', 'mongo'],
    githubUrl: 'https://github.com/nhemnt/campdekho',
    demoUrl: 'https://campdekho.herokuapp.com/',
  },
]
const index = () => {
  const data = useStaticQuery(graphql`
    {
      handEmoji: file(relativePath: { eq: "handEmoji.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      hemantNegi: file(relativePath: { eq: "hemant-negi.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <VerticalCenter>
        <div className="col-sm-12">
          <Title>
            <h1>
              Hi, I am Hemant Negi
              <Hello>
                <GatsbyImage {...data.handEmoji.childImageSharp} />
              </Hello>
            </h1>
          </Title>
          <StyledIntro className="row">
            <div className="col-md-8 col-sm-12 py-2">
              {Intro.map(para => (
                <p>{para}</p>
              ))}
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <GatsbyImage {...data.hemantNegi.childImageSharp} />
            </div>
          </StyledIntro>

          <SocialIcon>
            {socials.map((social, i) => (
              <OutboundLink
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fadeIn`}
                style={{ animationDelay: `${i * 0.25 + 0.25}s` }}
                data-toggle="tooltip"
                data-placement="top"
                title={social.title}
              >
                <i className={`fab fa-${social.icon}`} />
              </OutboundLink>
            ))}
          </SocialIcon>
        </div>{' '}
      </VerticalCenter>
      <TimelineSection>
        <h2 className="text-center">Work experience & Education</h2>
        <Timeline />
      </TimelineSection>
      <ProjectSection>
      <h2 className="text-center">Open Source Projects</h2>
        <div className="row">
        {projects.map(project => (
          <Project {...project}/>
        ))}

        </div>
      </ProjectSection>
    </div>
  )
}

export default index
