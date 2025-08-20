import initialQuesInterface from "./interfaces/interfaces";

export const API = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';

export const initialQues: initialQuesInterface = {
    ques: '',
    options: [],
    correctAnswer: '',
    status: ''
}