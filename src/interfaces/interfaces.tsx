export default interface initialQuesInterface {
    'ques': string,
    'options': string[],
    'correctAnswer': string
}

export type Action =
    | { 'type': 'LOADING' }
    | { 'type': 'READY' }
    | { 'type': 'ACTIVE' }
    | { 'type': 'FINISHED' }
    | { 'type': 'RESET' }