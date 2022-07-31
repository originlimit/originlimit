import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-textBase w-full max-w-xl'>
        <SectionTitle title='Contact Me!' />
        <p>If you'd like to contact me, please email me ( <u><a href="mailto:thisisatest@protonmail.com">HERE</a></u> ) !</p>
      </div>
    </div>
  )
}

export default Contact