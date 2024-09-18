import React from 'react'
import TestimonyCard from './TestimonyCard'

const Testimony = () => {
  return (
    <div className='bg-[#F3F3F3] py-10 md:py-20 px-6 md:px-28 '>
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className="text-center text-[40px] font-bold text-primary">What our clients say</p>
        <p className="text-center md:w-[470px] text-[14px] text-light">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex justify-center md:px-20 px-0 md:gap-10 gap-5 mt-10 flex-col md:flex-row'>
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>
    </div>
  )
}

export default Testimony