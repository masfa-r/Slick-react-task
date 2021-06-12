import React from 'react';
import './ListedProducts.css';
import ProductCard from './ProductCard/ProductCard';

const ListedProducts = () => {
    return(
        <div className ="ListedProductsContainer">
         <ProductCard/>
               {/* <ProductCard
            category="Casual"
            title ="Overcome Basic Sweatshirt"
            price = "4000"
            /> */}
               {/* <ProductCard
            category="Casual"
            title ="Overcome Basic Sweatshirt"
            price = "4000"
            />
               <ProductCard
            category="Casual"
            title ="Overcome Basic Sweatshirt"
            price = "4000"
            />
               <ProductCard
            category="Casual"
            title ="Overcome Basic Sweatshirt"
            price = "4000"
            /> */}
           
       
        </div>
    );
}

export default ListedProducts;