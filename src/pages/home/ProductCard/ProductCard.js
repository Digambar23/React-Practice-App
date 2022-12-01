import './ProductCard.css';

function ProductCard(values) {
  return (
    <div className="card" >

      <img src={values.item.image}
        alt="..."></img>
      <hr />
      <div className="card-body">
        <h5 className="card-title">{values.item.name}</h5>
        <p className="card-text">&#8377;{values.item.price}</p>
        <p className="card-text">{values.item.detail}</p>
        <a href="#" className="btn btn-success flex-box">
          <svg >
          </svg>&nbsp;&nbsp;ADD TO CART</a>
      </div>
    </div>
  );
}
export default ProductCard;