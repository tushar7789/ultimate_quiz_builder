import React from 'react'
import './styles.css'

import Button from '../Button/button'
import { LoginStyleObj } from '../LandingPage/styleObjects'

const Finished = () => {
    return (
        <div className='finished-container'>
            <div id="attempted">Number of questions attempted : 10</div>
            <div id="correctly-answered">Correctly Answered : 8</div>
            <div id="points-scored">Points Scored : 80</div>
            <Button text={"Go to Dashboard"} style={LoginStyleObj} />
        </div>
    )
}

export default Finished
