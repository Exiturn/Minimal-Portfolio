import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const lines = [
        "I'm a front-end developer who's all about web aesthetics and interactivity",
        "I'm a front-end developer who's all about web aesthetics and interactivity. I like those a lot.",
        "I'm a front-end developer who's all about web aesthetics and interactivity. I like those a lot. I’m also a sucker for web animations albeit i’m still getting the hang of them.\n\nFeel free to look around."
    ]

    console.log(lines[0])

    return (
        <div className='flex flex-col justify-center items-start mt-[3vh] px-5 md:px-[10vw] w-[100vw] h-[80vh] overflow-hidden'>
            <h1 className='md:hidden block'>
                <TypeAnimation
                    style={{
                        fontSize: `3.15rem`,
                    }}
                    sequence={["Hi, I'm Bryan Magistrado."]}
                    speed={40}
                />
            </h1>
            <p className='mt-2 md:hidden block'>
                <TypeAnimation
                    style={{
                        whiteSpace: `pre-line`
                    }}
                    sequence={[1800, `${lines[0]}`, 500, `${lines[1]}`, 500, `${lines[2]}`]}
                    speed={80}
                />
            </p>

            <h1 className='hidden md:block'>
                <TypeAnimation
                    style={{
                        fontSize: `6rem`,
                    }}
                    sequence={["Hi, I'm Bryan Magistrado."]}
                    speed={40}
                />
            </h1>
            <p className='hidden md:block mt-5'>
                <TypeAnimation
                    style={{
                        fontSize: `1.5rem`,
                        whiteSpace: `pre-line`
                    }}
                    sequence={[1800, `${lines[0]}`, 500, `${lines[1]}`, 500, `${lines[2]}`]}
                    speed={80}
                />
            </p>
        </div>
    )
}

export default Hero