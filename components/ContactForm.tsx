import { FormEvent, useRef, useState } from 'react';
import * as EmailValidator from 'email-validator';
import { ContactFormData } from '../interfaces/interfaces';

interface InputRefType {
    value: string;
}

const ContactForm = (props: ContactFormData) => {
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [sendDisabled, setSendDisabled] = useState<boolean>(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const generateKey = () => {
        const utc = new Date().getTime();
        return window.btoa(utc.toString());
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const name = (nameRef.current as unknown as InputRefType).value;
        const email = (emailRef.current as unknown as InputRefType).value;
        const message = (messageRef.current as unknown as InputRefType).value;
        const key = generateKey();
        const payload = { name, email, message, key };

        // validation
        if (!EmailValidator.validate(email)) {
            setSuccessMessage('Please enter a valid email');
            return;
        }

        const apiUrl = '/api/contactForm';
        const postSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        setSendDisabled(true);
        const response = await fetch(apiUrl, postSettings);

        // success
        if (response.status === 200) {
            setSuccessMessage('Message sent');
            resetForm();
        } else {
            setSuccessMessage('There was a problem please try again later');
            setSendDisabled(false);
        }
    };

    const resetForm = () => {
        (nameRef.current as unknown as InputRefType).value = '';
        (emailRef.current as unknown as InputRefType).value = '';
        (messageRef.current as unknown as InputRefType).value = '';
    };

    return (
        <section id="contact">
            <div className="relative flex items-top justify-center bg-white sm:items-center pt-4 pb-8">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg md:flex md:flex-col md:justify-around">
                                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>
                                {props.address !== '' && (
                                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                            Acme Inc, Street, State, Postal Code
                                        </div>
                                    </div>
                                )}

                                {props.phone !== '' && (
                                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                            +44 1234567890
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">{props.email}</div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">
                                        Full Name
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        ref={nameRef}
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        ref={emailRef}
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="hidden">
                                        Number
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        ref={messageRef}
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <button
                                    disabled={sendDisabled}
                                    type="submit"
                                    className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 disabled:bg-gray-400 transition ease-in-out duration-300"
                                >
                                    {!sendDisabled ? 'Submit' : 'Sending...'}
                                </button>
                                <div className="h-6 mt-4 text-black flex justify-center">
                                    <p>{successMessage}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
