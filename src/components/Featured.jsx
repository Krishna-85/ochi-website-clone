import { motion} from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
const [isHovering, setHovering] = useState(false)
 

  return (
    <div className='w-full py-20'>
      <div className='w-full border-b-[1px] border-zinc-800 pb-14 px-20'>
        <h1 className='text-5xl tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-20'>
      <div className='Cards flex mt-16 gap-5 w-full'>

            <div onMouseEnter={()=>setHovering(true)} 
            onMouseLeave={()=>setHovering(false)} 
            className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className='absolute flex text-[#CDEA68] font-semibold top-1/2 overflow-hidden left-full z-[9] leading-none tracking-tighter text-8xl -translate-y-1/2 -translate-x-1/2'> 
            {"FYDE".split('').map((item, index)=>
            <motion.span
             initial={{y:"100%"}} 
            animate={isHovering ? ({y: "0"}):({y: "100%"})} 
            transition={{ ease: "easeInOut", delay: index * 0.1 }}
            className='inline-block 
            translate-y-full'>  
              {item}</motion.span>)}
              </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden  bg-green-600">
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            </div>
            <div className="cardcontainer relative  w-1/2 h-[70vh]">
            <h1 className='absolute text-[#CDEA68] font-semibold top-1/2 right-full z-[9] leading-none tracking-tighter text-8xl -translate-y-1/2 translate-x-1/2'>
            {"VISE".split('').map((item, index)=><span className=''>{item}</span>)}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden  bg-green-600">
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
            </div>
        </div>
      </div>
      
        
    </div>
  )
}

export default Featured
