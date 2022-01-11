import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { Work, School, Star } from '../Icons'

const data = [
  {
    date: 'Jun 2021 - Present',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: 'vertical-timeline-element--work',
    icon: <Work />,
    title: 'Associate Technology L2',
    subtitle: 'Publicis Sapient, IN',
    description: [
      'Developed Retail website using next js.',
      'Estimated effort for User Stories and Tasks.',
      'Followed Agile and deliver features in sprints.',
    ],
  },
  {
    date: 'Aug 2020 - Jun 2021',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: 'vertical-timeline-element--work',
    icon: <Work />,
    title: 'Senior Software Engineer - React JS',
    subtitle: 'Quincus, IN',
    description: [
      'Micro Frontend architecture design.',
      'Frontend Lead.',
      'Reviewed the code written by team members.',
    ],
  },
  {
    date: 'Sep 2018 - Aug 2020',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    className: 'vertical-timeline-element--work',
    icon: <Work />,
    title: 'Software Engineer I - React.js',
    subtitle: 'Quincus, IN',
    description: [
      'Developed front end of application (Quincus AdminPanel) from scratch.',
      'Developed the reusable modules with Responsive web designing.',
      'Handled the Application behavior in diﬀerent Languages.',
      'Created CI/CD Pipelines using Travis CI.',
      'Improved the performance of application.',
      'Awarded as Employee of the year for my work.',
    ],
  },
  {
    date: 'Feb 2018 - Aug 2018',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: 'vertical-timeline-element--education',
    icon: <School />,
    title: 'Software Developer',
    subtitle: 'Leewayhertz, IN',
    description: [
      'Modiﬁes code to ﬁx errors.',
      'Maintained the repository using Source Control GIT.',
    ],
  },
  {
    date: 'Jun 2017 - Aug 2017',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: 'vertical-timeline-element--education',
    icon: <School />,
    title: 'Cyber Security(Intern)',
    subtitle: ' Gurgoan Police, IN',
    description: 'Mobile Hacking, Exploits, Trojan Virus, Metasploit',
  },
  {
    date: 'Aug 2014 - Jul 2018',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: 'vertical-timeline-element--education',
    icon: <School />,
    title: 'B.Tech CSE',
    subtitle: ' Gurgoan IN',
    description: '',
  },
]
const index = () => {
  return (
    <VerticalTimeline>
      {data.map((timeline, i) => {
        return (
          <VerticalTimelineElement
            key={timeline.title}
            className={timeline.className}
            contentStyle={{
              ...(i == 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : {}),
            }}
            contentArrowStyle={{
              ...(i == 0
                ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                : {}),
            }}
            date={timeline.date}
            iconStyle={timeline.iconStyle}
            icon={timeline.icon}
          >
            <h3 className="vertical-timeline-element-title">
              {timeline.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {timeline.subtitle}
            </h4>
            <p>
              {Array.isArray(timeline.description) ? (
                <ul>
                  {timeline.description.map((list) => (
                    <li title={list} key={list}>
                      {list}
                    </li>
                  ))}
                </ul>
              ) : (
                <>{timeline.description}</>
              )}
            </p>
          </VerticalTimelineElement>
        )
      })}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<Star background="rgb(16, 204, 82)" />}
      />
    </VerticalTimeline>
  )
}

export default index
