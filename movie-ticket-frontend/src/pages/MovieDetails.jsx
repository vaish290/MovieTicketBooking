import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useState} from "react"
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { Star,Heart, PlayCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'
import BlurCircle from '../components/BlurCircle'
import DateSelect from '../components/DateSelect'
import MoviesCard from '../components/MoviesCard'
import Loading from '../components/Loading'


const MovieDetails = () => {
    const {id} =useParams()
    const [show,setShow]=useState(null)
    const navigate=useNavigate()
    const getShow=async()=>{
        const show=dummyShowsData.find(show=>String(show._id)===String(id))
        if (show){
            setShow({
            movie:show,
        dateTime:dummyDateTimeData})
    }

        }
        
useEffect(()=>{
    getShow()
},[id])
return show? (
    <div className='px-4 md:px-24 lg:px-20 xl:px-20 py-50 gap-8'>
        <div className='flex flex-col md:flex-row gap-8'>
            <img src={show.movie.poster_path} className='w-70 h-104 rounded-2xl object-cover' alt="" />
        <div className='flex flex-col ml-2 gap-3'>
            <BlurCircle top="50px" right="900px"/>
            <p className=' text-amber-700 font-semibold'>English</p>
            <h1 className='text-4xl font-semibold text-balance'>{show.movie.title}</h1>
            <div className='flex items-center gap-2 text-gray-300'>
                <Star className='w-5 h-5 text-amber-700 fill-amber-700'/>
                {show.movie.vote_average.toFixed(1)} User Ratisng
            </div>
            <p className='text-gray-300 text-sm leading-tight pr-50'>{show.movie.overview}</p>
            <p className='text-gray-300 text-sm '>
                {timeFormat(show.movie.runtime)} * {show.movie.genres.map((genre) => genre.name).join(' | ')} * {show.movie.release_date.split('-')[0]}
            </p>
            <div className='mt-10 flex gap-4 items-center'>
                <button className='flex items-center justify-center bg-white/10 rounded-sm cursor-pointer w-40 h-10 text-sm text-gray-300'><PlayCircle className='w-5 h-5 mr-3' />Watch Trailer </button>
                <a href="#date-select-section" className='flex bg-amber-700 items-center justify-center rounded-lg w-40 h-10 text-sm text-gray-300'>Buy Tickets</a>
                <button className='flex bg-white/20 items-center justify-center rounded-3xl w-12 h-10 text-gray-300'><Heart className='w-5 h-5' />
                </button>
            </div>
        </div>
        </div>
        <p className='text-lg font-medium mt-20'>Your Favorite Cast </p>
        <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
            <div className='flex justify-between items-center gap-3 w-max'>
                {show.movie.casts.slice(0,12).map((cast,index)=>(
                    <div key={index} className='flex flex-col justify-between items-center text-center'>
                        <img src={cast.profile_path} className='rounded-full aspect-square w-20 h-20 object-cover' alt="" />
                        <p className='font-medium text-xs mt-3'>{cast.name}</p>
                        </div>

                ))}
            </div>
        </div>
        <div id="date-select-section" className='relative'>
        <DateSelect dateTime={show.dateTime} id={show.movie._id} />
        </div>
        <div className='mt-20 mb-5 flex flex-row items-center justify-between mr-15'>
        <p className='text-lg font-medium'>You may also like</p>
        <button onClick={()=>{navigate('/Movies') ; scrollTo(0,0)}} className='text-sm  hover:text-amber-700 cursor-pointer'>Show More</button>
        </div>
        <div className='flex flex-row items-center gap-3'>
            {dummyShowsData.slice(0,4).map((movie,index)=>(
                <MoviesCard key={index} movie={movie} />
            ))}
        </div>
    </div>
  ):
  (
        <Loading />
 
  )
}

export default MovieDetails
