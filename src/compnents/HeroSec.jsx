import { Link } from "react-router-dom";
import { Carousel } from "antd";

const Hero = ({}) => {
  return (
    <>
      <div className="container-fluid my-1">
        <Carousel autoplay>
          <div>
            <h3 style={{ width: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="img/img1.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={{ width: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="img/img2.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={{ width: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="img/img3.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={{ width: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="img/img4.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={{ width: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="img/img1.jpg"
                alt=""
              />
            </h3>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
