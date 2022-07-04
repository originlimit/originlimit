import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Tools from './components/Tools';

function App() {
  return (
    <div className="justify-center items-center bg-crust">
      <Navbar />
      <Separator />
      <SplineFrame />
      <Profile />
      <AboutMe />
      <Tools />
    </div>
  );
}

export default App;
