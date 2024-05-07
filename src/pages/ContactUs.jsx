
const ContactUs = () => {
  const myStyle = {
    backgroundImage: "url('./img/Banner.jpg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div className="parallax" style={myStyle}></div>
      <section className=" ">
        <div className="contact-head py-4">
          <span className="text-center">
            For bulk orders and corporate inquiries contact us on:
            info@universaloleoresins.com
          </span>
          <span className="text-center">
            <h6>EMAIL</h6>
            <p>spices@gmail.com</p>
          </span>
          <span className="text-center">
            <h6>PHONE</h6>
            <p>+91-9876543210</p>
          </span>
        </div>

        <form className="contact-form ">
          <h1 className="py-3 contact-heading">Contact Us</h1>
          <textarea
            name="message"
            className="message-box"
            id="messageus"
            cols="30"
            rows="10"
            placeholder="My message...."
          />
          <input
            type="text"
            className="px-2"
            placeholder="My name is..."
            style={{ height: "50px" }}
          />
          <input
            className="px-2"
            type="email"
            placeholder="Reply me to email..."
            style={{ height: "50px" }}
          />
          <button
            className="w-100 send-btn btn btn-primary Contact Page"
            style={{ height: "50px", border: "none" }}
          >
            SEND MY MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
