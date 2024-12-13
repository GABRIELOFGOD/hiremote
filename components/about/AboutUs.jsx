import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="about md:mb-10 w-full relative md:bg-[url('/images/remote-worker5.jpg')]">
        <div className="content flex flex-col gap-[0.7rem] px-[1rem] py-[3rem] md:px-[8rem] md:py-[10rem] relative z-10 bg-gradient-to-r from-primary md:from-primary to-transparent bg-opacity-100 text-white">
          <h3 className="text-[0.9rem] font-semibold">ABOUT US</h3>
          <h1 className="text-[1.3rem] md:text-[2.5rem] font-bold">
            HIREMOTE AFRICA
          </h1>
          <p className="md:w-[75ch] leading-7">
            At Hiremote Africa, we are democratising access to what the future
            of work demands and bridging the gap between what we learnt in
            traditional school to meet the growing demand for remote skills
            globally. We provide top-quality, flexible, and affordable remote
            work education to people worldwide. Our professional programmes are
            carefully structured to address both the technological and
            operational aspects of remote employment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
