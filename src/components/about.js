import Navbar from "./navbar"
import React, { useRef, useEffect} from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import Footer from "./footer"

export default function About() {
    const parallax = useRef(null)
    const url = (name, wrap = false) =>
      `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

    return (
    <div style={{ width: '100%', height: '100%',background: '#253237'}}>
    <Navbar />
      <Parallax pages={3} ref={parallax} style={{background: '#253237'}}>
        <ParallaxLayer offset={0} speed={1} className="parallax-layer">
            <section className="dark:bg-gray-900 flex items-center justify-center h-full">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-200 md:text-5xl lg:text-6xl dark:text-white">Our Story</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We firmly believe that learning should be enjoyable. All our courses incorporate engaging activities that captivate students’ imagination, making the journey to self-assurance an exciting adventure. By combining playfulness and learning, we ensure that every step is memorable and rewarding.</p>
                </div>
                </div>
            </section>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: 'yellowgreen'}} >
                <section class=" dark:bg-gray-900 flex items-center justify-center h-full">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
                        <div class="flex flex-col justify-center slide-in-courses-heading">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Why Choose Us?</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At our core, we are driven by a genuine commitment to our clients' success. Our unwavering dedication and heartfelt passion enable us to empower individuals with the essential skills required to thrive in the real world. We foster an environment of enjoyment and enthusiasm, ensuring that learning is both engaging and rewarding. Customer satisfaction lies at the heart of our priorities, valuing their needs above all else.</p>
                        </div>
                    </div>
                </section>

            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.8} style={{ backgroundColor: '#87BCDE'}} >
                <section class=" dark:bg-gray-900 flex items-center justify-center h-full">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
                        <div class="flex flex-col justify-center slide-in-courses-heading">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Mission</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Our motto is to genuinely, sincerely and passionately help our clients develop the necessary skills needed for the real world out there, and have fun while doing it. For us, customers come first; profits later.</p>
                        </div>
                    </div>
                </section>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                    backgroundImage: url('stars', true),
                    backgroundSize: 'cover',
                }}
                />
            <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>
        </Parallax>
        <div>
            <Footer />
        </div>
    </div>
  )
}
