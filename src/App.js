import React from 'react';
import SplineFrame from './components/SplineFrame';

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-base">
      <SplineFrame />
      <p className='text-blue'>This is a text test!</p>
    </div>
  );
}

export default App;
