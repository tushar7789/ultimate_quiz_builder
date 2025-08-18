import React, { useState, useEffect } from 'react'
import { API } from '@/config';

const useFetchQuestions = () => {
    const [questions, setQuestions] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const getQuestions = async () => {
            const data = await fetch(API, { 'signal': controller.signal });
            const json = await data.json();
            // console.log("lleelle: ", json);
            setQuestions(json.results);
        }

        getQuestions();

        return () => {
            controller.abort();
        }
    }, []);

    return { questions, setQuestions };
}

export default useFetchQuestions;
