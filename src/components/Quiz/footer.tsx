import React from 'react'
import './styles.css'
import { FooterPropInterface } from '@/interfaces/interfaces';
import Button from '../Button/button';
import { DEFAULT_SANS_SERIF_FONT } from 'next/dist/shared/lib/constants';

const Footer: React.FC<FooterPropInterface> = ({ dispatch, payload, index, totalLength }) => {

    const handleNextClick = () => {
        if (index !== undefined) {
            if (index + 1 === totalLength)
                dispatch({ type: 'FINISHED' });
            else {
                dispatch({ type: 'UNLOCKED' });
                dispatch({ type: 'ACTIVE', payload: payload });
            }
        }
    }

    return (
        <div className="buttons-container">
            <Button text={"Time Left : 02:32"} onClick={() => { }} />
            <Button text=
                {
                    index !== undefined ?
                        index + 1 === totalLength ?
                            "Finish" :
                            "Next" :
                        null
                } onClick={handleNextClick} />
        </div>
    )
}

export default Footer;
