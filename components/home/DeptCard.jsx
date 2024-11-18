import Link from 'next/link'
import React from 'react'

const DeptCard = ({dept}) => {
  return (
    <Link href={`/departments/${dept.link}`} className='px-6 py-7 w-[400px] flex flex-col gap-3 border border-light border-opacity-10 hover:shadow-md shadow-sm rounded-sm'>
      <div className="flex gap-3">
        <div className='text-iconColor text-5xl'>{dept.icon}</div>
        <p className='text-primary my-auto font-bold'>{dept.title}</p>
      </div>
      <p className='text-light text-sm'>{dept.description}</p>
    </Link>
  )
}

export default DeptCard