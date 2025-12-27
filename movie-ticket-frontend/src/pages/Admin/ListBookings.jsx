import React, { use } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';
import Title from '../../components/Admin/Title';
import {DateFormat} from '../../lib/DateFormat';
const ListBookings = () => {
  const currency=import.meta.env.VITE_CURRENCY
  const [bookings,setBookings]=useState([]);
  const [loading,setLoading]=useState(true);

  const getAllBookings=async()=>{
    setBookings(dummyBookingData);
    setLoading(false);
  };

  useEffect(()=>{
    getAllBookings();
  },[]);





  return !loading?(
    <>
    <Title text1="List" text2="Bookings" />
    <div className='max-w-4xl mt-6 overflow-x-auto'>
      <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
        <thead>
          <tr className='bg-amber-700/30 text-left text-white'>
            <th  className="p-2 font-medium pl-5">User Name</th>
            <th className="p-2 font-medium">Movie Name</th>
            <th className="p-2 font-medium">Show Time</th>
            <th className="p-2 font-medium">Seats</th>
            <th className="p-2 font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((item,index)=>(
            <tr key={index} className="border-b border-amber-700/30 bg-amber-700/10 even:bg-amber-700/20">
              <td className="p-2 pl-5 min-w-45">{item.user.name}</td>
              <td className="p-2">{item.show.movie.title}</td>
              <td className="p-2">{DateFormat(item.show.showDateTime)}</td>
              <td className="p-2">{Object.keys(item.bookedSeats).map(seat=>item.bookedSeats[seat]).join(", ")}</td>
              <td className="p-2">{currency}{item.amount}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
    </>
  ):(
    <Loading />
  )
}

export default ListBookings
