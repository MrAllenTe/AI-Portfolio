import React, {useState, useEffect} from 'react'
import { FaGithub } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-scroll';
 

const Navbar = () => {
const [nav, setNav] = useState(false)
const [shadow, setShadow] = useState(false)
const [hamburger, sethamburger] = useState(false)

const handleHamburgerClick = () => {
    sethamburger(prevState => !prevState)
}

const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 bg-[#64FFDA]`;
const handleClick = () => setNav(prevNav => !prevNav)

useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow)
}, [])



  return (
    <div className={shadow ? 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0f161a] text-gray-300 shadow-xl z-50'
                            : 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0f161a] text-gray-300'}>
       <div className='flex justify-between items-center w-full'>
            <div className='cursor-pointer'>
                <Link to="home" smooth={true} duration={500}>
                    {/* <img src={Logo} style={{width: '90px'}}/> */}
                    <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>Mr.AllenT</h1>
                </Link>
            </div>
    <div>
    <div>
        {/* menu */}
            <ul className='hidden md:flex'>

                <li>
                    <Link to="about" smooth={true} duration={500} className='hover:text-green-400 link-underline'>
                    About
                    </Link>
                </li>
                {/* <li>
                    <Link to="skills" smooth={true} duration={500} className='hover:text-[#64FFDA] link-underline'>
                    Experience
                    </Link>
                </li> */}
                <li>
                    <Link to="work" smooth={true} duration={500} className='hover:text-green-400 link-underline'>
                    Selected Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className='hover:text-green-400 link-underline'>
                    Contact
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</div>

<button
      className="flex flex-col h-12 w-12 justify-center items-center group md:hidden z-50"
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          nav
            ? "rotate-45 translate-y-3"
            : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
            nav ? "opacity-0" : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
            nav
            ? "-rotate-45 -translate-y-3"
            : ""
        }`}
      />
    </button>

{/* Mobile menu */}
<div className={nav ? 'md:hidden fixed left-0 top-0 w-full min-h-screen bg-[#1B2739]/70' : ''}>
    <div className={nav ? 'fixed right-0 top-0 w-[50%] sm:w-[40%] h-screen bg-[#1B2739] p-10 ease-in duration-100 z-50' : 
                        'fixed left-[-100] top-0 p-10 ease-in transition-all duration-100'}>
        <div className='flex w-full items-center justify-between'>
        {/* <img src={Logo} style={{width: '80px'}}/> */}
        

        </div>
        <div className='border-b border-[#EDEAEA] my-4'>
        </div>

        <div className='flex flex-col py-4'>
       <ul className='text-[#EDEAEA]'>

                <li className='py-6 text-2xl hover:text-green-400'>
                    <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                {/* <li className='py-6 text-2xl hover:text-[#64FFDA]'>
                    <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                    Experience
                    </Link>
                </li> */}
                <li className='py-6 text-2xl hover:text-green-400'>
                    <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
                    Selected Work
                    </Link>
                </li>
                <li className='py-6 text-2xl hover:text-green-400'>
                    <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
        </ul> 
    </div>
    </div>
</div>


        <div className='hidden fixed md:flex flex-col left-0 bottom-[-10%] pl-2'>
            <a className='pb-4 hover:translate-y-[-4px] duration-300'
            href='https://twitter.com/Mr_AllenT'>
                <AiOutlineTwitter className='hover:text-green-400 text-2xl'
                />
            </a>
            <a className='pb-4 hover:translate-y-[-4px] duration-300'
                href='mailto:allent.bus@gmail.com'>
                <HiOutlineMail className='hover:text-green-400 text-2xl' />
            </a>
            {/* <a className='pb-4 hover:translate-y-[-4px] duration-300'
                href='https://github.com/allentevyaw'>
                <FaGithub className='hover:text-[#64FFDA] text-2xl' />
            </a> */}
            {/* <a className='hover:translate-y-[-4px] duration-300'>
                <AiOutlineInstagram className='hover:text-[#64FFDA] text-2xl' />
            </a> */}
                
            <hr className="w-0 h-24 ml-2.5 my-8 border-l-2 border-1 dark:border-gray-700"/>   
        </div>
    </div>
  )
}

export default Navbar




        {/* Social icons */}
        // <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        //     <ul>
        //         <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-lg'>
        //             <a className='flex justify-between items-center w-full text-gray-00'
        //             href='/'>
        //                 Linkedin <FaLinkedin size={25} />
        //             </a>
        //         </li>
        //         <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg'>
        //             <a className='flex justify-between items-center w-full text-gray-00'
        //             href='https://github.com/allentevyaw'>
        //                 Github <FaGithub size={25} />
        //             </a>
        //         </li>
        //         <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8f47b9] rounded-lg'>
        //             <a className='flex justify-between items-center w-full text-gray-00'
        //             href='/'>
        //                 Email <HiOutlineMail size={25} />
        //             </a>
        //         </li>
        //         <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-lg'>
        //             <a className='flex justify-between items-center w-full text-gray-00'
        //             href='/'>
        //                 Twitter <AiOutlineTwitter size={25} />
        //             </a>
        //         </li>
        //     </ul>
        // </div>