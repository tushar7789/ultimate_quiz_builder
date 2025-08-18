'use client'

import { Grid, Button } from '@mui/material';
import React from 'react'

import useFetchQuestions from '@/hooks/useFetchQuestions';
import currQuesReducer from '@/reducers/currQuesReducer';

const Quiz = () => {

    const { questions, setQuestions } = useFetchQuestions();
    const { currQues, dispatch } = currQuesReducer();

    console.log("questions: ", questions);

    const handleClick = () => {
        dispatch({ 'type': 'LOADING' });
    }

    console.log(" currques: ", currQues);

    return (
        <Grid
            container
            size={6}
            style={{
                border: "1px solid yellow",
                height: "inherit"
            }}
            alignContent={'center'}
            justifyContent={'center'}
            direction={'column'}
        >
            <Button variant="contained" onClick={handleClick}>Get Ques</Button>
        </Grid>
    )
}

export default Quiz;
