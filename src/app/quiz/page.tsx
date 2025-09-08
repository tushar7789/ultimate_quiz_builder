'use client'

import React, { useEffect } from 'react'

import { SetPage } from '@/contexts/NavbarContextProvider';

const Quiz = () => {

    SetPage('Quiz');

    return (
        <div>
            Quiz
        </div>
    )
}

export default Quiz;
