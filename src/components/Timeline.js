import React from 'react'

//component now checks the id prop and only displays the title if it is of id 1

const Timeline = (props) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col text-textBase w-full max-w-xl'>
        { props.id === 1 ? <h2 className='flex text-lg font-bold text-left underline decoration-2 decoration-blue underline-offset-8 my-4'>Timeline</h2> : null }
        <div className='flex'>
          <h4 className='max-w-{20%} mr-4 font-bold'>{ props.date }</h4>
          <p className='max-w-full'>{ props.desc }</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline