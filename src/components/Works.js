import React from 'react'
import WorksCard from './WorksCard';
import worksData from '../data/works.json'

const Works = () => {
  return (
    <div className='flex flex-wrap max-w-xl justify-center items-center m-auto'>
      {worksData.map((works) => <WorksCard key={works.id} id={works.id} img={works.img} alt={works.alt} title={works.title} desc={works.desc} />)}
    </div>
  )
}

export default Works