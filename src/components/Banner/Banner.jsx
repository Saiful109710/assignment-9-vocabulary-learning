import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/japaneese1.jpg'
import img2 from '../../assets/japaneeseBook.jpg'

const Banner = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
     
     <section className="slider-section grid grid-cols-2 mb-10 mt-5">
        <div className='w-4/5 space-y-5 py-5'>
                <h2 className='text-4xl font-bold '>
                   Master Korean Vocabulary with <span className='bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent'>Lingo Bingo</span>
                </h2>
                <p className='text-xl'>Unlock the beauty of the Korean language with an interactive and fun learning experience. Explore lessons, practice real-life scenarios, and grow your skills one word at a time!</p>
                <button className='btn border border-blue-700 bg-transparent hover:btn-primary hover:text-white'>Get Started</button>
        </div>
        <Slider {...sliderSettings}>
       <div className="relative">
         <img
           src={img1}
           alt="Learn Japanese"
           className="w-full h-96 object-cover"
         />
         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-4xl font-bold">
           Master Korean Vocabulary
         </div>
       </div>
       <div className="relative">
         <img
           src={img2}
           alt="Interactive Learning"
           className="w-full h-96 object-cover"
         />
         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-4xl font-bold">
           Interactive Learning Tools
         </div>
       </div>
     </Slider>
   </section>
  )
}

export default Banner
