import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Prodects from './Component/Prodects/Prodects';
import Footer from './Component/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProductDetails from './Component/ProductsDetailds/PrductsDetails';

const App = () => {
  const [myMode, setMyMode] = useState(localStorage.getItem("currentMode") === null ? "light" : localStorage.getItem("currentMode"));

  const darkTheme = createTheme({
  palette: {
    mode: myMode,
  },
});

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="scroll-smooth flex flex-col flex-grow min-h-screen p-0 m-0 w-full">
        <Router>
          {/* dark mode  */}
          <NavBar darkMode={myMode} setDarkMode={setMyMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prodects" element={<Prodects />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/About" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
