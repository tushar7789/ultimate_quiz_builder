import React from 'react'
import './styles.css'

import Button from '../Button/button';
import { ContactStyleObj, LoginStyleObj, ActiveOptionStyleObj, InactiveOptionStyleObj } from './styleObjects';
import MainLogo from '../../../public/static-images/main-logo.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-logo">
                <img
                    src={MainLogo.src}
                    style={{
                        height: '40px',
                        width: '40px',
                    }}
                    alt=""
                />
                <p
                    style={{
                        color: '#e8d313',
                        fontSize: '20px'
                    }}
                >
                    Quiz B
                </p>
            </div>
            <div className="navbar-menu">
                <Button text={"Home"} style={ActiveOptionStyleObj} />
                <Button text={"About Us"} style={InactiveOptionStyleObj} />
                <Button text={"Product"} style={InactiveOptionStyleObj} />
                <Button text={"Campaign"} style={InactiveOptionStyleObj} />
            </div>
            <div className="navbar-login">
                <Button text={"Contact Us"} style={ContactStyleObj} />
                <Button text={"Login"} style={LoginStyleObj} />
            </div>
        </div>
    )
}

export default Navbar;
