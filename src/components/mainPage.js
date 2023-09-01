import { useState, useEffect } from 'react';
import React from 'react';
import instagram from '../assets/instagram.png';

export default function MainPage() {
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after a short delay (e.g., 2 seconds)
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    const socials = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/profile.php?viewas=100000686899395&id=100070604270313",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/brainybananas/",
        }, 
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/company/brainybananas/",
        },
    ]
    


    return (
        <div  className={`text-center ${animate ? 'opacity-0' : 'opacity-100'} duration-1000 `}>         
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Brainy Bananas</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">BrainyBananas is dedicated to nurturing young minds by instilling essential social and life skills to help them confidently and competently navigate the complexities of the world ahead.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    {socials.map((social) => (
                        <a href={social.link} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            {social.name==="Facebook" ? <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>:null}
                            {social.name==="Instagram" ? <img src={instagram} className='h-6 w-6 mr-2' />:null}
                            {social.name==="LinkedIn" ? <svg class="w-6 h-6 text-gray-800 mr-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                <path d="M3 5.012H0V15h3V5.012Z"/>
                            </svg>
                                :null}
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
