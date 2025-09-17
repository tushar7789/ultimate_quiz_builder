import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { ProgressBarPropInterface } from '@/interfaces/interfaces';

import './styles.css'

const ProgressBar: React.FC<ProgressBarPropInterface> = ({ currQuesIndex, quesLength }) => {
    let percentage = 0;
    if (quesLength !== undefined && currQuesIndex !== undefined) {
        percentage = Math.floor((currQuesIndex / quesLength) * 100);
    }

    console.log("percentage", percentage, "currIndex :", currQuesIndex);

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
                {
                    currQuesIndex !== undefined && quesLength !== undefined ?
                        <>
                            <p id='ques-num'>Question {currQuesIndex + 1}/{quesLength}</p>
                            <p id='points'>30/100 Points</p>
                        </> :
                        null
                }
            </div>
        </div>
    )
}

export default ProgressBar;
