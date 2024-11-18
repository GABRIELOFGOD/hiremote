"use client";

import { fetchDepartment } from "@/hooks/DepartmentHook";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Department = ({ params }) => {
  const [department, setDepartment] = useState(null);
  const { deptName } = params;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDepartment(deptName);
      setDepartment(data);
    };

    if (deptName) {
      fetchData();
    }
  }, [deptName]);

  return (
    <div>
      <div className="md:h-[300px] h-fit overflow-hidden w-full">
        <div
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37, 43, 66, 0.98), rgba(37, 43, 66, 0.9), rgba(37, 43, 66, 0.2)),
              url(${department?.image})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
          className="px-3 md:px-20 flex items-center justify-center md:justify-start py-20 md:py-0"
        >
          <p className="text-white font-bold text-2xl md:text-6xl md:text-left text-center">{ department?.title }</p>
        </div>
      </div>
      <div className="py-10 px-3 md:px-32">
        <p className="md:text-2xl text-xl font-bold text-primary">{ department?.title }</p>
        <p className="text-sm md:text-lg mt-2 text-neutral-500">{ department?.description }</p>
        {department?.data.length > 0 && <div className="pt-10 flex flex-col gap-5">
          <p className="text-lg font-bold">What you stand to gain:</p>
          <ul className="list-disc pl-5 md:pl-10 flex flex-col gap-3">
            {department?.data.map((itm, i) => (
              <li key={i}>{ itm }</li>
            ))}
          </ul>
        </div>}
      </div>
      <div className="flex w-full justify-end pb-5 md:px-20 px-3 items-end underline"><Link className="text-primary font-semibold md:text-lg" href="">Apply for our {department?.title} course today!</Link></div>
    </div>
  );
};

export default Department;
