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