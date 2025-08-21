import React, { useEffect, useState } from 'react'
import { QuestionsPropInterface } from '@/interfaces/interfaces';
import './styles.css'
import { optionTags } from '@/config';
import Right from '../../../public/static-images/check.png';
import Wrong from '../../../public/static-images/close.png';

const Questions: React.FC<QuestionsPropInterface> = ({ currQues, dispatch }) => {
    const [ind, setInd] = useState(-1);

    const handleOptionClick = (index: any) => {
        if (currQues['locked'] === false) {
            dispatch({ type: 'LOCKED' });
            setInd(ind => index);
        }
    }

    useEffect(() => {
        if (currQues['locked'] === false)
            setInd(-1);
    }, [currQues['locked']])

    return (
        <div className="ques-container">
            <div className="ques-container-Q">
                {currQues['ques']}
            </div>
            <div className="ques-container-options">
                {
                    currQues['options']?.map((item, index) => (
                        < div
                            className={
                                ind !== -1 ?
                                    item === currQues['correctAnswer'] ?
                                        "option-res-pos" :
                                        ind === index ?
                                            "option-res-neg" :
                                            "option" :
                                    "option"
                            }
                            key={item}
                            onClick={() => handleOptionClick(index)}
                        >
                            {
                                ind !== -1 ?
                                    item === currQues['correctAnswer'] ?
                                        <>
                                            <div className="option-res-text">
                                                {item}
                                            </div>
                                            <div className=" option-res-pos-tag">
                                                <img src={Right.src} style={{ width: '20px', height: '20px' }} />
                                            </div>

                                        </> :
                                        ind === index ?
                                            <>
                                                <div className="option-res-text">
                                                    {item}
                                                </div>
                                                <div className="option-res-neg-tag">
                                                    <img src={Wrong.src} style={{ width: '20px', height: '20px' }} />
                                                </div>

                                            </> :
                                            <>
                                                <div className="option-tag">
                                                    {optionTags[index]}
                                                </div>
                                                <div className="option-text">
                                                    {item}
                                                </div>
                                            </> :
                                    <>
                                        <div className="option-tag">
                                            {optionTags[index]}
                                        </div>
                                        <div className="option-text">
                                            {item}
                                        </div>
                                    </>
                            }
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default Questions;
