import Hero from "../compnents/HeroSec.jsx";
import Carousel from "../compnents/Carousel.jsx";
import AirpodCards from "../compnents/Sliders/AirpodSlider.jsx";
import About from "../compnents/About.jsx";
import PhoneCoverSlider from "../compnents/Sliders/PhoneCovers.jsx";
import StrapSlider from "../compnents/Sliders/WatchSlider.jsx";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Carousel></Carousel>
      <hr className="mx-5" />
      <PhoneCoverSlider></PhoneCoverSlider>
      <hr className="mx-5" />
      <AirpodCards></AirpodCards>
      <hr className="mx-5" />
      <StrapSlider></StrapSlider>
      <hr className="mx-5" />
      <About></About>
    </>
  );
};

export default Home;
