import React from 'react'
import './styles.css'

import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div className="btn-container">
            <Button variant="contained" >Time Left : 02:32</Button>
            <Button variant="contained" >Next</Button>
        </div>
    )
}

export default Footer;
