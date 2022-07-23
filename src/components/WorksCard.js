import React from 'react'

const WorksCard = (props) => {
  return (
    <div className='w-1/2'>
      <div className='min-w-max bg-red p-4'>
        <img className='h-1/2' src={ props.img } alt={ props.alt }></img>
        <h4 className='text-lg'>{ props.title }</h4>
        <p className='flex'>{ props.desc }</p>
      </div>
    </div>
  )
}

export default WorksCard