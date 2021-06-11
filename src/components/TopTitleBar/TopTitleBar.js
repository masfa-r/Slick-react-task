import React from 'react';
import BellIcon from './BellIcon/BellIcon';
import MainTitle from './MainTitle/MainTitle';
import './TopTitleBar.css';

const TopTitleBar = (props) =>{
    return(
        <div className="TopTitleBar">
            <div>
               <MainTitle greet={props.greet} title={props.pagetitle}/> 
            </div>
            <div>
                <BellIcon/>
            </div>
        </div>
    );
}

export default TopTitleBar;