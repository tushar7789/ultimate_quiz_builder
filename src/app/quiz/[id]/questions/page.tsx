'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';

import Quiz from '@/components/Quiz';
import { questions } from '@/fakeAPI_data';
import { Paths } from '@/config';

const MainQuiz = () => {
    const pathname = usePathname();

    useEffect(() => {
        return () => {
            Paths.filter(path => path !== pathname);
        }
    }, [])

    return (
        <Quiz />
    );
}

export default MainQuiz;
