import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar1Icon, TimerIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const {navigate}=useNavigate()
  return (
    <div className="flex flex-col items-start bg-[url('/backgroundImage.png')] bg-cover bg-center h-screen -mt-20 pt-40">
        <img className="ml-20 pt-50" src={assets.marvelLogo} alt="" /> 
        <h1 className="ml-20 pt-3 text-5xl font-semibold">Gurdians<br />of the Galaxy </h1>
        <div className="ml-20 pt-3 flex gap-4 text-gray-100">
            <span>Action|Adventure|Sci-Fi</span>
            <div className='flex items-center'>
                <Calendar1Icon className='w-4.5 h-4.5' />2018
            </div>
             <div className='flex items-center'>
                <TimerIcon className='w-4.5 h-4.5'/>2h 1m
            </div>

        </div>
        <p className="ml-20 pt-3 text-gray-100">In a post-apocalyptic world where cities ride on wheels and <br />
        consume each other to survive, two people meet in London and 
        <br />try to stop a conspiracy.</p>
        <button onClick={() => navigate("/Movies")} className="mt-5 ml-20 text-sm flex items-center bg-amber-700 rounded-full px-6 py-2 gap-1
        hover:bg-amber-600 text-md cursor-pointer">
        Explore Movies<ArrowRight className=' w-4.5 h-4.5'/>
        </button>
      
    </div>
  )
}

export default HeroSection
