import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       
       {/* Used Gitform.io */}
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#E26240] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or reach out via email</p>
            </div>
            <input className='p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#E26240] hover:border-[#E26240] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact