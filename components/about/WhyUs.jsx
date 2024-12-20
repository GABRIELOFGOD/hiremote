import RemoteWorker from "./RemoteWorker";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary">
      <div className="flex flex-col gap-[1rem] flex-[3] px-[1rem] py-[2rem] md:px-[8rem] md:py-[6rem]">
        <div className="">
          <h1 className="border-b border-dashed border-blue-600 text-white w-fit text-[1rem] md:text-[1.5rem]">
            WHY CHOOSE US?
          </h1>
        </div>
        <div className="text-white text-[0.7rem] md:text-[1rem] md:leading-7 flex flex-col gap-3">
          <p>
            <span className="font-bold">- Flexible Learning Options:</span> A
            blend of recorded self-paced lessons and live sessions.
          </p>
          <p>
            <span className="font-bold">- Weekend classes:</span> Designed for
            busy professionals, with sessions on Saturdays and Sundays.
          </p>
          <p>
            - Comprehensive 8-week programs that balance theory with real-job
            market demand application from industry-led instructors.{" "}
          </p>
          <p>
            - Remote earning bootcamps for hands-on income generation skills.
          </p>
          <p>
            - Alumni access to technological and industrial trends updates,
            ensuring continuous professional growth.
          </p>
          <p>
            - Student bonding and networking opportunities to connect with peers
            and industry leaders.
          </p>
        </div>
      </div>
      <RemoteWorker />
    </div>
  );
};

export default WhyUs;
