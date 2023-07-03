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
        const { pageX, pageY } = event;
        setCursorPosition({ x: pageX, y: pageY });
    };

    useEffect(() => {
        console.log('isHovered is', isHovered);
    }, [isHovered]);

    return (
        <HoverContext.Provider onMouseMove={handleMouseMove} value={{ isHovered, handleHover, handleLeave, cursorPosition }}>
            <div onMouseMove={handleMouseMove}>
                {children}
            </div>
        </HoverContext.Provider>
    );
};

export { HoverContextProvider, HoverContext };