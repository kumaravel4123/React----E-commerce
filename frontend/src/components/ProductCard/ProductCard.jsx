import React from "react";
import './ProductCard.css';
   

    // This is fake as of now, but the actual hosted media server path can be updated
       // here when the site is in production. 
const img_server_path = "/images/Products_img/"

const ProductCard = ({product}) =>{

    return (
    <>
    <div className="col col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card">
  <img src={`${img_server_path}${product.img_src}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">Rs.{product.price}</p>
    <a to="/" className="btn btn-primary">  Add to cart  </a>
    <a to="/" className="btn btn-primary"> Buy </a>
    </div>
  </div>
</div>
</>

    );
};

export default ProductCard;