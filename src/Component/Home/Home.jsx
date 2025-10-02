import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router';
// import { data } from 'react-router';


const devices = [
  { name: 'Laptop', src: Lap },
  { name: 'TV', src: tv },
  { name: 'Printer', src: printer },
  { name: 'Phone', src: phone },
  { name: 'Camera', src: camera },
  { name: 'Video Game', src: game },
];

 const categories = [
  "smartphones", 
  "laptops",
  "tablets", 
  "mobile-accessories"
 ]


const Home = () => {
  const [products , setProducts]=  useState([])


  useEffect(()=>{
    const fetchdata = async()=>{
     try {
      const redults = await Promise.all(
        categories.map(async(category)=>{
          const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
          return {[category] :res.data.products}
        })
      )
      const allproducts = Object.assign({}, ...redults)
      setProducts(allproducts)
     } catch (error) {
      console.error("Error fetching products:", error);
     }
    }
    fetchdata()
  },[])

  console.log(products);
  
  return (
    
    <div>
      <div className='mt-5 flex  flex-col md:flex-row gap-3 justify-center items-center'>
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
               {/* ["smartphones", "laptops", "tablets", "mobile-accessories"].includes(p.category) */}
          <div className='grid grid-cols-4  gap-3 justify-center items-center p-3'>
            {Object.values(products).flat().slice(0, 8).map((product)=>(
             <Card key={product.id} sx={{ maxWidth: 345 }}>
              <CardActionArea component={Link} to={`/products/${product.id}`}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.images[0]}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" className='text-start' component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" className='text-start' sx={{ color: 'text.secondary' }}>
                    {product.description}
                    </Typography>
                  </CardContent>
                
              </CardActionArea>


               <CardActions sx={{ justifyContent: "left", pb: 2 }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    borderRadius: "9999px",
                    px: 3,
                    textTransform: "none",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    },
                  }}
                  
                >
                 <Link to={`/products/${product.id}`} className='no-underline   text-start text-white'>
                 Show More 
                 </Link>
                </Button>
              </CardActions>
            </Card>          
            ))}
          </div>
        
    </div>
    
  )
}

export default Home