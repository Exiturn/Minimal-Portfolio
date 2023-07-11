import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';

import './Works.css'

const Works = () => {
    const works = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/200/300',
        },

    ]

    return (
        <div id='Works' className='flex flex-col justify-start items-start px-5 md:px-[10vw] min-w-[100vw] min-h-[100vh] md:min-h-[100vh] overflow-hidden'>
            <h1 className='text-[3rem] flex justify-center items-center'>Works</h1>
            <div className='w-full border-b-2 border-stone-500' />
            <p className='mt-3'>I always want to keep myself busy, meaning a project is always in the proverbial oven. Have a look at some of the websites and designs I’ve worked on recently:</p>

            <div className='carousel mt-10 w-full h-full'>
                <div className='inner-carousel flex flex-row justify-center items-center'>
                    {works.map((work, index) => (
                        <div className='project bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg z-0' key={index}>
                            <h1 className='text-[3rem]'>{work.title}</h1>

                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Works