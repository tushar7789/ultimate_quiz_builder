import React from 'react'
import { QuestionsPropInterface } from '@/interfaces/interfaces';
import './styles.css'

const Questions: React.FC<QuestionsPropInterface> = ({ currQues }) => {
    return (
        <div className="ques-container">
            <div className="ques-container-Q">
                {currQues['ques']}
            </div>
            <div className="ques-container-options">
                {
                    currQues['options']?.map((item, index) => (
                        < div className="option" key={item}>
                            <div className="option-tag">
                                A
                            </div>
                            <div className="option-text">
                                {item}
                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default Questions;
