import React from 'react'
import './styles.css'
import { FooterPropInterface } from '@/interfaces/interfaces';
import Button from '../Button/button';
import { TimerStyleObj, NextButtonStyleObj } from '../../styles/styleObjects';

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
            <Button text={"Time Left : 02:32"} onClick={() => { }} style={TimerStyleObj} />
            <Button
                text=
                {
                    index !== undefined ?
                        index + 1 === totalLength ?
                            "Finish" :
                            "Next" :
                        null
                }
                onClick={handleNextClick}
                style={NextButtonStyleObj}
            />
        </div>
    )
}

export default Footer;
