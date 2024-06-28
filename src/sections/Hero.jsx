import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import { statistics } from '../constant'
const Hero = () => {
  return (
   <section 
   id='home'
   className=' max-container flex xl:flex-row w-full flex-col justify-center gap-10 min-h-screen'>
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
    
      <p className='font-montserrat text-xl text-coral-red'> Our Summer collections </p>
      <h1 className='mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The new arival</span><br />
        <span className='text-coral-red mt-3'>Nike</span> shoes
      </h1>
      <p> Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label='Show Now' iconURl={arrowRight}/>
      <div className='flex justify-starts items-center flex-wrap mt-20 w-full  gap-16'>
        {statistics.map((stat)=>(
          <div key={stat.label}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
   </section>
  )
}

export default Hero
