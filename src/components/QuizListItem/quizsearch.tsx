import React from 'react'

import { quizList } from '@/fakeAPI_data';

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
                {
                    categories.map((cat: any) => {
                        return (
                            <option value={cat} key={cat} className='quiz-search-select-op'>{cat}</option>
                        )
                    })
                }
            </select>
        </>
    )
}

export default QuizSearch;
