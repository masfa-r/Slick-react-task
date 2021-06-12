import React from 'react';
import './PriceTag.css';
import PriceIcon from '../../../../assets/priceIcon.png';


const PriceTag = (props) => {
    return(
        <div className ="PriceTag">
          <div>
              <img src={PriceIcon} alt=""></img> <span>{props.price}</span>
          </div>
        </div>
    );
}

export default PriceTag;