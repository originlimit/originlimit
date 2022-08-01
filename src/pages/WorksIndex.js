import React from 'react'
import Works from '../components/Works'

// each of the subcomponents will use a map function that goes through JSON data arrays to pass props
// to their respective components

const WorksIndex = () => {
  return (
    <div>
      <Works title='Works' id='works' />
      <Works title='Mockups & Prototypes' id='protos' />
      <Works title='Collaborations' id='collabs' />
    </div>
  )
}

export default WorksIndex