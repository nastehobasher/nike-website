import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgUrl,customerName,rating,feedback}) => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <img 
      src={imgUrl}
       alt="customer"
       className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='info-text text-center mt-6 max-w-sm'>{feedback}</p>
      <div className='flex justify-center items-center gap-2.5 mt-3'>
      <img 
      src={star}
      alt="star"
      width={24}
      height={24} 
      className='object-contain m-0'
      />
       <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='font-palanquin text-3xl text-center font-bold mt-1'>{customerName}</h3>
    </section>
  )
}

export default ReviewCard