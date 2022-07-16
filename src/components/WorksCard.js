import React from 'react'

const WorksCard = (props) => {
  return (
    <div className='flex flex-col w-60 h-sm'>
      <img src={ props.img } alt={ props.alt }></img>
      <h4>{ props.title }</h4>
      <p>{ props.desc }</p>
    </div>
  )
}

export default WorksCard