import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';
import Separator from './components/Separator';

function App() {
  return (
    <div className="block justify-center bg-crust">
      <Navbar />
      <Separator />
      <SplineFrame />
    </div>
  );
}

export default App;
