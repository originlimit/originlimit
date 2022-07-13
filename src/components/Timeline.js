import React from 'react'


//component now checks the id prop and only displays the h1 if it is of id 1

const Timeline = (props) => {
  return (
    <div className='flex flex-col justify-center items-center text-blue'>
      <h2>{ props.id === 1 ? "Timeline" : null }</h2>
      <div>
        <h4>{ props.date }</h4>
        <p>{ props.desc }</p>
      </div>
    </div>
  )
}

export default Timeline