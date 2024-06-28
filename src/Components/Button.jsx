import React from 'react'

const Button = ({label,iconURl}) => {
  return (
    <button className='flex justify-center items-center gap-2 font-montserrat px-7 py-4 border text-lg leading-none bg-coral-red rounded-full text-white '>
        {label}
        <img 
        src={iconURl} 
        alt="arrow" 
        className='ml-2 rounded-full w-5 h-5'
        />
    </button>
  )
}

export default Button