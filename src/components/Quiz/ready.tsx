import React from 'react'
import Button from '../Button/button';

const Ready = ({ questions, dispatch, currQues }: any) => {

    const handleClick = () => {
        dispatch({ type: 'ACTIVE', payload: questions?.at(currQues['currIndex'] + 1) });
    }

    return (
        <div>
            <Button text={"Start Quiz"} onClick={handleClick} />
            You will have {questions.length} no. of questions to attempt in 10 min.
        </div>
    )
}

export default Ready;
