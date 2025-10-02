import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-removebg-preview.png'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from '@mui/material';


const NavBar = ({ setDarkMode ,darkMode}) => {

   const [menuOpen,setmenuopen] = useState(false);
   const theme = useTheme()

  const toggleMenu = () => {
    setmenuopen(!menuOpen);
  };

  useEffect(() => {
  if (darkMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);


  return (
    <div className='w-full bg-slate-50 dark:bg-slate-900 shadow-gray-200 dark:shadow-black shadow-md fixed top-0 left-0 z-40 transition-colors duration-300'>
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
        <div >
          <ul className=' hidden md:flex  gap-3 pr-5 text-center '>
          <CiUser  className=' ' size={20} />
          <CiHeart className=' '  size={20}/>
          <HiOutlineShoppingBag className=' ' size={20} />
           <button onClick={()=>{
            localStorage.setItem("currentMode" , theme.palette.mode === "light" ? "dark":"light")
            setDarkMode(
              theme.palette.mode === "light" ? "dark":"light"
            )
           }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
           >
             {theme.palette.mode === "light" ? <BsMoon  size={20} /> :<BsSun  size={20} /> }
           </button>
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
                    <button
                      onClick={() => {
                        setDarkMode(
                          theme.palette.mode === "light" ? "dark":"light"
                        )
                        toggleMenu();
                      }}
                      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                      {theme.palette.mode === "light" ? <BsMoon  size={20} /> :<BsSun  size={20} /> }
                    </button>
                </ul>
              </div>
        )}


    </div>
  )
}

export default NavBar
