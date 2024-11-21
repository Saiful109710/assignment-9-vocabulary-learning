import React from 'react'
import { useLoaderData } from 'react-router-dom'
import beginnerVocab from '../../assets/beginnerVocab.jpg'
import CoursesCard from '../CoursesCard/CoursesCard'


const Courses = ({courses}) => {
    
   
  return (
    <div data-aos="fade-up p-5"
    data-aos-anchor-placement="top-center" className='my-10 flex flex-col justify-center items-center gap-5'>
            <h2 className='text-center text-3xl font-bold'>Our Courses</h2>
            <p className='text-lg text-gray-700 text-center'>Explore courses designed to help you master Korean vocabulary step by step.</p>

            <div className='grid grid-cola-1 md:grid-cols-3 gap-5 p-5'>
            {
                courses.map((course)=><CoursesCard  key={course.id} course={course}></CoursesCard>)
            }
            </div>




    </div>
  )
}

export default Courses
