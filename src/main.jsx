import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./Route/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PhoneCases from "./compnents/PhoneCases.jsx";
import SignUp from "./compnents/form/SignUpPage.jsx"
import Home from "./Route/Home.jsx";
import LoginPage from "./compnents/form/LoginPage.jsx";
import ProductDetails from "./pages/productDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cases",
        element: <PhoneCases />,
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cases",
        element: <PhoneCases />,
      },
      {
        path: "/casedetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
