import React from 'react'

const SectionTitle = ( props ) => {
  return (
    <h2 className='flex text-lg font-bold text-left underline decoration-2 decoration-blue underline-offset-8 my-4'>{ props.title }</h2>
  )
}

export default SectionTitle