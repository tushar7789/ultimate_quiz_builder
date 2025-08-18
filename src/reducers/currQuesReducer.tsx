import React from 'react'
import { useReducer } from 'react';
import initialQuesInterface, { Action } from '@/interfaces/interfaces';
import { initialQues } from '@/config';

const currQuesReducer = () => {

    const reducer = (state: initialQuesInterface, action: Action) => {
        switch (action.type) {
            case 'LOADING':
                return {
                    ...state,
                    ques: 'radom ques'
                }

                return state;
        }
        return initialQues;
    }

    const [currQues, dispatch] = useReducer(reducer, initialQues);

    return { currQues, dispatch };
}

export default currQuesReducer;
