import React from 'react'
import Link from 'next/link'


import './styles.css'

import Button from '../Button/button';
import { LoginStyleObj, ActiveOptionStyleObj, InactiveOptionStyleObj } from './styleObjects';
import MainLogo from '../../../public/static-images/main-logo.png';
import { useNavbarContext } from '@/contexts/NavbarContextProvider';
import { NavbarContextValues } from '@/interfaces/interfaces';

const getClass = (a: string, b: string) => {
    if (a === b)
        return ActiveOptionStyleObj;
    else
        return InactiveOptionStyleObj;
}

const Navbar = () => {

    const { currPage, setCurrPage }: any = useNavbarContext();

    return (
        <div className='navbar-container'>
            <div className="navbar-logo">
                <img
                    src={MainLogo.src}
                    style={{
                        height: '35px',
                        width: '35px',
                        marginRight: '10px',
                        cursor: 'pointer'
                    }}
                    alt=""
                />
                <p
                    style={{
                        color: '#1341e8',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                >
                    Quiz B
                </p>
            </div>
            <div className="navbar-menu">
                <Link href="/">
                    <Button text={"Home"} style={getClass('Home', currPage)} />
                </Link>
                <Link href="/quiz">
                    <Button text={"Quizes"} style={getClass('Quiz', currPage)} />
                </Link>
                <Link href="/statistics">
                    <Button text={"Statistics"} style={getClass('Statistics', currPage)} />
                </Link>
                <Link href="/about">
                    <Button text={"About Us"} style={getClass('About', currPage)} />
                </Link>


            </div>
            <div className="navbar-login">
                <Button text={"Login"} style={LoginStyleObj} />
            </div>
        </div>
    )
}

export default Navbar;
