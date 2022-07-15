import React from 'react'
import SectionTitle from './SectionTitle'

//component now checks the id prop and only displays the title if it is of id 1

const Timeline = (props) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col text-textBase w-full max-w-xl'>
        { props.id === 1 ? <SectionTitle title='Timeline' /> : null }
        <div className='flex mb-2'>
          <h4 className='min-w-{20%} mr-2 font-bold'>({ props.date })</h4>
          <p className=''>{ props.desc }</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline