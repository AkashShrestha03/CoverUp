
import { FaTags } from "react-icons/fa";





const ProductDetails = () => {
   
  return (
    <div className="productContainer d-flex justify-content-evenly">
      <div className="productImg">
        <img
          src={"img/img1.jpg"}
          style={{ height: "100Vh", width: "100%" }}
          alt="img"
        />
      </div>
      <div className="product_details my-5">
        <div className="container">
          <h1>Iphone 13 Navy Blue Hard Cover </h1>
          <div className="my-4">
            <span className="h2">Rs. 299</span>
            <span
              className="h5"
              style={{ textDecoration: "line-through", color: "grey" }}
            >
              499
            </span>
          </div>
          <span className="text-success fw-bold my-5">COLOR CHOICES</span>
          <hr />
          <div className="color_pallet d-flex gap-5">
            <div className="d-flex flex-column text-center">
              <div
                className="Blue"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  backgroundColor: "Blue",
                }}
              />
              <p>Blue</p>
            </div>
            <div className="d-flex flex-column text-center">
              <div
                className="Blue"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  backgroundColor: "Black",
                }}
              />
              <p>Black</p>
            </div>
            <div className="d-flex flex-column text-center">
              <div
                className="Red"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  backgroundColor: "Red",
                }}
              />
              <p>Red</p>
            </div>
          </div>
          <button
            className="btn btn-success btn-lg"
            style={{ height: "50px", width: "100%" }}
          >
            ADD TO CART
          </button>
          <div className="my-3">
            <span className="offers_head text-danger fs-6 fw-bold">
              EXCITING OFFERS
            </span>
            <span className="offer d-flex align-items-center gap-2">
              <FaTags />
              <span>
                Free temper glassb worth Rs. 400 on all orders above Rs.1200
              </span>
            </span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
