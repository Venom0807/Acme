import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className='h-[20vh] bg-[#222222] text-white flex flex-col'> 
    <div className="footerTop flex mainWidth justify-between items-center py-6 text-3xl">
            <img src="/5e7ff57adad44d1f072965b6_logo.svg" alt="" />
            <div className="social flex gap-3">
                <div className='hover:text-gray-300 cursor-pointer transition-all duration-[.3s]'>
                <FaTwitterSquare />
                </div>
                <div className='hover:text-gray-300 cursor-pointer transition-all duration-[.3s]'>
                <FaFacebook />
                </div>
                <div className='hover:text-gray-300 cursor-pointer transition-all duration-[.3s]'>
                <FaInstagram />
                </div>
            </div>
    </div>
    <p className='text-center'>Made By <a style={{color:"#eb5757"}} href="https://ahmer-khan-nine.vercel.app/">Ahmer Khan</a>. © 2020.</p>
    </div>
  )
}

export default Footer