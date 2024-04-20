import { FcGoogle, FcPhoneAndroid } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Validate from "./Form Validation/SignUp_Validation";

const LoginPage = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialLoginData);
  const [formErrors, setFormErrors] = useState({});
  // const { storeTokenInLS } = useAuth();
  const [isSubmit, setIsSubmit] = useState();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);

    //   try {
    //     const response = await fetch(
    //       `https://ayodhya-dham-4.onrender.com/api/user/signin`,
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formValues),
    //       }
    //     );

    //     if (response.ok) {
    //       const res_data = await response.json();
    //       console.log("res from server", res_data);
    //       storeTokenInLS(res_data);

    //       setFormValues({
    //         email: "",
    //         password: "",
    //       });

    //       navigate("/");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <div className="modal-content SignUp rounded-4 my-5 m-auto shadow w-50">
      <div className="modal-header p-5 pb-4  border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2 ">Log-In</h1>
      </div>

      <div className="modal-body p-5 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-3"
              id="floatingInput"
              name="email"
              value={formValues.email}
              placeholder="name@example.com"
              onChange={handleOnChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-3"
              id="floatingPassword"
              placeholder="Password"
              value={formValues.password}
              name="password"
              onChange={handleOnChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <button
            className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
            type="submit"
          >
            Log-in
          </button>
          <Link to={"/SignUp"} style={{ textDecoration: "none" }}>
            <span className="SignUp_form_toggle">Sign up</span>
          </Link>

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
  );
};

export default LoginPage;
