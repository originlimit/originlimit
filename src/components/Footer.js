import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-mantle text-textBase p-4 py-8'>
      <ul className='flex justify-between w-full max-w-xl font-bold'>
        <li className='m-4'>Home</li>
        <li className='m-4'>Works</li>
        <li className='m-4'>Contact</li>
        <li className='m-4'>Source</li>
      </ul>
      <p className='text-subtextBase m-4 text-sm'>© 2022 originlimit. Feel free to copy!</p>
    </div>
  )
}

export default Footer