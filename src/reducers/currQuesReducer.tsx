import React from 'react'
import { useReducer } from 'react';
import { initialQuesInterface, Action } from '@/interfaces/interfaces';
import { initialQues } from '@/config';
import { MAX } from '@/config';

const currQuesReducer = () => {

    const reducer = (state: initialQuesInterface, action: Action) => {
        switch (action.type) {
            case 'LOADING':
                return {
                    ...state,
                    status: 'LOADING',
                }
            case 'READY':
                return {
                    ...state,
                    status: 'READY'
                }
            case 'ACTIVE':
                let randomInt = Math.floor(Math.random() * MAX);
                let a: any = action.payload?.incorrect_answers.slice();
                a.splice(randomInt, 0, action.payload?.correct_answer);
                console.log('from reducer :', action.payload?.incorrect_answers, '---', a);
                return {
                    ...state,
                    ques: action.payload?.question,
                    status: 'ACTIVE',
                    correctAnswer: action.payload?.correct_answer,
                    currIndex: state.currIndex + 1,
                    options: a
                }
            default:
                return state;
        }
    }

    const [currQues, dispatch] = useReducer(reducer, initialQues);

    return { currQues, dispatch };
}

export default currQuesReducer;
