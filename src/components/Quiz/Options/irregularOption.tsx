import React from 'react'
import '../styles.css'
import Right from '../../../../public/static-images/check.png';
import Wrong from '../../../../public/static-images/close.png';
import { IrregularOptionInterface } from '@/interfaces/interfaces';

const IrregularOption: React.FC<IrregularOptionInterface> = ({ text, pos }) => {
    return (
        <>
            <div className="option-res-text">
                {text}
            </div>
            <div className={pos ? "option-res-pos-tag" : "option-res-neg-tag"}>
                <img src={pos ? Right.src : Wrong.src} style={{ width: '20px', height: '20px' }} />
            </div>
        </>
    )
}

export default IrregularOption;
