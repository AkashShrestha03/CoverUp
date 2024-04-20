import { FcGoogle, FcPhoneAndroid } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Validate from "./Form Validation/SignUp_Validation";

const SignUp = () => {
  const INITIAL_VALUE = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();
  const navigate = useNavigate();
  // const { storeTokenInLS } = useAuth();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);
    //  navigate("/login");

    //    try {
    //      const response = await fetch(
    //        `https://ayodhya-dham-4.onrender.com/api/user/signup`,
    //        {
    //          method: "POST",
    //          headers: {
    //            "Content-Type": "application/json",
    //          },
    //          body: JSON.stringify(formValues),
    //        }
    //      );
    //      console.log(response);
    //      if (response.ok) {
    //        const res_data = await response.json();
    //        storeTokenInLS(res_data);
    //        setFormValues({
    //          firstname: "",
    //          lastname: "",
    //          username: "",
    //          email: "",
    //          password: "",
    //        });
    //        navigate("/userlogin");
    //      }
    //    } catch (error) {
    //      console.log(error);
    //    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  return (
    <>
      <div className="modal-content SignUp rounded-4 my-5 m-auto shadow w-50">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
        </div>

        <div className="modal-body p-5 pt-0">
          <form onSubmit={handleSubmit}>
            <div className=" g-3">
              <div className="form-floating mb-1">
                <input
                  type="text"
                  className="form-control rounded-3"
                  name="firstname"
                  id="floatingName"
                  value={formValues.firstname}
                  placeholder="First Name"
                  onChange={handleOnChange}
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <p style={{ color: "red" }}>{formErrors.firstname}</p>
              <div className="form-floating mb-1">
                <input
                  type="text"
                  name="lastname"
                  className="form-control rounded-3"
                  id="floatingLastName"
                  value={formValues.lastname}
                  placeholder="Last Name"
                  onChange={handleOnChange}
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <p style={{ color: "red" }}>{formErrors.lastname}</p>
            </div>

            <div className="form-floating mb-1">
              <input
                type="email"
                className="form-control rounded-3"
                name="email"
                id="floatingemail"
                value={formValues.email}
                placeholder="name@example.com"
                onChange={handleOnChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <p style={{ color: "red" }}>{formErrors.email}</p>
            <div className="form-floating mb-1">
              <input
                type="password"
                className="form-control rounded-3"
                id="floatingPassword"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleOnChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <p style={{ color: "red" }}>{formErrors.password}</p>
            <button
              className="w-100 mb-1 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
              Sign up
            </button>
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
            <hr className="my-4" />
            <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
            <button
              className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
              type="submit"
            >
              Sign up with <FcPhoneAndroid className="mx-2 mb-1" />
            </button>
            <button
              className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
              type="submit"
            >
              Sign up with <FaFacebook className="mx-2 mb-1" />
            </button>
            <button
              className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
              type="submit"
            >
              Sign up with <FcGoogle className="mx-2 mb-1" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
