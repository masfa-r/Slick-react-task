import React, { useState, useEffect } from 'react';
import './ManagementContainer.css';
import ManagementNav from '../../ManagementNav/ManagementNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ManageBanners from '../../ManageBanners/ManageBanners'
import ManageProducts from '../../ManageProducts/ManageProducts';
import axios from 'axios';



const ManagementContainer = (props) => {
    return (
        <BrowserRouter>
            <div className="ManagementContainer">
                <Switch>
                    <Route exact path="/management/1" >
                    <ManagementNav addItemFunc={()=>props.addItemModal('banner')}/>
                        <ManageBanners  inputVal={props.inputVal} imageURL = {props.imageURL} 
                        setImageURL = {props.setImageURL} 
                        />
                    </Route>
                    <Route exact path="/management/2" >
                    <ManagementNav addItemFunc={()=>props.addItemModal('product')}/>
                        <ManageProducts />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}
export default ManagementContainer;