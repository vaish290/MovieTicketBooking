import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Star} from 'lucide-react'
import timeFormat from '../lib/timeFormat'
const MoviesCard = ({movie}) => {
  const navigate=useNavigate()
  return (
    <div className='flex w-50 h-70 flex-col justify-between p-3 bg-slate-800 rounded-2xl hover:-translate-y-1 transition duration-300'>
      <img onClick={() => {navigate(`/movies/${movie._id}`); scrollTo(0,0)}} src={movie.backdrop_path} alt=""  className='rounded-lg cursor-pointer h-40 w-full object-cover object-right-bottom'/>
      <p className="font-semibold mt-1 truncate hover:cursor-pointer">{movie.title}</p>
      <p className="text-gray-400 text-xs mt-0.5 mb-4">{new Date(movie.release_date).getFullYear()} * {movie.genres.slice(0,2).map((genre) => genre.name).join(' | ')} * {timeFormat(movie.runtime)}</p>
      <div className='flex gap-7 mt-2 items-center text-sm'>
        <button onClick={() => {navigate(`/movies/${movie._id}`); scrollTo(0,0)}} className='rounded-full bg-amber-700 mr-8 p-2 text-xs hover:bg-amber-600 cursor-pointer'>Buy Tickets</button>
        <p className='flex items-center gap-2 text-xs mt-2'><Star className='h-3 w-3 text-amber-700 fill-amber-700'/> {movie.vote_average.toFixed(1)} </p>
      </div>
      
    </div>
  )
}

export default MoviesCard
