import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';

function App() {
  return (
    <div className="justify-center items-center bg-crust">
      <Navbar />
      <Separator />
      <SplineFrame />
      <Profile />
      <AboutMe />
    </div>
  );
}

export default App;
