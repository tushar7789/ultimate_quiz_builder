import React from 'react'

import { quizList } from '@/fakeAPI_data';
import Button from '../Button/button';
import { LoginStyleObj } from '../LandingPage/styleObjects';

const tags: any = [];

const getTags = () => {
    quizList.map(item => {
        if (!tags.includes(item["domain"]))
            tags.push(item["domain"]);
    });
}

const QuizTags = () => {

    getTags();
    console.log("tags", tags);

    return (
        <div className='quiz-tag-container'>
            {
                tags.map((tag: any) => {
                    return (
                        <span style={{
                            marginRight: "15px",
                        }}
                            key={tag}
                        >
                            <Button text={tag} style={LoginStyleObj} />
                        </span>
                    )
                })
            }
        </div>
    )
}

export default QuizTags;
