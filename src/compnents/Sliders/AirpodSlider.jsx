
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const AirpodCards = () => {
  return (
    <>
      <div className="sliderAPContainer my-5">
        <div className="slider_AP_heading pb-3 mx-5">
          <h1>Airpod Collections</h1>
          <span>some text description</span>
          <button className="btn btn-success my-3">See All</button>
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
          <SwiperSlide className="slider_card_Ap">
            <img src={"img/img1.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card_Ap">
            <img src={"img/img2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card_Ap">
            <img src={"img/img3.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card_Ap">
            <img src={"img/img4.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card_Ap">
            <img src={"img/img4.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider_card_Ap">
            <img src={"img/img4.jpg"} alt="" />
          </SwiperSlide>
         
         
        </Swiper>
      </div>
    </>
  );
};

export default AirpodCards;
