'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import CategoryIcon from '../../../../public/static-images/categories-icon.png';
import TotalQuestionsIcon from '../../../../public/static-images/total-questions-icon.png';
import TotalMarksIcon from '../../../../public/static-images/total-score-icon.png';
import DifficultyIcon from '../../../../public/static-images/difficulty-icon.png';
import Button from '@/components/Button/button';
import { StartQuizButtonStyleObj } from '@/components/LandingPage/styleObjects';
import { quizList } from '@/fakeAPI_data';

const SelectedQuiz = () => {
    const pathname = usePathname();
    const id: any = pathname.split('/').at(-1);
    const obj = quizList.map(item => {
        if (item["id"] === Number(id)) return item;
    });
    console.log("bojext", obj);

    return (
        <div className="quiz-id-container">
            {
                id !== undefined ?
                    <div className="quiz-id-left-container">
                        <div id="quiz-id-left-heading">
                            {obj[id - 1]?.name}
                        </div>
                        <div id="quiz-id-left-details">
                            <ul>
                                <li>
                                    <img src={CategoryIcon.src} alt="" />
                                    <span className='id-details-label'>Category</span>
                                    <span className='id-details-value'>{obj[id - 1]?.domain}</span>

                                </li>
                                <li>
                                    <img src={TotalQuestionsIcon.src} alt="" />
                                    <span className='id-details-label'>Total questions</span>
                                    <span className='id-details-value'>{obj[id - 1]?.total_questions}</span>
                                </li>
                                <li>
                                    <img src={TotalMarksIcon.src} alt="" />
                                    <span className='id-details-label'>Total Marks</span>
                                    <span className='id-details-value'>{obj[id - 1]?.totat_marks}</span>
                                </li>
                                <li>
                                    <img src={DifficultyIcon.src} alt="" />
                                    <span className='id-details-label'>Difficulty</span>
                                    <span className='id-details-value'>Medium</span>
                                </li>
                            </ul>
                        </div>
                        <div id='id-details-start-button'>
                            <Button text={"Start"} style={StartQuizButtonStyleObj} />
                        </div>
                    </div> :
                    "Loading..."
            }

            <div className="quiz-id-right-container">
                This is the right container.
            </div>
        </div>
    )
}

export default SelectedQuiz
