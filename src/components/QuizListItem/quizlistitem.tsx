import React from 'react'
import './styles.css'

import { quizList } from '@/config';

const QuizListItem = () => {
    return (
        <>
            {
                quizList.map((item: any) => {
                    return (
                        <p className='quiz-listitem' key={item['domain']}>
                            <span id='quiz-item-name'>{item['name']}</span>
                            <span id='quiz-item-domain'>{item['domain']}</span>
                            <span id='quiz-item-total_questions'>{item['total_questions']}</span>
                            <span id='quiz-item-right-arrow'>{">"}</span>
                        </p>
                    )
                })
            }
        </>
    );
}

export default QuizListItem;
