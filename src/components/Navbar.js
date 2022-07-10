import React from 'react'
import { BiSun } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='fixed flex justify-center w-screen z-99 top-0 bg-crustOpaque backdrop-blur-md p-4'>
      <div className='flex w-full max-w-3xl justify-between text-lg'>
        <a className='font-bold text-lavender'>Originlimit •</a>
        <div className='flex'>
          <nav>
            <a href='/#' className='text-red m-2'>Works</a>
            <a href='/#' className='text-red m-2'>Contact</a>
            <a href='/#' className='text-red m-2'>Source</a>
          </nav>
          <button className='text-yellow mx-2 rounded-lg text-bold text-2xl'><BiSun /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar