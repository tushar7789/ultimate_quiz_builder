'use client'
import React from 'react'

import Quiz from '@/components/Quiz/index';
import { SetPage } from '@/contexts/NavbarContextProvider';


const Statistics = () => {

    SetPage('Statistics');

    return (
        // <div>
        //     Statistics
        // </div>
        <Quiz />
    )
}

export default Statistics;
