import { initialQuesInterface } from "./interfaces/interfaces";

export const API = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';

export const initialQues: initialQuesInterface = {
    ques: '',
    options: [],
    correctAnswer: '',
    status: 'LOADING',
    currIndex: -1,
    locked: false
}

export const MAX = 3;

export const optionTags = ['A', 'B', 'C', 'D'];

export const quizList = [
    {
        name: 'School K.V. Sem 3',
        domain: 'Geopgrah',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    },
    {
        name: 'School K.V. Sem 3',
        domain: 'Geopgra',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    },
    {
        name: 'School K.V. Sem 3',
        domain: 'Geopgr',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    },
    {
        name: 'School K.V. Sem 3',
        domain: 'Geopg',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    },
    {
        name: 'School K.V. Sem 3',
        domain: 'Geop',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    },
    {
        name: 'School K.V. Sem 3',
        domain: 'Geo',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    },
    {
        name: 'School K.V. Sem 3',
        domain: 'Ge',
        total_questions: '20',
        totat_marks: '100',
        estimated_time: 'none'
    }
]