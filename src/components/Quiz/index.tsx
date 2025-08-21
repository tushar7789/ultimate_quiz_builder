'use client'

import { Grid, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect } from 'react'
import { API } from '@/config';
import currQuesReducer from '@/reducers/currQuesReducer';

const Quiz = () => {

    const { currQues, dispatch } = currQuesReducer();

    useEffect(() => {
        const controller = new AbortController();
        const getQuestions = async () => {
            const data = await fetch(API, { 'signal': controller.signal });
            const json = await data.json();
            console.log("logging : ", json.results);
            let q = localStorage.getItem('quizQues');
            if (q === null) {
                localStorage.setItem('quizQues', JSON.stringify(json.results));
            }
        }

        getQuestions();
        dispatch({ type: 'READY' });

        return () => {
            controller.abort();
            localStorage.clear();
        }
    }, []);

    const handleClick = () => {
        let q: any = localStorage.getItem('quizQues');
        dispatch({ type: 'ACTIVE', payload: JSON.parse(q).at(currQues['currIndex'] + 1) });
    }

    return (
        <Grid
            container
            size={6}
            style={{
                // border: "1px solid yellow",
                height: "inherit"
            }}
            alignContent={'center'}
            justifyContent={'center'}
            direction={'column'}
        >
            {
                currQues['status'] === 'LOADING' &&
                <CircularProgress />
            }
            {
                currQues['status'] === 'READY' &&
                <Button variant="contained" onClick={handleClick}>Start Quiz</Button>
            }
            {
                currQues['status'] === 'ACTIVE' &&
                <p>Welcome to {currQues['ques']}</p>
            }
        </Grid>
    )
}

export default Quiz;
