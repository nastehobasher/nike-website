import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className='flex justify-center items-center justify-wrap  max-xl:flex-col-reverse max-container gap-10'>
      <div className='flex-1'>
        <img 
        src={offer} 
        alt=""
        height={687}
        width={773}
        className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-semibold mb-3'> <span className='text-coral-red'>Special</span> Offer</h2>
        <p className='text-slate-gray font-montserrat '>Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='text-slate-gray font-montserrat mt-4 mb-4'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='flex gap-4 flex-wrap mt-11'>
         <Button label="Shop now"  iconURL={arrowRight}/>
          <Button
          label='Learn more'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
