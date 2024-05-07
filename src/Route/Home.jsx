import Hero from "../compnents/HeroSec.jsx";
import Carousel from "../compnents/Carousel.jsx";
import AirpodCards from "../compnents/Sliders/AirpodSlider.jsx";
import PhoneCoverSlider from "../compnents/Sliders/PhoneCovers.jsx";
import StrapSlider from "../compnents/Sliders/WatchSlider.jsx";
import ChargerCovers from "../compnents/Sliders/ChargerCovers.jsx";
import ChargerStand from "../compnents/Sliders/ChargerStand.jsx";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Carousel autoplay></Carousel>
      <hr className="mx-5" />
      <PhoneCoverSlider></PhoneCoverSlider>
      <hr className="mx-5" />
      <AirpodCards></AirpodCards>
      <hr className="mx-5" />
      <StrapSlider></StrapSlider>
      <hr className="mx-5" />
      <ChargerCovers />
      <hr className="mx-5" />
      <ChargerStand />
   
    </>
  );
};

export default Home;
