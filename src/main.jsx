import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./Route/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./compnents/form/SignUpPage.jsx";
import Home from "./Route/Home.jsx";
import LoginPage from "./compnents/form/LoginPage.jsx";
import ProductDetails from "./pages/productDetails.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import CartSummary from "./pages/BagSummary.jsx";

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
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/casedetails",
        element: <ProductDetails />,
      },
      {
        path: "/collections",
        element: <Collection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <CartSummary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
