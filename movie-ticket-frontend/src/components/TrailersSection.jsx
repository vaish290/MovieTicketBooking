import React from 'react'
import { dummyTrailers } from '../assets/assets';
import { useState } from 'react';
import ReactPlayer from "react-player";
import BlurCircle from './BlurCircle';
import { PlayCircle } from 'lucide-react';

const TrailersSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  return (
    <div className='px-6 md:px-24 lg:px-24 xl:px-120 py-20 overflow-hidden'>
        <p className="text-gray-300 font-medium text-lg max-w-[960px]">Trailers</p>
    <div className="relative mt-6">
        <BlurCircle top="-60px" right="-300px" />
        <ReactPlayer url={currentTrailer.videoUrl} controls={false} className='mx-auto max-w-full' width="960px" height="540px"/>
    </div>

    <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map(trailer => (
            <div key={trailer.image} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 cursor-pointer'
            onClick={() => setCurrentTrailer(trailer)}>
                <img src={trailer.image} alt="" className='w-full h-full object-cover rounded-lg brightness-75'/>
                <PlayCircle className='absolute top-0.5 left-0.5 w-5 md:w-6 h-5 md:h-12 -translate-x-0.5 -translate-y-0.5' />
            </div>
        ))}

    </div>  
    </div>
  )
}

export default TrailersSection
