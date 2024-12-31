// import React from "react";

const BenefitsCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-center gap-[0.8rem]">
      <div className="text-red-600 text-[24px] border border-primary rounded-[100%] p-[16px]">{icon}</div>
      <div className="flex flex-col gap-[0.5rem]">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
