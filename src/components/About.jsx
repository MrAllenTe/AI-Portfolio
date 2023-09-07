import React from 'react'
import Headshot from '../assets/headshot.png'
import {AiOutlineCheck} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'



const About = () => {
const {ref, inView } = useInView()


  return (
    <div 
    name='about' 
    className='w-full min-h-screen flex justify-center items-center bg-[#0f161a] text-[#EDEAEA]'>
        <div className='flex flex-col px-8 md:px-12 justify-center items-center w-full h-full'>
            <div ref={ref}>
                <div className='sm:text-right pb-8 pl-4 items flex sm:justify-center'>
                    <p className='text-3xl font-bold inline border-b-4 border-green-400'>ABOUT ME
                    </p>
                </div>

            <div className={`${inView ? 'animate-fadeIn max-w-[1000px] w-full grid sm:grid-cols-2 gap-8' 
            : 'max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'}`}>
                <div className=''>
                    <img 
                    src={Headshot} 
                    alt='headshot'
                    className='rounded-lg shadow-lg shadow-black opacity-40 
                    hover:opacity-100 ease-out duration-500'/>
                </div>

                <div>
                <p>I'm an AI storyteller, full stack developer, and artist specializing in using AI technology and code to bring ideas to life. 
                    My background is in iOS and React development, but my passion lies in leveraging tools like 
                 <span className='text-green-400'> Midjourney, Adobe, Stable Diffusion, Runway, GPT4, Claude, and Pika Labs</span> to create digital art, films, video games, and interactive stories.</p>
                 <div className='py-2'></div>
                <p className='pt-2'> I believe AI holds amazing potential for creativity. My work explores new AI capabilities 
                and pushes boundaries to make something novel. I approach each project with wonder and curiosity. </p>
                <ul className='grid grid-cols-2 p-2 mt-2'>
                    <li className='flex items-center'><AiOutlineCheck className='text-green-400'/> Midjourney</li>
                    <li className='flex items-center'><AiOutlineCheck className='text-green-400'/> Adobe Suite</li>
                    <li className='flex items-center'><AiOutlineCheck className='text-green-400'/> GPT</li>
                    <li className='flex items-center'><AiOutlineCheck className='text-green-400'/> Runway AI</li>
                    <li className='flex items-center'><AiOutlineCheck className='text-green-400'/> Pika Labs</li>
                    <li className='flex items-center'><AiOutlineCheck className='text-green-400'/> Stable Diffusion</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About