import React from 'react'

const Cards = () => {
  return (
    <div className='w-full flex gap-5 items-center h-screen px-16 bg-zinc-100'>
        <div className="cardContainer h-[55vh] w-1/2 ">
           <div className="card w-full relative flex items-center justify-center   h-full rounded-xl bg-[#004D43]">
            <img className='object-cover w-32 ' src="src/assets/logo001.svg" alt="" />
            <button className='px-4 py-1 border-2 absolute left-11 bottom-10 text-[#CDEA68] font-bold  rounded-full '>&copy;2024-2025</button>
           </div>
        </div>
        <div className="cardContainer gap-5 flex h-[55vh] w-1/2">
           <div className="card w-1/2 relative flex items-center justify-center h-full rounded-xl bg-[#212121]">
           <img className='object-cover w-32 ' src="src/assets/logo002.svg" alt="" />
           <button className='px-10 py-1 border absolute left-18 bottom-10  rounded-full '>RATING 5.0 CLUTCH</button>
           </div>
           <div className="card w-1/2 flex-col relative flex items-center justify-center  h-full rounded-xl bg-[#212121]">
           <img className='object-cover w-26  h-26' src="src/assets/logo003.png" alt="" />
           <div>
            <button className='px-4 py-1 border absolute left-11 bottom-10  rounded-full '>BUISNESS BOOTCAMP ALUMNI</button>
           </div>

           </div>
            
        </div>
      
    </div>
  )
}

export default Cards
