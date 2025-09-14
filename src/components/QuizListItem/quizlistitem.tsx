import React, { useEffect } from 'react'
import './styles.css'
import Link from 'next/link';

import { quizList } from '@/fakeAPI_data';
import { Paths } from '@/config';


const QuizListItem = () => {

    useEffect(() => {
        quizList.map(item => {
            Paths.push(`/quiz/${item["id"]}`);
        });

        return () => {
            Paths.filter(path => {
                let a = path.split("/");

                return !(a.length === 3 && typeof a[2] === 'number');
            })
        }
    }, []);

    return (
        <>
            <p className='quiz-listitem sp'>
                <span id='quiz-item-name'>Name</span>
                <span id='quiz-item-domain'>Category</span>
            </p>
            <div className='quiz-list-container'>

                {
                    quizList.map((item: any) => {
                        return (
                            <Link
                                href={`/quiz/${item["id"]}`}
                                key={item['category']}
                                className='quiz-listitem'
                            >
                                <span id='quiz-item-name'>{item['name']}</span>
                                <span id='quiz-item-domain'>{item['category']}</span>
                            </Link>

                        )
                    })
                }
            </div>
        </>
    );
}

export default QuizListItem;
