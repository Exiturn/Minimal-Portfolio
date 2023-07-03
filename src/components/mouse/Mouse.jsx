import React, { useContext, useEffect } from 'react'
import { gsap } from 'gsap';
import './mouse.css'

import { HoverContext } from '../../utils/HoverContext';

const Mouse = () => {
    const { isHovered, cursorPosition } = React.useContext(HoverContext);
    const { x, y } = cursorPosition;

    useEffect(() => {
        if (isHovered) {
            gsap.to('.cursor', {
                scale: 9,
                duration: 0.5,
            });
        } else {
            gsap.to('.cursor', {
                scale: 1,
                duration: 0.5,
            });
        }
    }, [isHovered])

    const cursorStyle = {
        pointerEvents: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        padding: '0.3rem',
        backgroundColor: '#fff',
        borderRadius: '50%',
        mixBlendMode: 'difference',
    }

    const updateCursor = () => {
        gsap.to('.cursor', {
            x: x,
            y: y,
            duration: 0.15,
        })
    }

    updateCursor();
    return (
        <div className={`hidden md:block cursor`} style={cursorStyle}></div>
    )
}

export default Mouse