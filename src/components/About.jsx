import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 rounded-tl-3xl text-black px-20 rounded-tr-3xl bg-[#CDEA68]'>
      <h1 className='font-["Neue Montreal"] text-[3vw] tracking-tight leading-[3.5vw] '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full flex gap-5 pt-10  border-t-[1px]  mt-16 border-[#a1b562]'>
        <div className='w-1/2 '>
        <h1 className='text-5xl tracking-tight  '>Our Approach:</h1>
        <button className='px-7  font-semibold uppercase mt-5 py-4 bg-zinc-900 flex items-center gap-10 rounded-full text-white mt-7'>Read More 
            <div className='w-2 h-2 bg-white rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 rounded-3xl  overflow-hidden  h-[70vh] bg-[#a1b562]'> 
        <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>

  )
}

export default About
