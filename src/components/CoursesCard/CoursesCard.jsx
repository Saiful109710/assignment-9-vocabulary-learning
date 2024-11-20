import React from 'react'
import { FaStar } from 'react-icons/fa'

const CoursesCard = ({course}) => {
  return (
    <div key={course.id} className='p-5 flex flex-col w-full flex-grow gap-5 shadow-2xl rounded-2xl hover:scale-105 transition duration-300'>
    <div > 
        <img className='w-full h-[200px]' src={course.image} alt="" />
    </div>
    <div className='flex flex-col grow'>
        <h2 className='text-xl text-gray-800 font-bold'>{course.name}</h2>
        <p className='text-gray-600'>{course.description}</p>
        <p className='text-gray-600'>Total Lesson : {course.lessonsCount}</p>
        
        <div className='flex justify-between'>
                <div className='flex items-center gap-2 text-gray-600'>
                    Ratings : <div className='flex'>
                            {
                                Array(5).fill(0).map((_,i)=><FaStar className={`${i<course.ratings?'text-yellow-500':'text-gray-300'}`}></FaStar>)
                            }
                </div>
                </div>
                <div>
                    <p className='text-gray-600 font-semibold'>Price:${course.price}</p>
                </div>

        </div>
        
    </div>
        <div>
            <button className='btn btn-primary w-full'>Buy This courses</button>
        </div>
</div>
  )
}

export default CoursesCard


const obj = {
    
        "id": "course3",
        "name": "Advanced Vocabulary",
        "description": "Expand your vocabulary with complex words and professional terminology.",
        "image": "advanced-course.jpg",
        "lessonsCount": 15,
        "progress": 0,
        "price": 39.99,
        "ratings": 4.8,
        "link": "/courses/advanced"
      
}
