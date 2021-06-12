import React from 'react';
import './ManagementContainer.css';
import ManagementNav from '../../ManagementNav/ManagementNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ManageBanners from '../../ManageBanners/ManageBanners'
import ManageProducts from '../../ManageProducts/ManageProducts';

const ManagementContainer = (props) => {
    return (
        <BrowserRouter>
            <div className="ManagementContainer">
                <Switch>
                    <Route exact path="/management/1" >
                    <ManagementNav addItemFunc={()=>props.addItemModal('banner')}/>
                        <ManageBanners  inputVal={props.inputVal} imageURL = {props.imageURL} 
                        setImageURL = {props.setImageURL} 

                        allBanners ={props.allBanners} setAllBanners ={props.setAllBanners}
                        />
                    </Route>
                    <Route exact path="/management/2" >
                    <ManagementNav addItemFunc={()=>props.addItemModal('product')}/>
                        <ManageProducts allProducts ={props.allProducts} setAllProducts={props.setAllProducts} />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}
export default ManagementContainer;