'use client'

import React from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const SelectedQuiz = () => {
    const pathname = usePathname();
    const id = pathname.split('/').at(-1);


    return (
        <div>
            laila mai laila {id}
        </div>
    )
}

export default SelectedQuiz
