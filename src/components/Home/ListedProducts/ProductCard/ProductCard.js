import React,{useState,useEffect} from 'react';
import './ProductCard.css';
// import ProductImageOne from '../../../../assets/productcardone.png';
import PriceTag from '../PriceTag/PriceTag';
import axios from 'axios';

const ProductCard = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(async () => {
        console.log('ok')
        await axios.get('https://internship-slick-api.herokuapp.com/api/products').then(({ data }) => {
            console.log(data.data.slice(0,5));
            setAllProducts(data.data.slice(0,5));
        });
    }, []);

    return(
        <div className="pp">
  {
                allProducts.map((product) => {
                    return(
                        <div className="ProductCard">
                        <div className="img-con">
                            <img  src={product.image} alt="" />
                            <PriceTag className="Price-Container"
                            price = {product.price}/>
                        </div>
                     
                        <div>
                            <h5>{product.category.name}</h5>
                            <p>{product.name}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
          
   
    );
}
export default ProductCard;


// <div className="ProductCard">
// <div className="img-con">
//     <img  src={ProductImageOne} alt="" />
//     <PriceTag className="Price-Container"
//     price = {props.price}/>
// </div>

// <div>
//     <h5>{props.category}</h5>
//     <p>{props.title}</p>
// </div>
// </div>