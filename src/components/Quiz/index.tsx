'use client'
import React, { useEffect, useState } from 'react'

import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import currQuesReducer from '@/reducers/currQuesReducer';
import Questions from './questions';
import ProgressBar from './progressBar';
import Footer from './footer';
import Ready from './ready';
import Finished from './finished';

import { API } from '@/config';
import './styles.css';
import { APIQuesInterface } from '@/interfaces/interfaces';
import { questions } from '@/fakeAPI_data';

const Quiz = () => {

    const { currQues, dispatch } = currQuesReducer();

    useEffect(() => {
        dispatch({ type: 'READY' });
    }, []);

    return (
        <div className="main-quiz-container">
            {
                currQues['status'] === 'LOADING' &&
                <CircularProgress />
            }
            {
                currQues['status'] === 'READY' &&
                <Ready questions={questions} dispatch={dispatch} currQues={currQues} />
            }
            {
                currQues['status'] === 'ACTIVE' &&
                <>
                    <ProgressBar currQuesIndex={currQues['currIndex']} quesLength={questions.length} />
                    <Questions currQues={currQues} dispatch={dispatch} />
                    <Footer
                        dispatch={dispatch}
                        payload={questions?.at(currQues['currIndex'] + 1)}
                        index={currQues['currIndex']}
                        totalLength={questions?.length}
                    />
                </>
            }
            {
                currQues['status'] === 'FINISHED' &&
                <Finished />
            }
        </div>
    )
}

export default Quiz;
