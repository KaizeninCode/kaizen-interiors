import React from 'react'
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className='w-full min-h-screen' id='contact'>
      <div className='flex items-center'>
        <div className='w-1/2 h-screen items-center p-9'>
            <h1 className='text-4xl font-gothic text-center font-semibold text-white mb-16'>We'd love to hear from you.</h1>
            <p className='text-white text-3xl mb-12'><FaInstagram /> officialkaizen</p>
            <p className='text-white text-3xl mb-12'><MdOutlineMailOutline /> info@kaizeninteriors.co.ke</p>
            <p className='text-white text-3xl mb-12'><FaPhoneAlt /> +254712345678</p>
            <p className='text-white text-3xl mb-12'><FaXTwitter /> officialkaizen</p>
        </div>
        <div className='w-1/2 h-screen items-center'>
            <img src="/room-2.jpg" alt="room" className='h-full m-auto'/>
        </div>
      </div>
    </section>
  )
}

export default Contact
