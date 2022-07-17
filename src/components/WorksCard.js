import React from 'react'

const WorksCard = (props) => {
  return (
    <div className='min-w-1/2 bg-red'>
      <img className='h-1/2' src={ props.img } alt={ props.alt }></img>
      <h4 className='text-lg'>{ props.title }</h4>
      <p>{ props.desc }</p>
    </div>
  )
}

export default WorksCard