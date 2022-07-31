import React from 'react'
import AboutMe from '../components/AboutMe';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import timelineData from '../data/timeline.json'

// function on timelinedata maps properties to timeline component from timeline.json

const BioIndex = () => {
  return (
    <div>
      <Profile />
      <AboutMe />
      {timelineData.map((timeline) => <Timeline key={timeline.id} id={timeline.id} date={timeline.date} desc={timeline.desc} />)}
      <Contact />
    </div>
  )
}

export default BioIndex