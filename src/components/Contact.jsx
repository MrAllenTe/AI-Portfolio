import React from 'react'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'



const Contact = () => {
  const {ref, inView } = useInView(false)


  return (
    <div name='contact' className='w-full bg-[#0f161a] flex justify-center items-center pt-10'>

<div className="px-4 md:px-12 pb-2 pt-10" ref={ref}>

<div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-green-400 text-[#EDEAEA]'>LET'S CONNECT</p>
            </div>

      <div className={`${inView ? 'animate-fadeIn text-white rounded-lg shadow-sm pt-5 pb-1 md:py-4 px-4 md:px-6 ' : 'text-white rounded-lg shadow-sm shadow-[#64FFDA] pt-5 pb-1 md:py-4 px-4 md:px-6 bg-[#1B2739]'}`}>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-1 mb-4">
          <div className="mb-6 lg:mb-0 text-center mx-auto">
            <a href='https://twitter.com/Mr_AllenT'>
              <AiOutlineTwitter className="w-8 h-8 mb-2 mx-auto cursor-pointer hover:text-green-400 hover:scale-[80%] duration-300 ease-in-out]"/>
              <h6 className="font-medium">X</h6>
            </a>
          </div>
          <div className="text-center mx-auto">
            <a href='mailto:allent.bus@gmail.com'>
            <AiOutlineMail 
            className="w-8 h-8 mb-2 mx-auto cursor-pointer hover:text-green-400 hover:scale-[80%] duration-300 ease-in-out"/>
            </a>
            <h6 className="font-medium">Email</h6>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto">
          {/* <form>
            <div className="form-group mb-6">
                <label className='pl-2'>Name*</label>
              <input type="text" className="block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-[#027E72] focus:outline-none"
                placeholder="Name"/>
            </div>
            <div className="form-group mb-6">
            <label className='pl-2'>Email*</label>
              <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"/>
            </div>
            <div className="mb-6">
            <label className='pl-2'>Message*</label>

              <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " rows="3" placeholder="Message"></textarea>
            </div>

            <button className="text-[#EDEAEA] my-8 mx-auto shadow-md shadow-[#040c16] flex items-center p-0.5 overflow-hidden text-md font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                        <span className="hover:text-white px-5 py-2.5 transition-all ease-in 
                        duration-75 bg-[#1B2739] rounded-md group-hover:bg-opacity-0 ">
                            Send
                        </span>
                </button>
          </form> */}
        </div>
      </div>
    </div>        
    </div>
  )
}

export default Contact