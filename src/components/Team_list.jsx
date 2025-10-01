import React from 'react'

const Team_list = ({name,role,image}) => {
  return (
    <div className='p-6'>

      <div >
        <div className='bg-white p-4 shadow-2xl'>
            <img className='rounded-full w-20 mx-auto object-cover mb-4' src={image} alt="" />
            <h2 className='text-xl text-center font-semibold'>{name}</h2>
            <p className='text-center'>{role}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Team_list
