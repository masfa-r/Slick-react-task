import React, { useState } from 'react';
import './Modal.css';
import Button from '../Button/Button';

const ModalBanner = (props) => {

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
                        placeholder="Write here..."></input>

                </form>
                <Button onclick={props.onBannerSave}>Save</Button>

            </div>
        </div>
    );
}

export default ModalBanner;