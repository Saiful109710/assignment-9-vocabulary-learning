import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    })
  },[])
  return (
    <div className='flex flex-col'>
        <header>
             <Navbar></Navbar>
        </header>
        <main className='container mx-auto min-h-screen'>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        <Toaster></Toaster>
    </div>
  )
}

export default MainLayout
