import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Tools from './components/Tools';
import Timeline from './components/Timeline';
import timelineData from './data/timeline.json';

function App() {
  return (
    <div className="bg-crust m-0 p-0">
      <Navbar />
      <Separator />
      <SplineFrame />
      <Profile />
      <AboutMe />
      {timelineData.map((timeline) => <Timeline date={timeline.date} desc={timeline.desc}/>)}
      <Tools />
    </div>
  );
}

export default App;
