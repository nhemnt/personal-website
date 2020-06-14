import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { Work, School, Star } from '../Icons'

const data = [
  {
    date: 'Sep 2018 - Present',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    className: "vertical-timeline-element--work",
    icon: <Work />,
    title: 'Software Developer',
    subtitle: 'Quincus, IN',
    description: 'Front-End Develpoer, React JS, Node JS, User Experience',
  },
  {
    date: 'Feb 2018 - Aug 2018',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: "vertical-timeline-element--education",
    icon: <School />,
    title: 'Software Developer(Intern)',
    subtitle: 'Leewayhertz, IN',
    description: 'Web Developer, Node JS, Wordpress',
  },
  {
    date: 'Jun 2017 - Aug 2017',
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    className: "vertical-timeline-element--education",
    icon: <School />,
    title: 'Cyber Security(Intern)',
    subtitle: ' Gurgoan Police, IN',
    description: 'Mobile Hacking, Exploits, Trojan Virus, Metasploit',
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
              ...( i == 0 ? {background: 'rgb(33, 150, 243)', color: '#fff'}: {})
             }}
            contentArrowStyle={{
              ...( i == 0 ? {borderRight: '7px solid  rgb(33, 150, 243)'}: {})
                }}
            date={timeline.date}
            iconStyle={timeline.iconStyle}
            icon={timeline.icon}
          >
            <h3 className="vertical-timeline-element-title">
            {timeline.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">{timeline.subtitle}</h4>
            <p>{timeline.description}</p>
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
