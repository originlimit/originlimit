import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';
import Footer from './components/Footer';
import BioIndex from './pages/BioIndex';

// function on timelinedata maps properties to timeline component from timeline.json

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
