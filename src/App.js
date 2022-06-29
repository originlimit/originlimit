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
      <p className='text-blue'>This is a text test!</p>
    </div>
  );
}

export default App;
