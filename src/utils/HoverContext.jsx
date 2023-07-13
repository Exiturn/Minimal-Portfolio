import React, { createContext, useEffect, useState } from 'react';

const HoverContext = createContext();

const HoverContextProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleLeave = () => {
        setIsHovered(!isHovered);
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setCursorPosition({ x: clientX, y: clientY });
    };

    const handleClick = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        console.log('isHovered is', isHovered);
    }, [isHovered]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
        <HoverContext.Provider onMouseMove={handleMouseMove} value={{ isHovered, handleHover, handleLeave, cursorPosition, handleClick }}>
            <div onMouseMove={handleMouseMove}>
                {children}
            </div>
        </HoverContext.Provider>
    );
};

export { HoverContextProvider, HoverContext };