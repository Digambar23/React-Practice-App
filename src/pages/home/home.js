import {useEffect, useState} from "react";
import ProductCard from "./ProductCard/ProductCard";
import Footer from "./Shared/Header/Footer/footer";
import Header from "./Shared/Header/Footer/header";




function Home(){

  const [products,setProducts]=useState([]) ;
 const [click,setClick] = useState(0);
  const[click2,setClick2]=useState(100);
  let  data="My Data";

  useEffect(()=>{
  fetch("product.json")
  .then((res)=>res.json())
  .then((res)=>{
    setProducts(res);
    console.log("Fetch called");
  });
},[click]);
return(
     <div>
     
//        <Header /> 

 {/* Products */}
 <div>
        <h1>{click}</h1>
        {/* <h1>{click}</h1>
        <h1>{click2}</h1>
        <button
          onClick={() => {
@@ -41,10 +40,18 @@ function Home() {
            setClick2(click2 + 1);
          }}>
          Click 2
        </button>
        <h3>{products && products.length}</h3>
        <h1>{data}</h1>
        <ProductCard />
        </button> */}
        {/* <h3>{products && products.length}</h3>
        <h1>{data}</h1> */}

        {/* Products */}
        <div className="row">
          {products.map((product, i) => (
            <div className="col-3">
              <ProductCard item={product} index={i} />
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </div>
);
}
export default Home; 