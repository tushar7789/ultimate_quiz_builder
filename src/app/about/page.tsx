'use client'

import React from 'react'
import './styles.css'

import { SetPage } from '@/contexts/NavbarContextProvider';

const About = () => {

    SetPage('About');

    return (
        <div className='about-container'>
            <div className="about-left-container">
                <p>About</p>
                <p>Us</p>
            </div>
            <div className="about-right-container">
                <p>We Help Individuals,</p>
                <p>Orginaztions & Institutions</p>
                <p>Build, Maintain and</p>
                <p>Conduct Quizes</p>
                <p>With Industry Leading Perks </p>
                <p>and Features.</p>
                <p>Join and Build</p>
                <p>Your Quiz Now</p>
            </div>
        </div>
    )
}

export default About;
