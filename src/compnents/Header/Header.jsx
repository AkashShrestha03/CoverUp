import NavBar from "./NavBar";
import ActionBar from "./action-bar";
import "./Header.css";
import { Link } from "react-router-dom";
import ActionBar2 from "./breakpoint-actionBar";

const Header = () => {
  return (
    <>
      <header className=" container-fluid  headerAt991">
        <Link className="navbar-brand logo mx-3" to="/">
          <img src="" alt="Cover & Ship" />
        </Link>
        <ActionBar2></ActionBar2>
      </header>
      {/* responsive header */}
      <header className=" container-fluid">
        <Link className="navbar-brand none logo bmx-3" to="/">
          <img src="" alt="Cover & Ship" />
        </Link>
        <NavBar></NavBar>
        <ActionBar></ActionBar>
      </header>
    </>
  );
};

export default Header;
