import React from 'react'
import NetflixImg from '../assets/netflix_build.png'
import Rose from '../assets/rose.png'
import Forever from '../assets/forever.png'
import Ghoul from '../assets/ghoul.png'
import Harry from '../assets/Harry.png'
import Henry from '../assets/Henry.png'
import Moment from '../assets/ballerina.png'
import Clue from '../assets/Clue.png'
import Escape from '../assets/escape.png'
import Mouth from '../assets/mouth.png'
import Rain from '../assets/rain.png'




import { useInView } from 'react-intersection-observer'
import {AiOutlineTwitter} from 'react-icons/ai'






const Work = () => {
const {ref, inView } = useInView(false)

return (
    <div name='work' className='w-full min-h-screen flex justify-center items-center text-[#EDEAEA] bg-[#0f161a] px-8 md:px-12'>
        <div ref={ref}>
        <div className='max-w-[1000px] mx-auto p-4 w-full h-full '>
            <div className='sm:text-right pb-8 flex sm:justify-center'>
                <p className='text-3xl text font-bold inline border-b-4 text-[#EDEAEA] border-green-400'>
                    SELECTED WORK
                </p>
            </div>

            {/* Container */}
            <div className={`${inView ? 'animate-fadeIn grid sm:grid-cols-2 gap-4 justify-center' 
            : 'grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center'}`}>
  

<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Rose} className="w-full h-full" alt="Rose" />
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-half overflow-hidden hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] via-[#1bd7bb] to-[#08b3e5] opacity-0">

    <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Growth.</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>A frame-by-frame animation using only Adobe Generative Fill</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1696686894828986832'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
    </div>
</div>


<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Ghoul} className="w-full h-full" alt="Ghould" />
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-half overflow-hidden hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] via-[#1bd7bb] to-[#08b3e5] opacity-0">

    <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Ghoul City</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>A side-scrolling video game made entirely with GPT4 and Midjourney.</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1655604624747909123'>
            <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
    </div>
</div>



<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Forever} className="w-full h-full" alt="Forever" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Forever Love</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>A frame-by-frame animation using only Midjourney variations</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1673684058847444993'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>


<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Harry} className="w-full h-full" alt="Harry" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Hogwarts High</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>A mock 1980's sitcom of Harry Potter made with Midjourney, D-ID, and MusicLM</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1667912704734945280'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>


<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Henry} className="w-full h-full" alt="Henry" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Metal Henry</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>A fictional robot rock band music video created with Runway and MusicLM</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1666882805412790281'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>


<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Moment} className="w-full h-full" alt="Moment" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Make a Moment.</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>An inspirational video created with Midjourney, runway, and voiced by me.</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1687513151531601932'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>




<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Clue} className="w-full h-full" alt="Moment" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Without a Clue</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>A murder mystery trailer created with @ProperPrompter. Created with Midjourney and Pika Labs</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1682435601037926411'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>



<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Escape} className="w-full h-full" alt="Escape" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Escape</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>An AI video competition submission. Escape was created with Midjourney, Pika Labs, MusicLM, and Adobe</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1679997124467933185'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Watch Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>



<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Mouth} className="w-full h-full" alt="Mouth" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Anxious</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>An AI art piece created with Midjourney and post-production editing</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>

        </div>
    </div>
    </div>
  </div>
</div>




<div className="relative group container overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-black">
  <img src={Rain} className="w-full h-full" alt="Rain" />
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden 
  hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-r from-[#2af598] 
  via-[#1bd7bb] to-[#08b3e5] opacity-0">

  <div className='p-3'>
    <h1 className='pl-2 text-1xl font-semibold text-gray-800 items-center'>Selected Work</h1>
    <h1 className='pl-2 text-2xl font-semibold text-white items-center'>Ice Scream</h1>
    <p className='pl-2 mt-2 text-[#0f161a] text-[85%]'>An AI assisted short comic. Created with Midjourney and post-production editing</p>
    
    <div className='absolute bottom-0 right-0 p-2 mr-4'>
        <div></div>
        <div className='flex'>
        <a href='https://twitter.com/Mr_AllenT/status/1644339347456491522'>
        <div className='flex justify-center hover:text-gray-800'> <AiOutlineTwitter className='text-3xl pr-1'/> Read Now</div>
        </a>
        </div>
    </div>
    </div>
  </div>
</div>



            </div>

        </div>
        </div>
    </div>
  )
}

export default Work