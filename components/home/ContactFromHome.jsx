"use client";
// import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const ContactFromHome = () => {
  return (
    <div className="py-20 px-6 md:px-28 bg-primary from-light">
      <div className="bg-white p-[30px] md:p-[50px] w-full md:w-[600px]">
        <div className="flex flex-col gap-[16px]">
          <p className="text-secondary font-semibold">
            Have any questions or need assistance with enrollment?{" "}
          </p>
          <p className="text-primary md:text-subtopic text-2xl font-bold">
            {" "}
            Feel free to contact us.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="py-5 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-[10px]">
            <p className="">Email: hello@hiremoteafrica.com</p>
            <p>Phone: +234 9131217602</p>
            <p>Address:Lagos, Nigeria.</p>
          </div>
          <hr className="border-1 border-secondary" />
          <div className="leading-7">
            Our dedicated team at Hiremote Africa is available to assist you
            with any inquiries, whether you&apos;re a prospective student, an
            organization looking for partnership opportunities, or a government
            body interested in our youth empowerment programs. Don&apos;t hesitate to
            reach out for more information!
          </div>
          <hr className="border-1 border-secondary" />
          <div>
            <h2>Support Hours</h2>
            <div>
              <p>Monday - Friday</p>
              <p>9:00 AM - 8:00 PM (W.A.T)</p>
          </div>
          </div>
          <div className="flex flex-1 bg-white text-white divide-x-2">
            <Link
              href="facebook.com/HiremoteAfrica"
              className="text-white my-auto hover:text-blue-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"
            >
              <FaFacebook size={26} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/hiremoteafrica/"
              className="text-white my-auto hover:text-blue-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"
            >
              <FaLinkedin size={26} />
            </Link>
            <Link
              href="http://www.instagram.com/HiremoteAfrica"
              className="text-white my-auto hover:text-pink-600 duration-200 bg-primary hover:bg-gray-300 flex-1 w-full h-full items-center justify-center flex"
            >
              <FaInstagram size={26} />
            </Link>
            <Link
              href="x.com/HiremoteAfrica"
              className="text-white my-auto hover:text-red-600 duration-200 bg-primary hover:bg-white flex-1 w-full h-full items-center justify-center flex"
            >
              <FaXTwitter size={26} />
            </Link>
          </div>
          {/* <div className='flex flex-col gap-5 md:grid grid-cols-2'>
            <input type="text" placeholder='First name' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
            <input type="text" placeholder='Last name' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
            <input type="text" placeholder='Email' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
            <input type="text" placeholder='Phone' className='w-full h-10 border border-neutral-200 px-3 rounded-sm' />
          </div> */}
          {/* <textarea placeholder='Message' className='w-full h-44 border border-neutral-200 px-3 rounded-sm' id=""></textarea> */}
          {/* <button className='py-3 px-8 bg-secondary text-white w-fit font-semibold text-sm'>Book an appointment</button> */}
        </form>
      </div>
    </div>
  );
};

export default ContactFromHome;
