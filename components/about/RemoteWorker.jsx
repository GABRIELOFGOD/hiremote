import Image from "next/image";

const remoteImage = "/images/remote-worker1.jpg"

const RemoteWorker = () => {
  return (
    <div className="flex-[3] h-[100%] my-auto px-[1rem] pb-[2rem] md:pb-0 md:pr-10">
      <Image src={remoteImage} alt="Remote Worker" width={500} height={500} />
    </div>
  );
};

export default RemoteWorker;
