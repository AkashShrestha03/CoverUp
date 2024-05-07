import { FiMail, FiPhoneCall } from "react-icons/fi";

const About = () => {
  return (
    <div className="about_container text-center ">
      <div>
        <div className="detail my-5 mx-5">
          <h1>Why Us?</h1>
          <p className="fs-6 mx-5 mt-5 text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, modi
            eveniet tempora repudiandae eius perferendis ea, voluptate, autem
            saepe corporis maiores omnis excepturi laudantium ipsam distinctio
            sunt placeat sit nisi?
          </p>

          <span className="contact text-start">
            <FiPhoneCall /> +91- 9876543210
          </span>
          <span className="contact mx-5  ">
            <FiMail /> abc@gmail.com
          </span>
        </div>
      </div>
        <div className="about_img">
          <img src="img/Banner.jpg" alt="" />
        </div>
    </div>
  );
};

export default About;
