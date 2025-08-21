import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

import './styles.css'

const ProgressBar = () => {
    return (
        <div className='progress-bar-container'>
            <LinearProgress
                variant='determinate'
                value={50}
                style={{
                    width: '100%',
                    height: '10%',
                    borderRadius: '5px'
                }}
            />
            <div className="progress-tags">
                <p id='ques-num'>Question 07/10</p>
                <p id='points'>30/100 Points</p>
            </div>
        </div>
    )
}

export default ProgressBar;
