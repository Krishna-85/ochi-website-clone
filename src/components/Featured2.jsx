import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-20'>
      <div className='w-full border-b-[1px] border-zinc-800 pb-14 px-20'>
      </div>
      <div className='px-20'>
      <div className='Cards flex mt-16 gap-5 w-full'>

            <div className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className='absolute text-[#CDEA68] font-semibold top-1/2 left-full z-[9] leading-none tracking-tighter text-8xl -translate-y-1/2 -translate-x-1/2'> 
            {"FYDE".split('').map((item, index)=><span className=''>{item}</span>)}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden  bg-green-600">
              <img className='w-full h-full object-cover' src="src/assets/Frame-3875-663x551.jpg" alt="" />
            </div>
            </div>
            <div className="cardcontainer relative  w-1/2 h-[70vh]">
            <h1 className='absolute text-[#CDEA68] font-semibold top-1/2 right-full z-[9] leading-none tracking-tighter text-8xl -translate-y-1/2 translate-x-1/2'>
            {"".split('').map((item, index)=><span className=''>{item}</span>)}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden  bg-green-600">
              <img className='w-full h-full object-cover' src="src/assets/PB-Front-4-663x551 (1).png" alt="" />
            </div>
            </div>
        </div>
      </div>
      
        
    </div>
  )
}

export default Featured
