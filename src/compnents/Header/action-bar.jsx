import { FaShoppingBag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ActionBar = () => {
  return (
    <>
      <div className="header-right">
        <form className="d-flex search-header" role="search">
          <input
            className="form-control me-2 input-bar "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success search-btn" type="submit">
            Search
          </button>
        </form>

        <div className="action_container">
          <FaShoppingBag />
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <span className="action_name text-light">Bag</span>
          </Link>
        </div>

        <div className="action_container">
          <IoPersonSharp />
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <span className="action_name text-light">Log in</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ActionBar;
