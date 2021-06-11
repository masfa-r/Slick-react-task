import React from 'react';
import './ManagementNav.css';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button/Button';

const ManagementNav = (props) => {
    const managementNavLinks = [
        {
            className: 'mLinks',
            to: '/management/1',
            name: 'Manage Banners'
        },
        {
            className: 'mLinks',
            to: '/management/2',
            name: 'Manage Products'
        }
    ]
    return (
        <div className="managementNavLinks" >
            <div>
                {
                    managementNavLinks.map(link =>
                        <NavLink className={link.className} to={link.to}>{link.name}</NavLink>
                    )
                }
            </div>
            <div className="AddBtn">
                
                    <Button 
                    onclick={props.addItemFunc}>+ Add New</Button>
                
            </div>



        </div>
    );
}

export default ManagementNav;