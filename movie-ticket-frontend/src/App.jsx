import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddShow from './pages/Admin/AddShow'
import ListShow from './pages/Admin/ListShow'
import ListBookings from './pages/Admin/ListBookings'

const App = () => {
  const isAdminRoute=useLocation().pathname.startsWith("/admin")
  return (
    <>
    <Toaster />
    {!isAdminRoute && <NavBar />}
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/mybookings' element={<MyBookings />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/movies/:id' element={<MovieDetails />} />
      <Route path="/movies/:id/:date" element={<SeatLayout />} />
      <Route path='/seatlayout/:id' element={<SeatLayout />} />
      <Route path='/admin/*' element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="add-show" element={<AddShow />} />
        <Route path="list-show" element={<ListShow />} />
        <Route path="list-bookings" element={<ListBookings />} />
      </Route>
    </Routes>
    {!isAdminRoute && <Footer />}

      
    </>
  )
}

export default App
