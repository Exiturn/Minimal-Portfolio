import React, { useContext, useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import avatar from '../../assets/avatar.svg';
import './Navbar.css';
import { HoverContext } from '../../utils/HoverContext';

const Navbar = () => {
    const { isHovered, handleHover, handleLeave, cursorPosition } = useContext(HoverContext);

    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        console.log('handleNav called')
        console.log('isOpen is', isOpen)
        setIsOpen(!isOpen);
    }

    const handleMouseEnter = () => {
        handleHover();
        console.log('handleMouseEnter called');
        console.log('isHovered is', isHovered);
    }

    const handleMouseLeave = () => {
        handleLeave();
        console.log('handleMouseLeave called');
        console.log('isHovered is', isHovered);
    }

    return (
        <>
            <div className='flex flex-row justify-between items-center pt-[3vh] mx-5 md:mx-[10vw]'>
                <img className='min-w-[40px] min-h-[40px] w-[60px] md:w-[80px]' src={avatar} alt="avatar" />

                <ul className='md:flex flex-row justify-center items-center hidden gap-12'>
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='link transition duration-[0.3s] ease-in-out cursor-pointer'>About</li>
                    <li className='link transition duration-[0.3s] ease-in-out cursor-pointer'>Works</li>
                    <li className='link transition duration-[0.3s] ease-in-out cursor-pointer'>Skills</li>
                    <li className='link transition duration-[0.3s] ease-in-out cursor-pointer'>Contact Me</li>
                </ul>

                <div className='cursor-pointer block md:hidden' onClick={handleNav}>
                    {!isOpen ? <HiMenu size={30} /> : <HiX size={30} />}
                </div>

                <div className={`fixed overflow-x-hidden left-0 right-0 top-0 w-[14rem] h-full border-r border-r-gray-900 bg-[#000300] transform transition-all duration-500 z-30
                ${!isOpen ? 'translate-x-[-100%]' : 'translate-x-0 md:translate-x-[-100%]'}`}>
                    <img className='min-w-[40px] min-h-[40px] w-[60px] md:w-[80px] place-self-start ml-10 my-10' src={avatar} alt="avatar" />
                    <ul className='flex flex-col justify-center items-start gap-[4vh] ml-10'>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Works</li>
                        <li className='cursor-pointer'>Skills</li>
                        <li className='cursor-pointer'>Contact Me</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar