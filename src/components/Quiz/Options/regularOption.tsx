import React from 'react'
import '../styles.css'
import { optionTags } from '@/config';
import { RegularOptionInterface } from '@/interfaces/interfaces';

const RegularOption: React.FC<RegularOptionInterface> = ({ text, index }) => {
    return (
        <>
            <div className="option-tag">
                {index && optionTags[index]}
            </div>
            <div className="option-text">
                {text}
            </div>
        </>
    )
}

export default RegularOption;
