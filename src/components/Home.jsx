import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer'



const Home = () => {
    const {ref, inView } = useInView(false)


  return (
    <div name='home' className='flex items-center w-full min-h-screen bg-[#0f161a]'>
        
        {/* Container */}
        <div className={`${inView ? 'animate-fadeIn max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' 
        : 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'}`}>
            <p className='text-2xl text-[#64FFDA]'></p>

            <h1 className='pt-6 text-5xl sm:text-8xl font-bold text-[#EDEAEA]'>HI, I'M <span className='text-green-400 '>Allen.</span></h1>
            <h2 className='text-2xl sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 animate-text'>DEVELOPER <span className='text-white'>| </span>STORYTELLER <span className='text-white'>| </span>ARTIST</h2>
            <p className='pt-9 text-[#EDEAEA] py-4 max-w-[700px] font-sans'>
            I am a passionate AI creator who specializes in using AI technology to bring ideas to life. My background is in mobile and web development, 
            but my passion lies in leveraging AI tools to create art, film, video games, and interactive stories.
            </p>
            <div className='pt-6'>
                {/* <button className='text-[#EDEAEA] shadow-md shadow-[#040c16] group border-2 px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-[#64FFDA] '
                > AI CREATIONS
                    <span className='group hover:rotate-90 duration-300 '>
                    <Link to="work" smooth={true} duration={500}>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </Link>
                    </span>
                </button> */}
                <button className="text-[#EDEAEA] shadow-md shadow-[#040c16] flex items-center p-0.5 overflow-hidden text-md font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                        <span className="hover:text-white px-5 py-2.5 transition-all ease-in 
                        duration-75 bg-[#1B2739] rounded-md group-hover:bg-opacity-0 ">
                             <Link to="work" smooth={true} duration={500}>
                                VIEW MY WORK
                            </Link>
                        </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home