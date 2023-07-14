import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    };

    return (
        <div id='Contact' className='flex flex-col justify-start items-start px-5 md:px-[10vw] min-w-[100vw] min-h-[120vh] md:min-h-[100vh] mt-[6rem]'>
            <h1 className='text-[3rem]'>Contact Me</h1>
            <div className='w-full border-b-2 border-stone-500' />
            <p className='mt-4'>Feel free to reach out if you’re looking for a developer, have a question about my projects or if you want to know more about me:</p>


        </div>
    )
}

export default Contact