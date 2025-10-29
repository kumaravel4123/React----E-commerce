import { useCurrency } from "../../context/CurrencyContext";
import { Link } from "react-router-dom";
import React from "react";
import './ProductCard.css';


// This is fake as of now, but the actual hosted media server path can be updated
// here when the site is in production. 
const img_server_path = "/images/Products_img/"

const ProductCard = ({ product }) => {
  const { convertPrice, getSymbol, loading } = useCurrency();

  const converted = convertPrice(product.price);

  return (
    <>
      <div className="col col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card">
          <Link
            to={`/product/${product.id}`}
            state={{ product }}
            className="card-link-area text-decoration-none text-dark"
            aria-label={`View details for ${product.title}`}
          >
          <img
            src={`${img_server_path}${product.img_src}`}
            className="card-img-top"
            alt="..." 
            />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>

            {loading ? (
              <p className="card-text text-muted">Loading Currency...</p>
            ):(
              <>
              <p className="card-text mb-1 fw-bold">
                  {getSymbol()} {converted}
                  {/* getSymbol retrieves currency symbol */}
                  {/* converted shows converted currency after calculation */}
                </p>
                <p className="card-text text-secondary small">
                  (Base: ${product.price} USD)
                </p>
              </>
            )}
             </div>   
            </Link>
        
            <a  className="btn btn-primary">  Add to cart  </a>
            <a className="btn btn-primary"> Buy </a>
          </div>
        </div>
      
    </>

  );
};

export default ProductCard;