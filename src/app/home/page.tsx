'use client'

import React from 'react'

import LandingBody from '@/components/LandingPage/landingbody';
import { SetPage } from '@/contexts/NavbarContextProvider';

const Home = () => {

    SetPage('Home');

    return (
        <LandingBody />
    )
}

export default Home;
