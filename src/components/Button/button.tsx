import React from 'react'
import './styles.css'
import { ButtonInterface } from '@/interfaces/interfaces'

const Button: React.FC<ButtonInterface> = ({
    text,
    onClick,
    style: {
        color = "black",
        width = "inherit",
        height = "50px",
        bgColor = "#327cc7",
        border = "1px solid red",
        borderRadius = "5px",
        paddingBottom = "0px",
        paddingTop = "0px",
        paddingLeft = "20px",
        paddingRight = "20px",
        cursor = "pointer"
    }
}) => {

    const styleObj = {
        color: color,
        width: width,
        height: height,
        bgColor: bgColor,
        border: border,
        borderRadius: borderRadius,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        cursor: cursor
    }

    return (
        <div style={styleObj} onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;
