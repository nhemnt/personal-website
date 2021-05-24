import React from 'react'
import GatsbyImage from 'gatsby-image'
import { Fade, Rotate } from 'react-reveal'
import { Container, Row, Col } from 'reactstrap'
import {
  VerticalCenter,
  Hello,
  Title,
  SocialIcon,
  StyledIntro,
  TimelineSection,
  ProjectSection,
  StyledHomepage,
  MusicSection,
  RecommendationSection,
} from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Timeline from '../Timeline'
import Project from './project'
import Music from '../Music'
import Recommendation from '../Recommendation'
import RecommendationsData from '../../data/recommendations.json'

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
  // console.log(Recommendations)
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
    <StyledHomepage className="container">
      <VerticalCenter>
        <div className="col-sm-12">
          <Fade left>
            <Title>
              <h1>
                Hi, I am Hemant Negi
                <Hello>
                  <GatsbyImage {...data.handEmoji.childImageSharp} />
                </Hello>
              </h1>
            </Title>
          </Fade>
          <StyledIntro className="row">
            <Fade left>
              <div className="col-md-8 col-sm-12 py-2">
                {Intro.map((para) => (
                  <p>{para}</p>
                ))}
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-4 col-sm-12 text-center">
                <div
                  class="LI-profile-badge"
                  data-version="v1"
                  data-size="medium"
                  data-locale="en_US"
                  data-type="horizontal"
                  data-theme="dark"
                  data-vanity="nhemnt"
                >
                  <a
                    class="LI-simple-link"
                    target="_blank"
                    href="https://in.linkedin.com/in/nhemnt?trk=profile-badge"
                  >
                    <GatsbyImage {...data.hemantNegi.childImageSharp} />
                  </a>
                </div>
              </div>
            </Fade>
          </StyledIntro>
          <Fade left>
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
          </Fade>
        </div>{' '}
      </VerticalCenter>

      <ProjectSection>
        <h2 className="text-center mb-5">Open Source Projects</h2>
        <Container>
          <div className="row">
            {projects.map((project, i) => (
              <Project index={i} {...project} />
            ))}
          </div>
        </Container>
      </ProjectSection>

      <TimelineSection>
        <h2 className="text-center">Work experience & Education</h2>
        <Timeline />
      </TimelineSection>

      <RecommendationSection>
        <h2 className="text-center">Recommendations</h2>
        <Container>
          <Row className="align-items-center">
            {RecommendationsData.map((recommendation, index) => (
              <Col xs="12" sm="4">
                <Fade
                  {...{
                    ...(index % 2 === 0 ? { top: true } : { bottom: true }),
                  }}
                >
                  <Recommendation recommendation={recommendation} />
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </RecommendationSection>

      <MusicSection>
        <h2 className="text-center">🎧 Mood ❤</h2>
        <Rotate top left>
          <Music />
        </Rotate>
      </MusicSection>
    </StyledHomepage>
  )
}

export default index
