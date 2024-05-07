const CartSummary = ({}) => {
  const bagSummary = {
    totalItem: 3,
    totalMRP: 1200,
    totalDiscount: 500,
    finalPayment: 700,
  };

  return (
    <main className="cart-page container">
      <div className="bag-items-container">
        <div className="card " style={{ width: "18rem" }}>
         
          <img src="./img/img1.jpg" className="card-img-top" alt="..." />
          

          <div className="card-body text-center">
            <p className="card-text">₹235</p>
            <h4>Iphone 13 Blue Color</h4>
            <span className="d-flex justify-content-center gap-5 align-items-center">
              {" "}
              <h6 className="text-success"> In Stock</h6>
              <button className="btn btn-dark">Add to Cart</button>
            </span>
          </div>
        </div>
      </div>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({bagSummary.totalItem} Items)
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{bagSummary.totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{bagSummary.totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{bagSummary.finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order header-gradient">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </main>
  );
};

export default CartSummary;
