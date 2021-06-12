import React from 'react';
import { NavLink} from 'react-router-dom';
import './NavigationItems.css';
import { ReactComponent as ManagementIcon} from '../../../assets/management.svg';
import { ReactComponent as AnalyticsIcon} from '../../../assets/analytics.svg';
import { ReactComponent as ProductIcon} from '../../../assets/product.svg';
import { ReactComponent as HomeIcon} from '../../../assets/home.svg';

const NavigationItems = () => {
    const navLinks = [
        {
            className: 'NavLinks',
            to: '/Slick-react-task/',
            name: 'Home',
            iconComponent: <HomeIcon/>
        },
        {
            className: 'NavLinks',
            to: '',
            name: 'Analytics',
            iconComponent: <AnalyticsIcon/>
        },
        {
            className: 'NavLinks',
            to: '',
            name: 'Products',
            iconComponent: <ProductIcon/> 
        },
        {
            className: 'NavLinks',
            to: '/management/1',
            name: 'Management' ,
            iconComponent: <ManagementIcon/>
        }
        
    ]
    return (
        <div className="NavLinks">  
            {
            navLinks.map(link => 
            <p key={link.name}>
               {link.iconComponent}
            <NavLink className={link.className}  to={link.to}> {link.name}</NavLink>
            </p>
            )        
            }

        </div>
    );
}

export default NavigationItems;