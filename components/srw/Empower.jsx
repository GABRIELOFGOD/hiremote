import React from "react";

function Empower() {
  return (
    <div className="mx-[16px] my-[16px] md:mx-[3rem] md:my-[3rem] flex flex-col gap-[1rem] md:gap-[3.5rem]">
      <h1 className="text-primary font-bold md:text-[2rem] text-center">
        Student Remote Workers (SRW) Club
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-[20px] md:gap-[3rem] w-full">
        <div className="empowerment flex flex-col gap-[1rem] flex-[2]">
          {/* <h1 className="text-primary font-bold md:text-[2rem] md:w-[50%] text-center md:text-left">Empowering the Next Generation for the Future of Work</h1>
          <p className="leading-6 md:leading-7 md:w-[70%] text-[14px] md:text-[16px]">
            At Hiremote Africa, we believe in shaping the future of work by
            preparing students early. The Students Remote Workers Club is
            designed to provide undergraduate students with pre-career training
            that aligns with their studies and prepares them for remote job
            opportunities in various industries.
          </p> */}
          <h1 className="text-primary font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl md:w-3/4 lg:w-1/2 text-center md:text-left">
            Empowering the Next Generation for the Future of Work
          </h1>
          <p className="leading-6 md:leading-7 text-sm sm:text-base lg:text-lg md:w-3/4 lg:w-2/3 text-center md:text-left">
            At Hiremote Africa, we believe in shaping the future of work by
            preparing students early. The Students Remote Workers Club is
            designed to provide undergraduate students with pre-career training
            that aligns with their studies and prepares them for remote job
            opportunities in various industries.
          </p>
        </div>
        <div className="flex justify-center items-center flex-1">
          <img
            className="w-full h-auto object-cover rounded-[5%]"
            src="/images/membership-1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Empower;
