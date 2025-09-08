import { Dispatch, SetStateAction } from "react"

export interface initialQuesInterface {
    'ques': string | undefined,
    'options': string[] | undefined,
    'correctAnswer': string | undefined,
    'status': string,
    'currIndex': number,
    'locked': boolean | undefined
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
    | { type: 'LOCKED' }
    | { type: 'UNLOCKED' }
    | { type: 'FINISHED' }
    | { type: 'RESET' }

export interface QuestionsPropInterface {
    'currQues': initialQuesInterface,
    'dispatch': React.Dispatch<Action>
}

export interface ProgressBarPropInterface {
    'currQues': initialQuesInterface,
    'questions': APIQuesInterface[] | undefined
}

export interface FooterPropInterface {
    'dispatch': React.Dispatch<Action>,
    'payload': APIQuesInterface | undefined,
    'index': number | undefined,
    'totalLength': number | undefined
}

export interface RegularOptionInterface {
    'text': string | undefined,
    'index': number | undefined
}

export interface IrregularOptionInterface {
    'text': string | undefined,
    'pos': boolean | undefined
}

export interface ButtonInterface {
    'text'?: string | undefined,
    'onClick'?: React.MouseEventHandler<HTMLDivElement> | undefined,
    'style'?: ButtonStyleInterface | any
}

export interface ButtonStyleInterface {
    'color'?: string,
    'width'?: string,
    'height'?: string,
    'bgColor'?: string,
    'border'?: string,
    'borderRadius'?: string,
    'paddingLeft'?: string,
    'paddingRight'?: string,
    'paddingTop'?: string,
    'paddingBottom'?: string,
    'cursor'?: string,
    'fontSize'?: string
}

export interface NavbarContextValues {
    currPage: string | undefined,
    setCurrPage: Dispatch<SetStateAction<string>> | undefined
}