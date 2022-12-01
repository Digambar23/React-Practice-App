import './ProductCard.css';

function ProductCard(values){
    return(
        <div  ClassName="card" >

        <img src={values.item.image} 
             alt="..."></img>
             <hr/>
        <div ClassName="card-body">
          <h5  ClassName="card-title">{values.ues.item.name}</h5>
          <p  ClassName="card-text">&#8377;{values.item.price}</p>
          <p  ClassName="card-text">{values.item.detail}</p>
            <a href="#"  ClassName="btn btn-success flex-box">
            <svg >
          </svg>&nbsp;&nbsp;ADD TO CART</a>
        </div>
      </div>
    );
}
export default ProductCard;