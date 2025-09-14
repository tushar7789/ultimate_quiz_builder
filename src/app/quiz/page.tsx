'use client'

import React, { useEffect } from 'react'
import './styles.css'

import { SetPage } from '@/contexts/NavbarContextProvider';
import QuizListItem from '@/components/QuizListItem/quizlistitem';
import QuizSearch from '@/components/QuizListItem/quizsearch';


const Quiz = () => {

    SetPage('Quiz');


    return (
        <div className='quiz-container'>
            <div className='quiz-top-container'>
                <QuizSearch />
            </div>
            <div className='quiz-bottom-container'>
                <p style={{ fontSize: "15px", marginBottom: "10px", fontWeight: "550" }}>Quiz List</p>
                <QuizListItem />
            </div>
        </div>
    )
}

export default Quiz;
