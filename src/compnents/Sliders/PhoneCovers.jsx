
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const PhoneCoverSlider = () => {
  return (
    <>
      <div>
        <img
          src={"img/Banner.jpg"}
          className="m-2"
          style={{ height: "80vh", width: "100vw", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="sliderAPContainer d-flex gap-5 my-5">
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
            <Link to={"/casedetails"}>
              <img src={"img/img1.jpg"} alt="" />
            </Link>
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
            <img src={"img/img1.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="slider_AP_heading mx-5 ">
          <h1>Mobile Collections</h1>
          <span>some text description</span>
          <button className="btn btn-success my-3">See All</button>
        </div>
      </div>
    </>
  );
};

export default PhoneCoverSlider;
