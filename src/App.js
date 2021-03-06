import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import timelineData from './data/timeline.json';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Works from './components/Works';

// function on timelinedata maps properties to timeline component from timeline.json

function App() {
  return (
    <div className="bg-crust m-0 p-0">
      <Navbar />
      <Separator />
      <SplineFrame />
      <Profile />
      <AboutMe />
      {timelineData.map((timeline) => <Timeline key={timeline.id} id={timeline.id} date={timeline.date} desc={timeline.desc} />)}
      <Contact />
      <Works />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
