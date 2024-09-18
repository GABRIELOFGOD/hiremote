"use client"
import React from 'react'

const ContactFromHome = () => {
  return (
    <div className='py-20 px-6 md:px-28 bg-primary from-light'>
      <div className="bg-white p-[30px] md:p-[50px] w-full md:w-[600px]">
        <div>
          <p className="text-secondary font-semibold">Contact us</p>
          <p className="text-primary md:text-subtopic text-2xl font-bold">Make an Appointment</p>
        </div>
        <form onSubmit={e=>e.preventDefault()} className='py-5 flex flex-col gap-5'>
          <div className='flex flex-col gap-5 md:grid grid-cols-2'>
            <input type="text" placeholder='First name' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
            <input type="text" placeholder='Last name' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
            <input type="text" placeholder='Email' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
            <input type="text" placeholder='Phone' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
          </div>
          <textarea placeholder='Message' className='w-full h-44 border border-neutral-200 px-3 rounded-sm' id=""></textarea>
          <button className='py-3 px-8 bg-secondary text-white w-fit font-semibold text-sm'>Book an appointment</button>
        </form>
      </div>
    </div>
  )
}

export default ContactFromHome