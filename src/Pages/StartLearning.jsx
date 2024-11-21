import React from 'react'
import { Link } from 'react-router-dom'

const StartLearning = () => {

    

  return (
    <div className='p-5'>
        <h2 className='text-gray-800 text-center text-2xl font-bold'>Lets' Learn </h2>
        <section >
          <h2 className='text-2xl font-semibold text-center my-5'>Select a Lesson</h2>
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
        {
            Array(10).fill(0).map((_,i)=>(
             <Link to={`/lesson/${i+1}`}> <button className='btn btn-lg bg-blue-100 hover:bg-blue-200 text-blue-800 shadow-md transition duration-300'>
             Lesson-{i+1}
         </button></Link>
            ))
        }
        </div>
        </section>

        <section className='flex flex-col items-center gap-5 mt-5 p-5'>
              <h2 className='text-2xl font-semibold text-center '>Learn The Alphabet</h2>
              <div className="flex justify-center mb-6">
          <iframe width="400" height="315"   src="https://www.youtube.com/embed/pT4k7LC91Cw?si=hySgDWilyk1cFsSd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-lg shadow-lg'></iframe>
        </div>
              <Link to='/tutorials'><button className='btn  btn-primary'>View More Tutorial</button></Link>
        </section>


    </div>
  )
}

export default StartLearning
