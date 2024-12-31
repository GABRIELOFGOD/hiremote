// import React from 'react'

const WhoWeAre = () => {
  return (
    <div className='bg-[#FAFAFA] relative py-10 md:py-20 flex justify-center items-center flex-col gap-5 md:gap-10 px-6 md:px-10'>
      <div className='flex flex-col justify-center gap-2'>
        <p className="text-center text-[40px] font-bold text-primary">Who We Are</p>
        <p className="text-center md:w-[470px] text-[14px] text-light">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='bg-[url("/images/cover.jpg")] z-20 w-[400px] max-w-full h-[200px] bg-cover md:w-[877px] md:h-[442px]'></div>
      <div className="bg-primary absolute bottom-0 left-0 w-full h-1/2"></div>
    </div>
  )
}

export default WhoWeAre