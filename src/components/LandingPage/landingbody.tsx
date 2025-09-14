import React from 'react'
import './styles.css'

import Button from '../Button/button'
import { AddNewQuizStyle } from './styleObjects'

const LandingBody = () => {
    return (
        <div className='landingbody-container'>
            <div className='lb-section-1'>BUILD.</div>
            <div className="lb-section-2">YOUR QUIZ.</div>
            <div className="lb-section-3">NOW.</div>
        </div>
    )
}

export default LandingBody;
