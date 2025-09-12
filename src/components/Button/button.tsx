import React from 'react'
import './styles.css'
import { ButtonInterface, ButtonStyleInterface } from '@/interfaces/interfaces'
// }

const Button: React.FC<ButtonInterface> = ({
    text,
    onClick,
    style: {
        boxSizing = "border-box",
        color = "black",
        width = "inherit",
        height = "50px",
        bgColor = "none",
        border = "1px solid red",
        borderRadius = "5px",
        paddingBottom = "0px",
        paddingTop = "0px",
        paddingLeft = "20px",
        paddingRight = "20px",
        cursor = "pointer",
        fontSize = "20px"
    } = {}
}) => {

    const styleObj = {
        boxSizing: boxSizing,
        color: color,
        width: width,
        height: height,
        backgroundColor: bgColor,
        border: border,
        borderRadius: borderRadius,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        cursor: cursor,
        fontSize: fontSize
    }

    return (
        <div className="btn-container" style={styleObj} onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;
