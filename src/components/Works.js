import React from 'react'
import WorksCard from './WorksCard';
import worksData from '../data/works.json'

// an easier way of doing this would be to make two objects in tan object, each for a
// separate row
//

const Works = () => {
  return (
    <div className='flex flex-wrap max-w-xl'>
      {worksData.id === 1 || 2 ? worksData.map((works) => <WorksCard key={works.id} id={works.id} img={works.img} alt={works.alt} title={works.title} desc={works.desc} />) : null }
    </div>
  )
}

export default Works