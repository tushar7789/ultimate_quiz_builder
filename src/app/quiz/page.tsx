'use client'

import React, { useEffect } from 'react'
import './styles.css'

import { SetPage } from '@/contexts/NavbarContextProvider';
import QuizListItem from '@/components/QuizListItem/quizlistitem';
import QuizTags from '@/components/QuizListItem/quiztags';


const Quiz = () => {

    SetPage('Quiz');


    return (
        <div className='quiz-container'>
            <div className='quiz-top-container'>
                <p style={{ fontSize: "15px", marginBottom: "10px" }}>Tags</p>
                <QuizTags />
            </div>
            <div className='quiz-bottom-container'>
                <p style={{ fontSize: "15px", marginBottom: "10px" }}>Quiz List</p>
                <QuizListItem />
            </div>
        </div>
    )
}

export default Quiz;
