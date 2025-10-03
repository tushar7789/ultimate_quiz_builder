import React from 'react'
import Button from '../Button/button';
import { GoToDashboardStyle } from '../../styles/styleObjects';

const Ready = ({ questions, dispatch, currQues }: any) => {

    const handleClick = () => {
        dispatch({ type: 'ACTIVE', payload: questions?.at(currQues['currIndex'] + 1) });
    }

    return (
        <div className='ready-container'>
            <p>You will have {questions.length} no. of questions to attempt in 10 min.</p>
            <Button text={"Start Quiz"} onClick={handleClick} style={GoToDashboardStyle} />
        </div>
    )
}

export default Ready;
