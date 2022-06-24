import React from 'react';
import SplineFrame from './components/SplineFrame';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex w-screen h-screen justify-center bg-crust flex-col">
      <Navbar />
      <SplineFrame />
      <p className='text-blue'>This is a text test!</p>
    </div>
  );
}

export default App;
