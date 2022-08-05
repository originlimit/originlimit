import React from 'react'

const WorksCard = (props) => {
  return (
    <div className='w-1/2'>
      <div className='flex flex-col flex-wrap bg-base m-2 rounded-md'>
        <img className='h-1/2 rounded-t-md object-scale-down' src={ props.img } alt={ props.alt }></img>
        <div className='flex flex-wrap h-1/2 p-4'>
          <h4 className='text-lg text-blue font-bold'>{ props.title }</h4>
          <p>{ props.desc }</p>
        </div>
      </div>
    </div>
  )
}

export default WorksCard