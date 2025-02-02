 import React from 'react'
 import { FaArrowUpLong } from "react-icons/fa6";
 import {motion} from "framer-motion"
 
 const LandingPage = () => {
  
   return (
     <div data-scroll data-scroll-speed="-.3" className='w-full h-screen  pt-1 bg-zinc-900'>
     <div className="textStructure  mt-40 px-20">
      {["We create", "eye opening", "presentations"].map((item, index)=>(
           <div className="masker bg-red   ">
            <div className='w-fit flex items-end overflow-hidden'>
            {index === 1 && (
              <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[9vw] h-[5vw]  relative   top-[-.1vw]  '> <img src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </motion.div>
              )}
            
            <h1 className='uppercase  text-8xl leading-[6vw] tracking-tighter font-semibold font-["Founders Grotesk_X-Condensed"]'>
              {item}
              </h1>
            </div>
       </div>
          ))}
     </div>
     <div className='border-t-[1px]  flex justify-between items-center py-5 px-16 border-zinc-800 mt-32'>
      {["For public and private comppanies", "From the first pitch to IPO"].map((item, index)=>(
            
        

     
   
        <p className='text-md font-light tracking-tight leading-none'>{item}</p>
      ))}

      <div className='start flex items-center gap-1'>
        <div className='px-5 border-2 uppercase  rounded-full py-1 border-zinc-800 text-sm '>Start the project</div>
        <div className='w-7 h-7 rounded-full border-zinc-500 border-2 flex items-center justify-center rotate-45 '> <FaArrowUpLong /></div>
      </div>
     </div>
     </div>
   )
 }
 
 export default LandingPage
 