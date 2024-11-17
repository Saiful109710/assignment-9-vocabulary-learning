import React from 'react'
import bannerImg from '../../assets/banner-imagejpg.jpg'

const Banner = () => {
  return (
    <div className='grid md:grid-cols-2 md:h-[400px] gap-5 px-5'>
        {/* content */}
           <div className='flex flex-col gap-5 justify-center md:w-2/3 mx-auto'>
                <h2 className='text-5xl font-bold'>Unlock the Power of Words</h2>
                <p className='text-gray-600 font-[500]'>Boost your language skills with our personalized vocabulary lessons and fun quizzes. Whether you're preparing for exams or just love learning, we've got the tools to help you succeed</p>
                <div>
                    <button className='btn btn-primary font-[600]'>Explore Lessons</button>
                </div>
          </div> 

            {/* Banner image */}
            <div className='flex justify-center items-center'>
                <img src={bannerImg} alt="" />
            </div>
    </div>
  )
}

export default Banner
