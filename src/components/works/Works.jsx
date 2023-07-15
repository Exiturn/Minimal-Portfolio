import React, { useEffect, useRef, useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { HoverContext } from '../../utils/HoverContext';

const Works = () => {
    const { handleHover, handleLeave, handleClick } = useContext(HoverContext);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(slide === works.length - 1 ? 0 : slide + 1);
        }, 10000);

        return () => clearInterval(interval);
    });

    const works = [
        {
            title: 'GPT-3 Project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: '../src/assets/gpt3laptop.png',
        },
        {
            title: 'Hoobank',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: '../src/assets/hoolaptop.png',
        },
        {
            title: 'Insightify',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: '../src/assets/insightifylaptop.png',
        },
    ]

    const nextSlide = () => {
        setSlide(slide === works.length - 1 ? 0 : slide + 1);
        console.log('nextSlide called');
        handleClick();
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? works.length - 1 : slide - 1);
        console.log('prevSlide called');
        handleClick();
    }

    const manualSwitch = (index) => {
        setSlide(index);
        handleClick();
    }

    const handleMouseEnter = () => {
        handleHover();
        console.log('handleMouseEnter called');
    }

    const handleMouseLeave = () => {
        handleLeave();
        console.log('handleMouseLeave called');
    }

    return (
        <div id='Works' className='flex flex-col justify-start items-start px-5 md:px-[10vw] min-w-[100vw] md:min-h-[85vh] overflow-hidden relative mt-10'>
            <h1 className='text-[3rem] flex justify-center items-center'>Works</h1>
            <div className='w-full border-b-2 border-stone-500' />
            <p className='mt-3'>I always want to keep myself busy, meaning a project is always in the proverbial oven. Have a look at some of the websites and designs I’ve worked on recently:</p>

            <div className='carousel mt-10 w-full lg:w-[80%] md:overflow-x-auto flex flex-col justify-start items-start'>
                <div className='inner-carousel w-full flex flex-col md:flex-row justify-start items-center gap-y-6 md:gap-y-0 md:gap-x-6'>
                    {works.map((work, index) => (
                        <div className={`${slide === index ? 'flex flex-col justify-start items-start project w-full md:w-[80vw]' : 'md:hidden'} transition ease-in-out bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg z-0 px-4 pb-4 pt-2`} key={index}>
                            <div className='flex flex-row w-full justify-between'>
                                <h1 className='text-[2rem] md:text-[3rem] text-start'>{work.title}</h1>
                                <div className='hidden md:flex flex-row justify-center items-center mt-3 gap-x-16'>
                                    <FaArrowLeft className='cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={prevSlide} />
                                    <span className='flex bottom-[10rem] left-[50%] gap-2'>
                                        {works.map((work, index) => (
                                            <button className={`rounded-full ${index === slide ? 'bg-white' : 'bg-gray-500'} h-[0.5rem] w-[0.5rem]`} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => manualSwitch(index)}></button>
                                        ))}
                                    </span>
                                    <FaArrowRight className='cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={nextSlide} />
                                </div>
                            </div>

                            <div className='w-full border-b-2 border-stone-500 mt-2' />
                            <img className='my-4 w-[800px] lg:w-[35rem] 2xl:w-[45rem] lg:h-[25rem]' src={work.image} alt={work.title} />
                            <p>{work.description}</p>
                            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='mt-4 py-3 px-8 border-[1px]'>More Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works