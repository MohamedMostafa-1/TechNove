import React from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Logo from '../../assets/Logo-removebg-preview.png'

const Footer = () => {
  return (
    <div id='footer' style={{width:"100vw", marginLeft:"calc(-50vw + 50%)" }} className='max-w-none  block w-full bg-blue-700 rounded-t-xl '>

     <div className='grid grid-cols-2 md:grid-cols-4   px-4 pt-5'>
          {/* Logo & Description */}
      <div className=' font-bold text-xl flex justify-center flex-col   mb-32 items-center'>
        <img src={Logo} alt=""  className='w-40  '/>
        
      </div>

      
      {/* Services */}
      <div>
        <h2 className="font-bold mb-2">Services</h2>
        {["Website Development", "Mobile Apps", "Web Applications", "Digital Marketing"].map((item, idx) => (
          <p
            key={idx}
            className="text-white/80 hover:text-black cursor-pointer hover:translate-x-1 transition duration-300 text-sm"
          >
            {item}
          </p>
        ))}
      </div>

          {/* Company */}
      <div>
        <h2 className="font-bold mb-2">Company</h2>
        {["About Us", "Our Team", "Careers", "Contact"].map((item, idx) => (
          <p
            key={idx}
            className="text-white/80 hover:text-black cursor-pointer hover:translate-x-1 transition duration-300 text-sm"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Follow Us */}
      <div>
        <h2 className="font-bold mb-2">Follow Us</h2>
        <div className="flex justify-center  items-center gap-4 mt-3 text-white">
          <TiSocialTwitter className="hover:text-black cursor-pointer hover:-translate-y-1 transition-transform duration-300" size={24} />
          <FaLinkedin className="hover:text-black cursor-pointer hover:-translate-y-1 transition-transform duration-300" size={24} />
          <FaGithub className="hover:text-black cursor-pointer hover:-translate-y-1 transition-transform duration-300" size={24} />
        </div>
      </div>
     </div>

      
    <p className="text-center text-white/80 text-sm py-4 border-t border-white/20 w-full">
      &copy; 2024 TechForge. All rights reserved.
    </p>

    </div>
  )
}

export default Footer









    


   

