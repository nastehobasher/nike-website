import { useState } from 'react'
import Button from '../Components/Button'
import ShoeCard from '../Components/ShoeCard'
import {arrowRight} from '../assets/icons'
import {bigShoe1} from '../assets/images'
import { shoes, statistics } from '../constant'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
   <section 
   id='home'
   className=' max-container flex xl:flex-row w-full flex-col justify-center gap-10 min-h-screen'>
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
    
      <p className='font-montserrat text-xl text-coral-red'> Our Summer collections </p>
      <h1 className='mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The new arival</span><br />
        <span className=' text-coral-red mt-3'>Nike</span> shoes
      </h1>
      <p className='font-montserrat text-slate-gray mt-6 mb-14 leading-8 sm:max-w-sm'> Discover stylish Nike arrivals, quality 
        comfort, and innovation for your active life.</p>
      <Button label='Show Now' iconURL={arrowRight}/>
      <div className='flex justify-starts items-center flex-wrap mt-20 w-full  gap-16'>
        {statistics.map((stat)=>(
          <div key={stat.label}>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='text-slate-gray font-montserrat leading-7'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className='relative flex-1 flex justify-center items-center  xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      <img 
      src={bigShoeImg}
      alt="shoe collection"
      className='object-contain relative z-10'
      width={610}
      height={500}
       />
       <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((shoe)=>(
          <div key={shoe}>
            <ShoeCard 
            imgURL={shoe}
            changeBigShoeImg={(shoe)=>{setBigShoeImg(shoe)}}
            bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
       </div>
    </div>
   </section>
  )
}

export default Hero
