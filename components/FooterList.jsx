import React from 'react'

const FooterList = ({title, items}) => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='font-bold text-[16px] text-white'>{title}</p>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <p key={i} className='text-[14px] text-light font-semibold hover:text-neutral-400'>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default FooterList