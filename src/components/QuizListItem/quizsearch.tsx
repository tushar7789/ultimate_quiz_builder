import React from 'react'

import { quizList } from '@/fakeAPI_data';
import Button from '../Button/button';
import { LoginStyleObj } from '../LandingPage/styleObjects';

const categories: any = [];

const getCategory = () => {
    quizList.map(item => {
        if (!categories.includes(item["category"]))
            categories.push(item["category"]);
    });
}

const QuizSearch = () => {

    getCategory();
    console.log("categories", categories);

    return (
        <>
            <input type="text" id="quiz-search-input" />
            <select name="categories" id="quiz-search-select">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
            </select>
            {/* {
                categories.map((tag: any) => {
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
            } */}
        </>
    )
}

export default QuizSearch;
