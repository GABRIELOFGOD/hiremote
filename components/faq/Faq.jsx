import React from "react";
import FaqCard from "./FaqCard";
import { FAQCardData } from "@/utils/data";

function Faq() {
  return (
    <div className="px-[16px] py-[16px] md:px-[3rem] md:py-[2rem] flex flex-col gap-[20px] md:gap-[28px]">
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[20px] md:text-[30px] font-bold">Frequently Asked Questions</h1>
        <p className="leading-7">Quick answers to questions you may have.</p>
      </div>
      <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-[2rem]">
        {FAQCardData.map((faq) => (
          <FaqCard
            icon={faq.icon}
            question={faq.question}
            answer={faq.answer}
            fee={faq.fee}
            access={faq.access}
          />
        ))}
      </div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="text-[20px] font-bold">Get Started Today</h4>
        <p className="leading-7">
          Don’t wait any longer to kickstart your remote work career or upskill
          your team! Enroll in one of our certification programs and begin your
          journey to success in the global remote economy.
        </p>
      </div>
    </div>
  );
}

export default Faq;
