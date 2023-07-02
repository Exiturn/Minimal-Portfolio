import React, { useContext } from 'react'
import { gsap } from 'gsap';
import './mouse.css'

import { HoverContext } from '../../utils/HoverContext';

const Mouse = () => {
    const { isHovered, cursorPosition } = React.useContext(HoverContext);
    const { x, y } = cursorPosition;

    const cursorStyle = {
        pointerEvents: 'none',
        position: 'fixed',
        padding: '0.3rem',
        backgroundColor: '#fff',
        borderRadius: '50%',
        mixBlendMode: 'difference',
        transitionDuration: '5s',
        transitionProperty: 'scale',
        transform: `scale(${isHovered ? 10 : 1})`,
    }

    const updateCursor = () => {
        gsap.to('.cursor', {
            x: x - 5,
            y: y - 100,
            duration: 0.15,
        })
    }

    updateCursor();
    return (
        <div className={`hidden md:block cursor`} style={cursorStyle}></div>
    )
}

export default Mouse