
import React from 'react';
import './Button.css';

const Button = (props) => (

<button onClick={props.onclick}
className = "Button"
>{props.children}
</button>

);
export default Button;