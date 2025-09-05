import React from 'react'
import './styles.css'

import Button from '../Button/button';
import { ButtonStyleInterface } from '@/interfaces/interfaces';

const styleObj1: ButtonStyleInterface = {
    color: "black",
    width: "inherit",
    height: "50px",
    bgColor: "#327cc7",
    border: "1px solid red",
    borderRadius: "5px",
    paddingBottom: "0px",
    paddingTop: "0px",
    paddingLeft: "20px",
    paddingRight: "20px",
    cursor: "pointer"
}

const styleObj2: ButtonStyleInterface = {
    color: "black",
    width: "inherit",
    height: "50px",
    bgColor: "#327cc7",
    border: "1px solid red",
    borderRadius: "5px",
    paddingBottom: "0px",
    paddingTop: "0px",
    paddingLeft: "20px",
    paddingRight: "20px",
    cursor: "pointer"
}

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-logo">LOGO</div>
            <div className="navbar-menu">OPTIONS</div>
            <div className="navbar-login">
                <Button text={"Contact Us"} />
                <Button text={"Login"} />
            </div>
        </div>
    )
}

export default Navbar;
