export interface initialQuesInterface {
    'ques': string | undefined,
    'options': string[] | undefined,
    'correctAnswer': string | undefined,
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
    | { type: 'ACTIVE', payload: APIQuesInterface | undefined }
    | { type: 'FINISHED' }
    | { type: 'RESET' }

export interface QuestionsPropInterface {
    currQues: initialQuesInterface;
}