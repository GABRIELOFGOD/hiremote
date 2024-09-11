"use client"

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link'
import React from 'react'

const PreNav = () => {
  return (
    <div className='flex'>
      <p className='bg-primary w-full text-center px-2 flex-1 md:py-3 py-1 border-r-[3px] border-white text-white font-semibold text-sm'>
        Our portal
      </p>
      <div className='w-full flex-[4] md:flex hidden justify-center py-3 bg-primary bg-opacity-30'>
        <p className='text-center text-xs md:text-sm text-secondary'>October 2024 learning session start soon. <Link href="" className='underline hover:text-primary duration-200'>Apply Now!</Link></p>
      </div>
      <div className="flex flex-1 bg-primary text-white divide-x-2">
        <Link href="" className="text-white my-auto hover:text-blue-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"><FaFacebook size={16} /></Link>
        <Link href="" className="text-white my-auto hover:text-pink-600 duration-200 bg-primary hover:bg-gray-300 flex-1 w-full h-full items-center justify-center flex"><FaInstagram size={16} /></Link>
        <Link href="" className="text-white my-auto hover:text-red-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"><FaYoutube size={16} /></Link>
      </div>
      <Link href="" className="flex-1 bg-primary justify-center items-center flex gap-2 border-l-2 border-white">
        <div className="text-green-600"><IoLogoWhatsapp size={20} /></div>
        <p className="text-white md:text-xs text-[8px] hover:underline font-semibold text-ellipsis">+234 123 456 789</p>
      </Link>
    </div>
  )
}

export default PreNav