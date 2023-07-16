import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.svg'

import { HoverContext } from '../../utils/HoverContext';


const ProjectNav = () => {
    const { handleHover, handleLeave } = useContext(HoverContext);

    const handleMouseEnter = () => {
        handleHover();
        console.log('handleMouseEnter called');
    }

    const handleMouseLeave = () => {
        handleLeave();
        console.log('handleMouseLeave called');
    }

    return (
        <div className='flex flex-col justify-center items-start pt-[3vh] mx-5 md:mx-[10vw]'>
            <img className='min-w-[40px] min-h-[40px] w-[60px] md:w-[80px] h-[60px] md:h-[60px]' src={avatar} alt="avatar" />
            <button className='mt-10 text-[1.5rem] underline decoration-[1.5px] underline-offset-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/">/ Home</Link>
            </button>
        </div>
    )
}

export default ProjectNav