
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
  return (
    <center>
      <div className="about_container">
        <h1>Why Us?</h1>
        <p className="fs-6 w-50 mt-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, modi
          eveniet tempora repudiandae eius perferendis ea, voluptate, autem
          saepe corporis maiores omnis excepturi laudantium ipsam distinctio
          sunt placeat sit nisi?
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 my-5">
          <span className="contact text-start">
            <FiPhoneCall /> +91- 9876543210
          </span>
          <span className="contact mx-5 ">
            <FiPhoneCall /> abc@gmail.com
          </span>
        </div>
      </div>
    </center>
  );
};

export default About;
