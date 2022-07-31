import React from 'react'

const WorksCard = (props) => {
  return (
    <div className='w-1/2'>
      <div className='flex flex-col flex-wrap bg-base p-4 m-2 rounded-md'>
        <img className='h-1/2' src={ props.img } alt={ props.alt }></img>
        <div className='flex flex-wrap h-1/2'>
          <h4 className='text-lg text-blue'>{ props.title }</h4>
          <p>{ props.desc }</p>
        </div>
      </div>
    </div>
  )
}

export default WorksCard