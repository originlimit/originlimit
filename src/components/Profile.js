import React from 'react'

// width must be set with fractions and add a max size to form bigger cards without extra
// definitions in the tailwind config or explicit units, such as rem and px. The tailwind
// units are 1/4th of a rem, of which the max only amounts to around 25rem, which isnt big
// enough for a larger screen card.

const Profile = () => {
  return (
    <div className='flex justify-center'>
      <figure className='flex justify-between items-center content-between w-full max-w-xl mx-4'>
        <figcaption className='text-textBase'>
          <h2 className='text-3xl font-bold'>Carlos C.</h2>
          <p className='text-subtextBase'>Software Developer and Designer</p>
        </figcaption>
        <span className='bg-textBase border-4 rounded-full m-2'>
          <img className='h-24 rounded-full' src='https://avatars.githubusercontent.com/u/90251333?v=4' alt='profile'></img>
        </span>
      </figure>
    </div>
  )
}

export default Profile