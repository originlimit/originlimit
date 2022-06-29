import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed flex w-screen z-99 top-0 p-4 content-between justify-between bg-crustOpaque backdrop-blur-sm'>
      <div className='text-lavender'>A Portfolio!</div>
      <div>
        <a href='/#' className='text-red'>test</a>
        <a href='/#' className='text-red'>test</a>
        <a href='/#' className='text-red'>test</a>
        <a href='/#' className='text-red'>test</a>
      </div>
    </div>
  )
}

export default Navbar