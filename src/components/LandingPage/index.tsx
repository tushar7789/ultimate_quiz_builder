import React from 'react'
import Navbar from './navbar';
import LandingBody from './landingbody';

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <Navbar />
            <LandingBody />
        </div>
    )
}

export default LandingPage;
