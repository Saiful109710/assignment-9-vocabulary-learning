// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../assets/vocabulary.jpg'
import img2 from '../../assets/vocabulay.jpg'
import img3 from '../../assets/banner-imagejpg.jpg'
 const BannerSlider =()=> {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='w-full h-[400px]' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
     
      ...
    </Swiper>
  );
};

export default BannerSlider