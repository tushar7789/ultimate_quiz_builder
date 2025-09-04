import React from 'react'
import './styles.css'

const Button = ({ text, onClick }: { text: string | null, onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div className='btn-container' onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;
