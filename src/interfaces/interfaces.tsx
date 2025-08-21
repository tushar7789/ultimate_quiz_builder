export interface initialQuesInterface {
    'ques': string,
    'options': string[],
    'correctAnswer': string,
    'status': string,
    'currIndex': number
}

export interface APIQuesInterface {
    'question': string,
    'correct_answer': string,
    'incorrect_answers': string[],
    'difficulty': string,
    'category': string,
    'type': string
}

export type Action =
    | { type: 'LOADING' }
    | { type: 'READY' }
    | { type: 'ACTIVE', payload: APIQuesInterface }
    | { type: 'FINISHED' }
    | { type: 'RESET' }