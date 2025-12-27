import React from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const DateSelect = ({dateTime,id}) => {
    const [selected, setSelected] = React.useState(null)
    const navigate=useNavigate()

    const onBookHandler=()=>{
        if (!selected) {
            return toast('Please select a date');
        }
        navigate(`/movies/${id}/${selected}`)
    }
  return (
    <div>
        <div className='flex-row flex items-center justify-between bg-pink-500/20
mt-20 p-3'>
            <div >
                <p className='text-lg font-semibold mb-5'>Choose Dates</p>
                <div className="flex flex-row items-center text-sm">
                    <ChevronLeft width={28} className='text-amber-700 font-extrabold'/>
                    <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4 border-amber-600 rounded-sm'>
                        {Object.keys(dateTime).map((date) => (
                            <button key={date} onClick={()=>setSelected(date)} className={`flex flex-col items-center justify-center ml-3 mr-3
                            border-amber-600/30 border h-14 w-14 aspect-square rounded cursor-pointer ${selected === date ? 'bg-amber-700 text-white' : 'bg-white/20'}`}>
                                <span>{new Date(date).getDate()}</span>
                                <span>{new Date(date).toLocaleString('en-us', { month: 'short' })}</span>
                            </button>
                            
                        ))}
                    </span>
                    <ChevronRight width={28} className='text-amber-700 font-extrabold'/>
                </div>
            </div>
        <button onClick={onBookHandler} className='flex flex-row items-center justify-center bg-amber-700 rounded-lg cursor-pointer w-40 h-10 text-sm text-gray-300'>Book Now</button>
        </div>
      
    </div>
  )
}

export default DateSelect
