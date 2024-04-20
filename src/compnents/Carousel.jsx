
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel () {
  return (
    <>
      <div className="sliderContainer">
        <div className="slider_heading pb-3 mx-1">
          <h1>Top Selling</h1>
        </div>
        <Swiper
          slidesPerView={4}
      
          spaceBetween={10}
         
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="slider_card">
            <img src={"img/img1.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img3.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img4.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img1.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img3.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img4.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img4.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card">
            <img src={"img/img1.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
