import React, { useState } from 'react';
import './Modal.css';
import Button from '../Button/Button';
import priceIcon from '../../assets/priceIcon.png';

const Modal = (props) => {

    const [productData, setProductData] = useState({
        url: "",
        category: "",
        name: '',
        price: 0

    });
    return (
        <div className="Modal">
            <div className="modal-content" >
                <div className="modal-header">
                    <h4>Add New Product</h4>
                    <Button onclick={props.toggle}>&#10006;</Button>
                </div>
                <form action="">
                    <label htmlFor="imageURL">Enter Image URL</label>
                    <input type="text" id="imageURL" name="imageURL" value={productData.url} onChange={(e)=>{setProductData({...productData, url:e.target.value})}} placeholder="Write here..."></input>


                    <label htmlFor="category">Select Category</label>
                     <select value={productData.category} onChange={(e)=>{setProductData({...productData, category:e.target.value})}} id="category" name="category">
                        {props.allCategories.map(o=> <option value={o._id}>{o.name} </option>)}
                    </select>

                    <label htmlFor="productName">Product Name</label>
                    <input type="text" id="productName" name="productName" onChange={(e)=>{setProductData({...productData, name:e.target.value})}} value={productData.name} placeholder="Write here..."></input>

                    <label htmlFor="price">Price</label>
                    <div className="inputWithIcon">
                    <input type="number" id="price" name="Price" placeholder="  E.g. 4500" value={productData.price} onChange={(e)=>{setProductData({...productData, price:e.target.value})}} ></input>
                    
                    <img src={priceIcon} className="input-price-icon" alt=""></img>
                    </div>
                   
                </form>
                <Button onclick={(e)=>{console.log(productData)}}>Save</Button>
               
            </div>
        </div>
    );
}

export default Modal;