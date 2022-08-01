import React from 'react'
import WorksCard from './WorksCard';
import worksData from '../data/works.json'
import protosData from '../data/mockandproto.json'
import collabsData from '../data/collaborations.json'
import SectionTitle from './SectionTitle';

// maps data to the WorksCard component's props based on the argument it receives
const worksMapper = (a) => a.map((works) => <WorksCard key={works.id} id={works.id} img={works.img} alt={works.alt} title={works.title} desc={works.desc} />)

// checks the prop id and passes arguments to worksMapper, otherwise null
const worksChecker = (id) =>
  id === "works" ? worksMapper(worksData)
  : id === "protos" ? worksMapper(protosData)
  : id === "collabs" ? worksMapper(collabsData)
  : null

const Works = (props) => {
  return (
    <div className='max-w-2xl m-auto'>
      <div className='px-2'>
        <SectionTitle title={ props.title } />
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {worksChecker(props.id)}
      </div>
    </div>
  )
}

export default Works