import React from 'react'

// width must be set with fractions and add a max size to form bigger cards without extra
// definitions in the tailwind config or explicit units, such as rem and px. The tailwind
// units are 1/4th of a rem, of which the max only amounts to around 25rem, which isnt big
// enough for a larger screen card.

const Profile = () => {
  return (
    <div className='flex justify-center p-4'>
      <figure className='flex justify-between items-center content-between w-1/2 max-w-lg'>
        <figcaption>
          <h2 className='text-textBase text-2xl font-bold p-1 w-'>Carlos Calderon</h2>
          <p className='text-subtextBase p-1'>Software Developer and Designer</p>
        </figcaption>
        <span className='bg-textBase text-textBase border-4 rounded-full m-2'>
          <img className='h-24 rounded-full' src='https://avatars.githubusercontent.com/u/90251333?v=4' alt='profile'></img>
        </span>
      </figure>
    </div>
  )
}

export default Profile