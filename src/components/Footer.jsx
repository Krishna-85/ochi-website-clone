 import React from 'react'
 
 const Footer = () => {
   return (
    <div className='w-full flex h-screen p-20 bg-zinc-900'>
    <div className='w-1/2 h-[85vh] flex flex-col justify-between font-bold'>
    <div className="headings">
    <h1 className='text-[7vw]   leading-none -mb-5'>EYE-</h1>
    <h1 className='text-[7vw] leading-none -mb-5'>OPENING</h1>
    </div>
     <img  className='w-22' src="src/assets/logo001.svg" alt="" />

    </div>
    <div className='w-1/2'>
    <h1 className='text-[6.5vw] font-bold mt-10  leading-none '>PRESENTATION</h1>
    <div className='dets '>
      <a className='block text-xl font-light' href="#">Facebook</a>
      <a className='block text-xl font-light' href="#">Instagram</a>
      <a className='block text-xl font-light' href="#">Twitter</a>
    </div>
    </div>
  </div>
   )
 }
 
 export default Footer
 