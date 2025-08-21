'use client'

import { Grid, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import React, { useEffect, useState } from 'react'
import currQuesReducer from '@/reducers/currQuesReducer';

import Questions from './questions';
import ProgressBar from './progressBar';
import Footer from './footer';

import { API } from '@/config';
import './styles.css';
import { APIQuesInterface } from '@/interfaces/interfaces';


const Quiz = () => {

    const [questions, setQuestions] = useState<APIQuesInterface[]>();
    const { currQues, dispatch } = currQuesReducer();

    useEffect(() => {
        const controller = new AbortController();
        const getQuestions = async () => {
            const data = await fetch(API, { 'signal': controller.signal });
            const json = await data.json();
            console.log('logging qes: ', json.results);
            setQuestions(json.results);
        }

        getQuestions();
        dispatch({ type: 'READY' });

        return () => {
            controller.abort();
        }
    }, []);

    const handleClick = () => {
        dispatch({ type: 'ACTIVE', payload: questions?.at(currQues['currIndex'] + 1) });
    }

    return (
        <Grid
            container
            size={10}
            style={{
                // border: "1px solid yellow",
                height: "inherit"
            }}
            alignItems={'start'}
            justifyContent={'space-around'}
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
                <>
                    <ProgressBar />
                    <Questions currQues={currQues} />
                    <Footer />
                </>
            }
        </Grid>
    )
}

export default Quiz;
