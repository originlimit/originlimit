import React from 'react'
import WorksCard from './WorksCard';
import worksData from '../data/works.json'
import SectionTitle from './SectionTitle';

const Works = (props) => {
  return (
    <div className='max-w-xl m-auto'>
      <SectionTitle title={ props.title }/>
      <div className='flex flex-wrap justify-center items-center'>
        {worksData.map((works) => <WorksCard key={works.id} id={works.id} img={works.img} alt={works.alt} title={works.title} desc={works.desc} />)}
      </div>
    </div>
  )
}

export default Works