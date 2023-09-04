import TeamCard from "./teamCard";
import { useState, useEffect } from "react";


export default function Team(){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const contactSection = document.querySelector('.team-section');
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load in case the section is already visible
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div>
            <div class={`team-section py-8 lg:py-16 px-4 mx-auto max-w-screen-md ${isVisible ? 'slideup-main' : ''}`}>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Team</h1>
                <div class="inline-flex mt-6">
                    <TeamCard link="https://linkedin.com" university="MAJU" position="Assistant Professor" name="Asma Chang"  description="Asma Abdul Rahim Chang is the founder of BrainyBananas. She is an educationist and a trainer with a specialization in entrepreneurship and marketing. "/>
                    <TeamCard link="https://linkedin.com" university="IoBM" position="Assistant Professor" name="Muhammad Saeed Mujahid"  description="Dr. Saeed Mujahid is the co-founder of BrainyBananas. He holds a PhD degree in entrepreneurship and has more than 20 years of professional and teaching experience."/>
                </div>
            </div>
        </div>
    )
}