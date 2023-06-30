import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import avatar from '../assets/avatar.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className='flex flex-row justify-between items-center mt-[3vh] mx-5 md:mx-[10vw]'>
                <img className='min-w-[40px] min-h-[40px] w-[60px] md:w-[80px]' src={avatar} alt="avatar" />

                <ul className='md:flex flex-row justify-center items-center hidden gap-12'>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Works</li>
                    <li className='cursor-pointer'>Skills</li>
                    <li className='cursor-pointer'>Contact Me</li>
                </ul>

                <div className='cursor-pointer block md:hidden' onClick={handleNav}>
                    {isOpen ? <HiMenu size={30} /> : <HiX size={30} />}
                </div>

                <div className={`fixed overflow-x-hidden left-0 right-0 top-0 w-[14rem] h-full border-r border-r-gray-900 bg-[#000300] transform transition-all duration-500 z-30
                ${isOpen ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
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