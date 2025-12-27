
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useState } from 'react'
import { Menu,Search, X, TicketPlus} from 'lucide-react'
import { useClerk,UserButton,useUser} from '@clerk/clerk-react'


const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const {user}=useUser()
  const {openSignIn}=useClerk()
  const navigate=useNavigate()
  return (
    <div className="fixed top-0 ml-6 px-4 md:px-8 lg:px-10 flex items-center justify-between left-0 w-full z-50 bg-transparent">
      <Link to="/"><img src={assets.logo} className=" w-24 md:w-28 lg:w-auto" /></Link>
      <div className={`flex gap-8 mt-3 text-sm px-4 md:px-5 lg:px-6 md:rounded-full
        md:gap-6 lg:gap-8 lg:rounded-full p-3 bg-white/10 
        max-md:fixed max-md:inset-0 max-md:bg-black max-md:z-50
        max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-8
        max-md:text-lg
        ${isOpen ? 'max-md:flex' : 'max-md:hidden'} `}>
        <X className='md:hidden' onClick={() => setIsOpen(!isOpen)}/>
        <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to="/">Home</Link>
        <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to="/movies">Movies</Link>
        <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to="/">Theaters</Link>
        <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to="/">Releases</Link>
        <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to="/">Favourites</Link>
      </div>
      <div className='flex gap-6 md:gap-5 lg:gap-6'>
        <Search className="mt-3"/>
        {!user?(<button className="bg-amber-700 rounded-full px-6 py-2" onClick={openSignIn}>Login</button>):(
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={()=> navigate("/MyBookings")} />
            </UserButton.MenuItems>
          </UserButton>
        )}
        
      </div>
      <div>
        <Menu className='md:hidden' onClick={()=>setIsOpen(!isOpen)}/>
      </div>    
      </div>
  )
}

export default NavBar
