'use client'

import React from 'react'

import LandingBody from '@/components/LandingPage/landingbody';
import { SetPage } from '@/contexts/NavbarContextProvider';

const Page = () => {
    SetPage('Home');

    return (
        <LandingBody />
        // <p>Lelp mera</p>
    )
}

export default Page;

