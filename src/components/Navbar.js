import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed flex justify-center w-screen z-99 top-0 bg-crustOpaque backdrop-blur-md p-4'>
      <div className='flex w-full max-w-3xl justify-between text-lg'>
        <div className='font-bold text-lavender'>Originlimit</div>
        <div>
          <a href='/#' className='text-red'>test</a>
          <a href='/#' className='text-red'>test</a>
          <a href='/#' className='text-red'>test</a>
          <a href='/#' className='text-red'>test</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar