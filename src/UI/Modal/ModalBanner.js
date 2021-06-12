import React, { useState } from 'react';
import './Modal.css';
import Button from '../Button/Button';
import axios from 'axios';

const ModalBanner = (props) => {

    const [bannerData, setBannerData] = useState({
        link: ""
    });
    const postBannerDataHandler = (e) => {

        axios.post('https://internship-slick-api.herokuapp.com/api/banners', bannerData)
            .then(res => {
                axios.get('https://internship-slick-api.herokuapp.com/api/banners').then(({ data }) => {
                    console.log(data.data)
                    props.setAllBanners(data.data);

                });
                props.toggle();
            })

    }
    return (
        <div className="Modal">
            <div className="modal-content" >
                <div className="modal-header">
                    <h4>Add New Banner</h4>
                    <Button onclick={props.toggle}>&#10006;</Button>
                </div>
                <form action="">
                    <label htmlFor="imageURL">Enter Image URL</label>
                    <input type="text" id="imageURL" name="bannerImageURL"
                        value={props.inputVal}
                        onChange={props.handleChange}
                        placeholder="Write here..."
                        value={bannerData.link} onChange={(e) => { setBannerData({ ...bannerData, link: e.target.value }) }}
                    ></input>

                </form>
                <Button onclick={postBannerDataHandler}>Save</Button>

            </div>
        </div>
    );
}

export default ModalBanner;