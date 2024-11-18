
import { FaCircleCheck } from 'react-icons/fa6'

const Confirmation = ({setIsReserved}) => {
  return (
    <div className='fixed z-40 top-0 left-0 right-0 bottom-0 bg-black/20 flex justify-center items-center'>
        <div className='flex flex-col gap-2 p-4 min-h-80 justify-center bg-white text-olive rounded-corners text-center'>
            <div className='flex justify-center text-6xl'><FaCircleCheck /></div>
            <h2 className='text-2xl font-bold font-serif'>Your reservation has been confirmed.</h2>
            <p>You will receive an email with all the details.</p>
            <button onClick={() => setIsReserved(false)} type='button' className='mx-auto mt-4 bg-yellow hover:bg-olive hover:text-white transition-colors duration-300 text-lg cursor-pointer h-[34px] w-[168px] rounded-corners'>Close</button>
        </div>
    </div>
  )
}

export default Confirmation