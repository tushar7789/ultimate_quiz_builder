import React from 'react'
import Link from 'next/link'


import './styles.css'

import Button from '../Button/button';
import { LoginStyleObj, ActiveOptionStyleObj, InactiveOptionStyleObj } from './styleObjects';
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
                        marginRight: '10px',
                        cursor: 'pointer'
                    }}
                    alt=""
                />
                <p
                    style={{
                        color: '#e8d313',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                >
                    Quiz B
                </p>
            </div>
            <div className="navbar-menu">
                <Link href="/">
                    <Button text={"Home"} style={ActiveOptionStyleObj} />
                </Link>
                <Link href="/quiz">
                    <Button text={"Quizes"} style={InactiveOptionStyleObj} />
                </Link>
                <Link href="/about">
                    <Button text={"Statistics"} style={InactiveOptionStyleObj} />
                </Link>
                <Link href="/about">
                    <Button text={"About Us"} style={InactiveOptionStyleObj} />
                </Link>


            </div>
            <div className="navbar-login">
                <Button text={"Login"} style={LoginStyleObj} />
            </div>
        </div>
    )
}

export default Navbar;
