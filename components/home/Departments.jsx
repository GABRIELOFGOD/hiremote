// import React from 'react'
import DeptCard from './DeptCard'
import { departments } from '@/utils/data'

const Departments = () => {
  return (
    <div className='py-10 md:py-20 flex flex-col gap-5 md:gap-10 px-6 md:px-10'>
      <div className='w-full flex flex-col items-center gap-3 justify-center text-center'>
        <p className='text-4xl font-bold text-primary'>Our departments</p>
        <p className='text-sm text-light text-center w-full md:w-[470px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      </div>
      <div className='flex justify-evenly flex-wrap gap-5'>
        {departments.map((dept, i) => (
          <DeptCard
            dept={dept} 
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Departments