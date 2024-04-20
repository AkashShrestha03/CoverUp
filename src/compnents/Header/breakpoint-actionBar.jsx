import { FaShoppingBag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ActionBar2 = () => {
  return (
    <>
      <div className="action-bar ">
        <div className="action_">
          <Link to={"/add-to-cart"} style={{ textDecoration: "none" }}>
            <FaShoppingBag className="text-light" />
            <span className="action_name text-light">Bag</span>
          </Link>
        </div>

        <div className="action_">
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <IoPersonSharp className="text-light" />
            <span className="action_name text-light">Log in</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ActionBar2;
