import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { ProgressBarPropInterface } from '@/interfaces/interfaces';

import './styles.css'

const ProgressBar: React.FC<ProgressBarPropInterface> = ({ currQues, questions }) => {
    let qLength, percentage = 0;
    if (questions !== undefined) {
        qLength = questions.length;
        percentage = Math.floor(((currQues['currIndex']) / qLength) * 100);
    }

    return (
        <div className='progress-bar-container'>
            <LinearProgress
                variant='determinate'
                value={percentage}
                style={{
                    width: '100%',
                    height: '10%',
                    borderRadius: '5px'
                }}
            />
            <div className="progress-tags">
                <p id='ques-num'>Question {currQues['currIndex'] + 1}/{qLength}</p>
                <p id='points'>30/100 Points</p>
            </div>
        </div>
    )
}

export default ProgressBar;
