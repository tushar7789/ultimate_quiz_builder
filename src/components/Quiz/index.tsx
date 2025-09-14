'use client'
import React, { useEffect, useState } from 'react'

import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import currQuesReducer from '@/reducers/currQuesReducer';
import Questions from './questions';
import ProgressBar from './progressBar';
import Footer from './footer';
import Button from '../Button/button';
import { API } from '@/config';
import './styles.css';
import { APIQuesInterface } from '@/interfaces/interfaces';
import { questions } from '@/fakeAPI_data';

const Quiz = () => {

    const [ques, setQues] = useState<APIQuesInterface[]>(questions);
    const { currQues, dispatch } = currQuesReducer();

    useEffect(() => {
        const getQuestions = async () => {
            const data = await fetch(API);
            const json = await data.json();
            console.log('logging qes: ', json.results);
            setQues(json.results);
        }

        // getQuestions();
        // dispatch({ type: 'READY' });

        // setQuestions(questions);
        dispatch({ type: 'ACTIVE', payload: questions?.at(currQues['currIndex'] + 1) });
    }, []);

    const handleClick = () => {
        dispatch({ type: 'ACTIVE', payload: questions?.at(currQues['currIndex'] + 1) });
    }

    return (
        <div className="main-quiz-container">
            {
                currQues['status'] === 'LOADING' &&
                <CircularProgress />
            }
            {
                currQues['status'] === 'READY' &&
                <Button text={"Start Quiz"} onClick={handleClick} />
            }
            {
                currQues['status'] === 'ACTIVE' &&
                <>
                    <ProgressBar currQues={currQues} questions={questions} />
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
                <div>You have successfully Finished the Quiz!!</div>
            }
        </div>
    )
}

export default Quiz;
