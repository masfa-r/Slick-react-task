import React from 'react';
import './ProductCard.css';
import ProductImageOne from '../../../assets/productcardone.png';
import PriceTag from '../PriceTag/PriceTag';

const ProductCard = (props) => {
    return(
    <div className="ProductCard">
        <div className="img-con">
            <img  src={ProductImageOne} alt="" />
            <PriceTag className="Price-Container"
            price = {props.price}/>
        </div>
     
        <div>
            <h5>{props.category}</h5>
            <p>{props.title}</p>
        </div>
    </div>
    );
}
export default ProductCard;