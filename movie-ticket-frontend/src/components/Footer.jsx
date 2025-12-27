import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import googlePlay from "../assets/googlePlay.svg";



const Footer = () => {
  return (
    <div className="flex items-start justify-between md:px-24 lg:px-12 xl:px-20 py-20 gap-5 mr-30 left-0 w-full text-sm">
      <div className="flex flex-col items-start gap-4">
      <img src={logo} alt="" />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={googlePlay} />
      </div>
      <div className='flex flex-col items-start gap-4'> 
        <p>Company</p>
        <Link to="/"><p>Home</p></Link>
        <Link to="/AboutUs"><p>About Us</p></Link>
        <Link to="/ContactUs"><p>Contact Us</p></Link>
        <Link to="/PrivacyPolicy"><p>Privacy Policy</p></Link>

      </div>
      <div className='flex flex-col items-start gap-4 ml-6'>
        <p>Get In Touch</p>
        <p>+1-212-456-789</p>
        <p>contact@example.com</p>
      </div>
      
    </div>
  )
}

export default Footer
