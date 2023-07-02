import React, { createContext, useState } from 'react';

const HoverContext = createContext();

const HoverContextProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState();
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleHover = () => {
        setIsHovered(false);
    };

    const handleLeave = () => {
        setIsHovered(true);
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setCursorPosition({ x: clientX, y: clientY });
        // console.log('cursorPosition is', cursorPosition);
      };

    return (
        <HoverContext.Provider value={{ isHovered, handleHover, handleLeave, cursorPosition }}>
            <div onMouseMove={handleMouseMove}>
                {children}
            </div>
        </HoverContext.Provider>
    );
};

export { HoverContextProvider, HoverContext };