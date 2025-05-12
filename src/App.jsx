import React from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes ,Route, BrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Prodects from './Component/Prodects/Prodects';
import { Devices } from '@mui/icons-material';
import Footer from './Component/Footer/Footer';
import Aos from 'aos';

const App=()=> {
  
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  }, []);


  return (
  <div className='scroll-smooth flex flex-col flex-grow min-h-screen p-0 m-0 w-full  '>
     <BrowserRouter  >
 
     <NavBar />
   
  
    <Routes>  
      <Route path='/' element={<Home/>  }/>
      <Route path='/Prodects' element={<Prodects/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    <Footer />

   </BrowserRouter>
  </div>
  )
}

export default App
