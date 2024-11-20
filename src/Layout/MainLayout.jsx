import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
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
