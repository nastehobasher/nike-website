import { star } from "../assets/icons";

const PopularProdCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL} 
        alt={name} 
        className='w-[282px] h-[282px]'
        />
        <div className="mt-4 flex justify-start gap-2.5">
            <img src={star} alt='rating icon' width={24} height={24} />
            <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
        </div>
        <h3 className="font-semibold font-palanquin text-2xl mt-2 leading-normal ">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal ">{price}</p>
    </div>
  )
}

export default PopularProdCard