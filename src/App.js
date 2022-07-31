import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';
import Footer from './components/Footer';
import BioIndex from './pages/BioIndex';
import WorksIndex from './pages/WorksIndex'

function App() {
  return (
    <div className="bg-crust text-textBase m-0 p-0">
      <Navbar />
      <Separator />
      <SplineFrame />
      <WorksIndex />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
