import Image from 'next/image';
// import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';
const secondImg = "/images/profile.png";

const TestimonyCard = () => {
  return (
    <div className='bg-white border border-neutral-200 rounded-sm gap-3 flex flex-col p-[30px]'>
      <div className="flex gap-1">
        <FaStar color='#F3CD03' size={15} />
        <FaStar color='#F3CD03' size={15} />
        <FaStar color='#F3CD03' size={15} />
        <FaStar color='#F3CD03' size={15} />
        <FaStarHalf color='#F3CD03' size={15} />
      </div>
      <p className='text-[14px] text-light'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      <div className='flex gap-3'>
        <div className='h-12 w-12 rounded-full overflow-hidden'>
          <Image src={secondImg} alt='Profile' width={50} height={50} />
        </div>
        <div className='my-auto'>
          <p className='text-secondary font-semibold'>Regina Miles</p>
          <p className='text-primary font-semibold'>Designer</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonyCard