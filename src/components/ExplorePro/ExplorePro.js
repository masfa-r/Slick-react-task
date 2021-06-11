import React from 'react';
import './ExplorePro.css';
import Button from '../../UI/Button/Button';
import PolygonSmall from '../../assets/PolygonS.png';
import PolygonLarge from '../../assets/PolygonL.png';

const ExplorePro = () => {
    return (
        <div className = "ExplorePro">
            <div>
                <div className="top-div">
                <p>Boost your sales fast!</p>
                <img className="PolygonLarge" src={PolygonLarge} alt="" />
                </div>
            </div>
            <div>
            <img className="PolygonSmall" src={PolygonSmall} alt="" />
            </div>
            <div>
            <Button>Explore Pro</Button>
            </div>
        </div>
    );
}

export default ExplorePro;