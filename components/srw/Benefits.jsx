import React from "react";
import BenefitsCard from "./BenefitsCard";
import { clubBenefits } from "@/utils/data";

function Benefits() {
  return (
    <div className="mx-[16px] md:mx-[3rem] my-[36px] md:my-[5rem] flex flex-col gap-[1rem] md:gap-[3.5rem]">
      <h1 className="text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-primary font-bold">
        Benefits Of Club Membership
      </h1>
      <div className="benefits-listings grid grid-cols sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clubBenefits.map((benefit) => (
          <BenefitsCard
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Benefits;
