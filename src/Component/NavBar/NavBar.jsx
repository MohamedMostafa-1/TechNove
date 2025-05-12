import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-removebg-preview.png'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

   const [menuOpen,setmenuopen] = useState(false);

  const toggleMenu = () => {
    setmenuopen(!menuOpen);
  };

  return (
    <div className='w-full bg-slate-50 shadow-md fixed top-0 left-0 z-40 '>
      <div className='flex justify-between items-center p-1'>
        {/* logo */}
        <div className=' font-bold text-xl flex items-center'>
          <img src={Logo} alt=""  className='w-20 pl-5'/>
          <h1 className='text-xl font-bold '>Tech<span className='text-blue-800'>Nove</span></h1>
        </div>
        {/* links */}
        <div >
          <ul className='hidden md:flex gap-6 text-center '>
              <li><Link to="/"  className='text-center text-blue no-underline text-lg font-bold  '>Home</Link></li>
              <li><Link to="/Prodects"className='text-center text-blue no-underline text-lg font-bold '>Products</Link></li>
              <li><Link to="/About"className='text-center text-blue no-underline text-lg  font-bold '>About</Link></li>
          </ul>
        </div>
        {/* icons */}
        <div className='text-white'>
          <ul className=' hidden md:flex  gap-3 pr-5 text-center text-black '>
          <CiUser  size={20} />
          <CiHeart  size={20}/>
          <HiOutlineShoppingBag size={20} />
          </ul>
        </div>
         {/* ------Responsive-icon ------ */}
            <div className='md:hidden '>
              <button onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>


 
      </div>

                 
       {/* ------COntent-Menuo ------ */} 
        { menuOpen && (
              <div onClick={toggleMenu} className='flex flex-col  items-center gap-4 font-bold pb-4 md:hidden list-none'>
                <li><Link to="/"  className='text-center text-blue no-underline text-lg font-bold  '>Home</Link></li>
                <li><Link to="/Prodects"className='text-center text-blue no-underline text-lg font-bold '>Products</Link></li>
                <li><Link to="/About"className='text-center text-blue no-underline text-lg  font-bold '>About</Link></li>
                <ul className='  flex  gap-3 pr-5 text-center text-black '>
                  <CiUser  size={20} />
                  <CiHeart  size={20}/>
                  <HiOutlineShoppingBag size={20} />
                </ul>
              </div>
        )}


    </div>
  )
}

export default NavBar
