// import React from "react";

const FaqCard = ({ icon, question, answer, fee, access }) => {
  return (
    <div className="flex gap-[16px] md:gap-[2rem]">
      <div className="border-2 border-gray-500 rounded-[10px] p-[10px] h-fit">{icon}</div>
      <div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-primary font-bold text-[16px] leading-7">{question}</h3>
          <p>
            {answer} <span className="text-green-600 text-[16px] font-semibold leading-7">{fee}</span>
          </p>
          <p className="leading-7">{access}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
