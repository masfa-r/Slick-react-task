import React from 'react';
import './Logo.css';
import logo from '../../assets/Logo.png';

const Logo = () => {
return(
<div className="Logo-container">
    <img  src={logo} alt="" />
</div>
);
}

export default Logo;