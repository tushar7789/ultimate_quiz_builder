import React, { useEffect, useState } from 'react'
import { QuestionsPropInterface } from '@/interfaces/interfaces';
import './styles.css'
import RegularOption from './Options/regularOption';
import IrregularOption from './Options/irregularOption';

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
                    currQues['options']?.map((item: string, index: number) => (
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
                                        <IrregularOption text={item} pos={true} />
                                        :
                                        ind === index ?
                                            <IrregularOption text={item} pos={false} />
                                            :
                                            <RegularOption text={item} index={index} />
                                    :
                                    <RegularOption text={item} index={index} />
                            }
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default Questions;
