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
import WorksIndex from './pages/WorksIndex';
import BioIndex from './pages/BioIndex';

// function on timelinedata maps properties to timeline component from timeline.json
// move the components that arent always on screen to page component

function App() {
  return (
    <div className="bg-crust m-0 p-0">
      <Navbar />
      <Separator />
      <SplineFrame />
      <BioIndex />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
