// import React from "react";

function Requirements() {
  return (
    <div className="flex justify-center items-center">
      <div className="my-[16px] mx-[16px] md:my-[3rem] md:mx-[3rem] p-[16px] bg-gray-100 text-primary flex flex-col gap-[0.8rem] md:w-fit md:items-center">
        <h3 className="text-lg font-bold">Requirements</h3>
        <p>
          Annual Club Dues:
          <span className="text-green-500 font-bold ml-[5px]">
            N15,000 / $15 per school session.
          </span>
        </p>
        <p>Join the Hiremote Africa Students Remote Workers Club today</p>
        <p className="font-semibold">Your Global Career Starts Here.</p>
        <button className="bg-primary md:w-fit text-white px-4 py-2 rounded hover:bg-blue-600">
          APPLY NOW
        </button>
      </div>
    </div>
  );
}

export default Requirements;
