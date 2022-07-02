import React from 'react';
import Spline from '@splinetool/react-spline';

//add dividers to both sides to avoid weird canvas scaling
const SplineFrame = () => {
  return (
    <div className='flex justify-center'>
      <Spline className='h-md' scene="https://draft.spline.design/YzZFOpi8Vxsxe83q/scene.splinecode"/>
    </div>
  )
}

export default SplineFrame