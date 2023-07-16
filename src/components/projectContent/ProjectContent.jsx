import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ProjectContent = ({data}) => {
    console.log('data is', data);
    return (
        <div className='pt-[3vh] mx-5 md:mx-[10vw]'>
            <h1 className='text-[3rem]'>Project Name</h1>
        </div>
    )
}

export default ProjectContent