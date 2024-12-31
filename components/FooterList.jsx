import Link from 'next/link'
// import React from 'react'

const FooterList = ({title, items}) => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='font-bold text-[16px] text-white'>{title}</p>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <Link href={item.link} key={i} >
            <p className='text-[14px] text-light font-semibold hover:text-neutral-400'>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterList