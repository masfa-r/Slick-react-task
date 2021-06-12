import React, { useEffect, useState } from 'react';
import ModalProducts from '../../UI/Modal/ModalProducts';
import TopTitleBar from '../TopTitleBar/TopTitleBar';
import ModalBanner from '../../UI/Modal/ModalBanner'
import './Management.css';
import axios from 'axios';
import ManagementContainer from './ManagementContainer/ManagementContainer';

const Management = () => {

    const [allBanners, setAllBanners] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(async () => {
        console.log('ok')
        await axios.get('https://internship-slick-api.herokuapp.com/api/products/categories').then(({ data }) => {
            setAllCategories(data.data);

        });
    }, []);

    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState("");
    
    const [inputVal, setInputVal] = useState('');
    const [imageURL, setImageURL] = useState([]);
   
    const toggle = (type) =>{
        setModal(!modal);
        setModalType(type);
    }
    const handleChange = (e) => {
       setInputVal(e.target.value);
    }

    const onBannerSave = (e) => {
        if (inputVal.trim()) {
           setImageURL([...imageURL, {title : inputVal}]);
        }
        else {
            alert("Enter something");
        }
        // setInputVal("");
    }
    return (
        <div className="Management">
            <TopTitleBar pagetitle="Management" />
            <ManagementContainer addItemModal={toggle}  inputVal={inputVal} imageURL={imageURL} setImageURL = {setImageURL}
            allBanners ={allBanners} setAllBanners ={setAllBanners}
            allProducts ={allProducts} setAllProducts={setAllProducts}
             />


            {modal ? modalType ==="banner"?<ModalBanner toggle={toggle} imageURL ={imageURL} setImageURL = {setImageURL}
            inputVal = {inputVal}  setInputVal = {setInputVal}
            handleChange ={handleChange} onBannerSave = {onBannerSave}
            allBanners ={allBanners} setAllBanners ={setAllBanners}
            />:
            <ModalProducts allCategories={allCategories}
            toggle={toggle}
            allProducts ={allProducts} setAllProducts={setAllProducts}
           
            // modal={modal}
            /> :null}
            
        </div>
    );
}

export default Management;