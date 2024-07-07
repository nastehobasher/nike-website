import React from 'react'

const Button = ({label,iconURl, backgroundColor,textColor,borderColor, iconURL}) => {
  return (
    <button className={`flex justify-center items-center gap-2 font-montserrat px-7 py-4 border text-lg leading-none
    ${backgroundColor 
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : "bg-coral-red text-white border-coral-red" } rounded-full w-full"`}>
        {label}
        {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  )
}

export default Button