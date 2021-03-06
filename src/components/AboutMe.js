import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import SectionTitle from './SectionTitle'

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-textBase w-full max-w-xl'>
        <SectionTitle title='Bio' />
        <p>I am curently a computer science student. I like to expand my skills and learn new things. I also like to design UIs and work with Linux machines to make them look and function better. My interests range from software to philosophy — I am interested in the privacy and security of the applications we use in our day-to-day.</p>
        <p>Most of my free time involves studying various subjects related to computer science or its subfields. I also work on several unreleased projects (mobile apps, Linux scripts, etc.) and contribute in privacy oriented communities in form of moderation and providing information.</p>
        <p className='my-4 text-blue'><strong>Tools I use</strong> — ReactJS, TailwindCSS, Figma, HTML, CSS, JavaScript (ES6), Linux, GIT, Node, Shopify, Wordpress, and more!</p>
        <div className='flex justify-center'>
          <button className='flex bg-red text-crust py-2 px-4 m-4 rounded-lg font-bold hover:bg-blue'>My Portfolio<BiRightArrowAlt className='text-2xl pl-1'/></button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe