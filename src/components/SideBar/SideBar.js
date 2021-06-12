import React from 'react';
import './SideBar.css';
import Logo from '../Logo/Logo';
// import { BrowserRouter, Route } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import ExplorePro from './ExplorePro/ExplorePro';

const SideBar = () => {
    return (

        <div>
            <div className="SideBar">
                <div className="sideBar-top">
                    <Logo />
                    <NavigationItems />
                </div>

                <div>
                    <ExplorePro />
                </div>

            </div>
        </div>


    );
}

export default SideBar;