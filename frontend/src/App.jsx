import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup';
import Register from './landing_page/signup/Register';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/products' element={<ProductPage/>} />
          <Route path='/pricing' element={<PricingPage/>} />
          <Route path='/support' element={<SupportPage/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
