import React from 'react'

const Profile = () => {
  return (
    <>
      <figure className='flex flex-row-reverse justify-center items-center max-w-40'>
        <span className='bg-textBase text-textBase border-4 rounded-full'>
          <img className='h-24 rounded-full' src='https://avatars.githubusercontent.com/u/90251333?v=4' alt='profile'></img>
        </span>
        <figcaption>
          <h2 className='text-textBase text-2xl font-bold'>Carlos C</h2>
          <p className='text-subtextBase'>Software Developer and Designer</p>
        </figcaption>
      </figure>
    </>
  )
}

export default Profile