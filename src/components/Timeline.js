import React from 'react'

const Timeline = (props) => {
  return (
    <div className='flex flex-col justify-center items-center text-blue'>
      <h2>Timeline</h2>
      <div>
        <h4>{ props.date }</h4>
        <p>{ props.desc }</p>
      </div>
    </div>
  )
}

export default Timeline