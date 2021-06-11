import React from 'react';
import './MainTitle.css';
const MainTitle = (props) =>{
    return(
        <div className="MainTitle">
            
         <p>{props.greet}</p>
         <h2>{props.title}</h2>
        </div>
    );
}

export default MainTitle;