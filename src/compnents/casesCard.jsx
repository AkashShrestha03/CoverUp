

const CaseCard =()=>{
  return (
    <div class="card case_card" style={{ width: "18rem", height: "26rem" }}>
      <img height={280} src="img/img4.jpg" class="card-img-top" alt="img" />
      <div class="card-body d-flex justify-content-between">
        <div>
          <h5>Iphone 13</h5>
          <p class="card-text">Description</p>
          <span className="d-flex align-items-end gap-2">
            <h5>₹123</h5>{" "}
            <h6
              className="text-secondary"
              style={{ textDecoration: "line-through" }}
            >
              ₹1234
            </h6>
          </span>
        </div>
        <div className="align-self-end">
          {" "}
          <button className="btn btn-warning">Add to cart</button>
        </div>
      </div>
    </div>
  );
} 

export default CaseCard;