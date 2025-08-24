import React from 'react'
import Button from '@mui/material/Button';
import Heand from '../../assets/HandFree-removebg-preview (1).png'
import Watched from '../../assets/watched-removebg-preview.png'
import Lap from '../../assets/lap.jpeg'
import tv from '../../assets/tv.jpeg'
import printer from '../../assets/printer.jpeg'
import phone from '../../assets/phone.jpeg'
import camera from '../../assets/camera.jpeg'
import game from '../../assets/game.jpeg'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { FaCreditCard } from "react-icons/fa6";


const devices = [
  { name: 'Laptop', src: Lap },
  { name: 'TV', src: tv },
  { name: 'Printer', src: printer },
  { name: 'Phone', src: phone },
  { name: 'Camera', src: camera },
  { name: 'Video Game', src: game },
];


const Home = () => {
  return (
    
    <div>
      <div className='mt-5 flex flex-col md:flex-row gap-3 justify-center items-center'>
        {/* part right section */}
        <div className='   w-[98%] md:w-[49%] bg-blue-500 rounded-[20px] ' >
            {/* img */}
          <div className=' pl-[100px] md:pl-[300px] w-[90%] md:w-[90%] pt-8'>
              <img src={Watched} alt=""  className='w-full'/>
          </div>
          {/* content  */}
      
          <p className='text-lg font-bold  text-white pr-[100px]   md:pr-[450px]'>New Arrivals</p>
          <h1 className=' text-2xl md:text-3xl font-bold text-black pr-[90px]  md:pr-[360px] '>Smart Watch </h1>
            <p className='text-3xl md:text-4xl text-black font-bold pr-[50px]  md:pr-[260px] '>Your Life,Synced</p>
            <div className='  md:pr-[350px] pb-[10px] '>
            <Button className='bg-white  ' variant="contained"><span className='text-black font-semibold p-1 '> Explore Categories</span></Button>
            </div>
        
        </div>

        {/* part left section */}
        <div className='w-[98%] md:w-[49%] flex flex-col gap-2 px-0 py-2 bg-red-500  rounded-[20px] '>
        {/* content  */}
            <h1 className='text-4xl md:text-5xl font-bold text-outline pr-[50px] md:pr-[100px] '>Smart Headphones </h1>
            <p className='text-2xl md:text-4xl text-white font-bold pr-[50px] md:pr-[190px] '>Unleash Pure Sound</p>
            <div className='md:pr-[350px] '>
            <Button className='bg-white  ' variant="contained"><span className='text-red-600 font-semibold p-1 '> Shop Now</span></Button>
            {/* img */}
            </div>
            <div  className='md:pl-[250px] w-[90%]  md:w-[90%]'>
            <img  src={Heand} alt=""  className='w-full'/>
            </div>
        
        </div>
      </div>
      {/* part2-section */}
      <div className="overflow-hidden bg-gray-100 py-10 mt-[100px] relative ">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          
          {[...devices, ...devices].map((device, index) => (
            <div
              key={index}
              className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-center shrink-0"
            >
              <img src={device.src} alt={device.name} className="w-24 h-24 object-contain" />
              <span className="mt-2 text-sm font-medium">{device.name}</span>
            </div>
          ))}
        </div>
      </div>

       {/* part3-section */}
        <div className=' flex flex-wrap gap-32 py-[50px]  mt-10 justify-center items-center'>
          {/* csrd-1 */}
          <div  className='flex gap-2  '>
            {/* icon */}
              <div>
              <LocalShippingIcon className="p-1  bg-blue-600 rounded-full"/>
              </div>
            {/* content */}
              <div >
                <h4>Free Shipping  </h4>
                <p>Acrten All Major Cities</p>
              </div>
          </div>
          {/* csrd-2 */}
          <div className='flex gap-2 '>
            {/* icon */}
              <div>
              <FaCreditCard size={30} className="p-2  bg-blue-600 rounded-full"/>
              </div>
            {/* content */}
              <div>
                <h4>Flexible Payment Multiple</h4>
                <p>Multiple secum payment options</p>
              </div>
          </div>
          {/* csrd-3 */}
          <div className='flex gap-2 '>
            {/* icon */}
              <div >
              <HeadphonesIcon className="p-1  bg-blue-600 rounded-full" />
              </div>
            {/* content */}
              <div>
                <h4>24-7 Support</h4>
                <p>We support online all dayn</p>
              </div>
          </div>
          
        </div>

      
    </div>
    
  )
}

export default Home