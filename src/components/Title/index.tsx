import React from 'react'
import TitleLogo from '../../../public/static-images/title_logo.svg';
import { Grid } from '@mui/material';

const Title = () => {
    return (
        <>
            <img
                src={TitleLogo.src}
                alt="react-logo"
                style={{
                    height: '50px',
                    width: '50px'
                }}
            />
            <p
                style={{
                    // border: '1px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px'
                }}
            >
                The React Quiz
            </p>
        </>
    )
}

export default Title;

