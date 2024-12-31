"use client"

import Link from 'next/link';
// import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterList from './FooterList';
import { departments } from '@/utils/data';
import { navlist } from './NavBar';

const Footer = () => {
  return (
    <div className='bg-primary py-10 md:py-20 px-6 md:px-28'>
      <div className="flex justify-between ">
        <p className="text-white text-2xl font-bold">HIREMOTE AFRICA</p>
        <div className="flex gap-2 bg-primary text-white">
          <Link href="" className="my-auto text-blue-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"><FaFacebook size={16} /></Link>
          <Link href="" className="text-white my-auto hover:text-pink-600 duration-200 bg-primary hover:bg-gray-300 flex-1 w-full h-full items-center justify-center flex"><FaInstagram size={16} /></Link>
          <Link href="" className="text-white my-auto hover:text-red-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"><FaYoutube size={16} /></Link>
        </div>
      </div>
      <hr className='my-10 bg-neutral-500' />
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <FooterList title={"Quick links"} items={navlist} />
        <FooterList title={"Departments"} items={departments} />
        {/* <FooterList title={footerList.title} items={footerList.items} /> */}
        {/* <FooterList title={footerList.title} items={footerList.items} /> */}
        <div className='flex flex-col gap-5'>
          <p className='font-bold text-[16px] text-white'>Get in Touch</p>
          <form onSubmit={e=>e.preventDefault()} className='rounded-md border flex border-neutral-200 overflow-hidden '>
            <input type="text" className='h-10 bg-white px-3 w-full' placeholder='Your Email' />
            <button className='text-xs text-white bg-secondary px-3'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer