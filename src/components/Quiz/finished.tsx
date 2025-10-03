import React from 'react'
import Link from 'next/link'
import './styles.css'


import Button from '../Button/button'
import { GoToDashboardStyle } from '../../styles/styleObjects'

const Finished = () => {
    return (
        <div className='finished-container'>
            <p>RESULTS</p>
            <div id="attempted">
                <span className='attempted-text'>Number of questions attempted</span>
                <span className='attempted-colon'>:</span>
                <span className='attempted-number'>10</span>
            </div>
            <div id="correctly-answered">
                <span className='attempted-text'>Correctly Answered</span>
                <span className='attempted-colon'>:</span>
                <span className='attempted-number'>08</span>
            </div>
            <div id="points-scored">
                <span className='attempted-text'>Points Scored</span>
                <span className='attempted-colon'>:</span>
                <span className='attempted-number'>80</span>
            </div>
            <Link href="/quiz">
                <Button text={"Go to Dashboard"} style={GoToDashboardStyle} />
            </Link>
        </div>
    )
}

export default Finished
