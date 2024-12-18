import React from 'react'
import Banner from '../components/Banner/Banner'
import AboutUs from '../components/AboutUS/AboutUs'
import Count from '../components/Count/Count'
import Choose from '../components/Choose/Choose'
import Courses from '../components/Courses/Courses'
import { useLoaderData } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = () => {
 const courses = useLoaderData();
 console.log(import.meta.env.VITE_a)

  return (
    <div>
      <Helmet>
          <title>Home | Lingo Bingo</title>
      </Helmet>
        <Banner ></Banner>
        <AboutUs></AboutUs>
        <Count></Count>
        <Choose></Choose>
        <Courses courses={courses}></Courses>
    </div>
  )
}

export default Home
