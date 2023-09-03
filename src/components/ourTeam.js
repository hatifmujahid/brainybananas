import TeamCard from "./teamCard";

export default function Team(){
    return(
        <div>
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Team</h1>
                <div class="inline-flex mt-6">
                    <TeamCard name="Muhammad Saeed Mujahid" link="" description="Dr. Saeed Mujahid is the co-founder of BrainyBananas. He holds a PhD degree in entrepreneurship and has more than 20 years of professional and teaching experience. He also brings with him an exposure of operating several business ventures, and has remained a founder and CEO of a textile mill. After serving the industry for more than a decade, Dr. Saeed turned to teaching career to help the young minds learn the ropes of business. He is known for his friendly and student-centered teaching style, and has the ability to convey the most difficult concepts in the simplest of language that can easily be grasped by the students."/>
                    <TeamCard name="Asma Chang" link="" description="Asma Abdul Rahim Chang is the founder of BrainyBananas. She is an educationist and a trainer with a specialization in entrepreneurship and marketing. Prior to BrainyBananas, Asma has worked in different management roles; ranging from professional experience in marketing and human resources to being involved in the core team working behind the formation of a branding firm. Perhaps the biggest turning point in her career was when she switched to teaching and realized her knack for conducting animated and interactive classes that earned her a positive repute among her students. She is expected to graduate by December 2023."/>
                </div>
            </div>
            
        </div>
    )
}