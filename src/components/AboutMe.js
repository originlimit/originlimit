import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center'>
    <div className='text-textBase h-screen w-full max-w-xl'>
      <h2 className='flex text-xl font-bold text-left underline decoration-blue underline-offset-8 my-4'>Bio</h2>
      <p className='text-textBase'>I am curently a computer science student. I like to expand my skills and learn new things. I also like to design UIs and work with Linux machines to make them look and function better. My interests range from software to philosophy — I am interested in the privacy and security of the applications we use in our day-to-day.</p>
    </div>
    </div>
  )
}

export default AboutMe