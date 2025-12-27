import React from 'react'
import {LayoutDashboard,PlusSquare,List,ListCollapse} from 'lucide-react'
import {assets} from "../../assets/assets"
import { NavLink } from 'react-router-dom'
const AdminSidebar = () => {
    const user={
        firstName: "Admin",
        lastName: "User",
        imageUrl:assets.profile,
    }

    const adminNavlinks=[
      {name:"Dashboard",path:"/admin" ,icon:LayoutDashboard},
      {name:"Add Shows",path:"/admin/add-show" ,icon:PlusSquare},
      {name:"List Shows",path:"/admin/list-show" ,icon:List},
      {name:"List Bookings",path:"/admin/list-bookings" ,icon:ListCollapse},

    ]
  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm pl-5">
      <img src={user.imageUrl} className="w-10 h-10 rounded-full" alt="" />
      <p className='text-base mt-1 mb-3'>{user.firstName} {user.lastName}</p>
      {adminNavlinks.map((link,index)=> (
        <NavLink key={index} to={link.path} end className={({isActive})=>`relative flex items-center min-pl:5 max-md:justify-center gap-3 w-full  py-2.5  first:mt-6 text-gray-400 ${isActive&&'bg-amber-700/20 text-amber-700 group'}`}>
          {({isActive})=>(
            <>
            <link.icon className='w-5 h-5' src=""/>
            <p>{link.name}</p>
            <span className={`w-1.5 h-10 rounded-1 right-0 absolute ${isActive&&'bg-amber-700'}`}/>
            </>
          )}
        </NavLink>
      ))}
      
    </div>
  )
}

export default AdminSidebar
