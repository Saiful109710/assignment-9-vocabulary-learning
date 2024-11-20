import React from 'react'
import Banner from '../components/Banner/Banner'
import AboutUs from '../components/AboutUS/AboutUs'
import Count from '../components/Count/Count'
import Choose from '../components/Choose/Choose'
import Courses from '../components/Courses/Courses'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
 const courses = useLoaderData();
 console.log(courses)
  return (
    <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Count></Count>
        <Choose></Choose>
        <Courses courses={courses}></Courses>
    </div>
  )
}

export default Home
