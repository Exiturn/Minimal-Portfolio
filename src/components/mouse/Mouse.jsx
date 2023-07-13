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
                scale: 10.5,
                duration: 0.35,
            });
        } else {
            gsap.to('.cursor', {
                scale: 1,
                duration: 0.35,
            });
        }
    }, [isHovered])

    const cursorStyle = {
        pointerEvents: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        padding: '0.25rem',
        backgroundColor: '#fff',
        borderRadius: '50%',
        mixBlendMode: 'difference',
        zIndex: '9999',
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