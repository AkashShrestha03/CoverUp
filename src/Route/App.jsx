import Header from "../compnents/Header/Header.jsx";
import Footer from "../compnents/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
      <div className="body_container">
        <Header ></Header>
      <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
