import React from 'react'
import { useLoaderData } from 'react-router-dom'
import beginnerVocab from '../../assets/beginnerVocab.jpg'
import CoursesCard from '../CoursesCard/CoursesCard'


const Courses = ({courses}) => {
    
   
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className='my-10 flex flex-col justify-center items-center gap-5'>
            <h2 className='text-center text-3xl font-bold'>Our Courses</h2>
            <p className='text-lg text-gray-700'>Explore courses designed to help you master Korean vocabulary step by step.</p>

            <div className='grid grid-cols-3 gap-5'>
            {
                courses.map((course)=><CoursesCard data-aos="zoom-out-right" key={course.id} course={course}></CoursesCard>)
            }
            </div>




    </div>
  )
}

export default Courses
