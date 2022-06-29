import React from 'react';
import Spline from '@splinetool/react-spline';

//add dividers to both sides to avoid weird canvas scaling
const SplineFrame = () => {
  return (
    <div className='flex justify-center h-65 w-65'>
      <div className='text-red p-11'>thisIsADivider</div>
      <Spline scene="https://prod.spline.design/d2DsjJHE8A8tVG-z/scene.splinecode" />
      <div className='text-red p-11'>thisIsADivider</div>
    </div>
  )
}

export default SplineFrame