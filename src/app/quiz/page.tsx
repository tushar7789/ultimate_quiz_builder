'use client'

import React, { useEffect } from 'react'
import './styles.css'

import { SetPage } from '@/contexts/NavbarContextProvider';
import QuizListItem from '@/components/QuizListItem/quizlistitem';

const Quiz = () => {

    SetPage('Quiz');

    return (
        <div className='quiz-container'>
            <div className='quiz-tag-container'>
                Tags
            </div>
            <div className='quiz-list-container'>
                <QuizListItem />
            </div>
        </div>
    )
}

export default Quiz;
