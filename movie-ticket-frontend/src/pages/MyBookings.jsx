import React, { useEffect } from 'react'
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle';
import timeFormat from '../lib/timeFormat';
import { DateFormat } from '../lib/DateFormat';

const MyBookings = () => {
  const currency= import.meta.env.VITE_CURRENCY
  const [bookingData, setBookingData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getMyBookings=async()=>{
    setBookingData(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(()=>{
    getMyBookings()
  },[])

  return !isLoading ? (
    <div>
      <BlurCircle top="40px" right="1100px" />
      <div>
        <BlurCircle top="300px" right="700px" />
      </div>
      <h1 className='font-semibold text-lg mt-20 ml-30'> My Bookings</h1>
      {bookingData.map((item,index) => (
        <div key={index} className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row ml-30 mt-5 bg-amber-600/10 rounded-lg'>
            <img src={item.show.movie.poster_path} className='w-45 h-30 rounded object-cover object-bottom p-2' alt="" />
            <div className='flex flex-col ml-5 pr-3 pt-3'>
              <p className='text-md font-semibold'>{item.show.movie.title}</p>
              <p className='text-sm text-gray-300'>{timeFormat(item.show.movie.runtime)}</p>
              <p className='text-sm text-gray-300'>{DateFormat(item.show.showDateTime)}</p>

            </div>
            <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
              <div className='flex items-center gap-4'>
                <p className='text-2xl font-semibold'>{currency}{item.amount}</p>
                {!item.paid && <button className='bg-amber-700 text-white px-4 py-2 rounded-2xl font-semibold cursor-pointer'>Pay Now</button>}
              </div>
              <div className="text-sm">
                <p className='mt-1'><span className='text-gray-400'>Total Tickets:</span>{item.bookedSeats.length}</p>
                <p className='mt-1'><span className='text-gray-400'>Seat Number:</span>{item.bookedSeats.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
        
      ))}
      
    </div>
  ):(
    <Loading/>
  )
}

export default MyBookings
