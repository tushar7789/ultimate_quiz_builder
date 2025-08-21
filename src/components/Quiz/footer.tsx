import React from 'react'
import './styles.css'
import { FooterPropInterface } from '@/interfaces/interfaces';
import { Button } from '@mui/material';
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
        <div className="btn-container">
            <Button variant="contained" >Time Left : 02:32</Button>
            <Button variant="contained" onClick={handleNextClick}>
                {
                    index !== undefined ?
                        index + 1 === totalLength ?
                            "Finish" :
                            "Next" :
                        null
                }
            </Button>
        </div>
    )
}

export default Footer;
