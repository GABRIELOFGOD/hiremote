import ContactFromHome from "@/components/home/ContactFromHome";
import Departments from "@/components/home/Departments";
import WhoWeAre from "@/components/home/WhoWeAre";
import Testimony from "@/components/home/Testimony";
import Consult from "@/components/home/Consult";

const Home = () => {
  return (
    <div>
      <div className="md:h-[90vh] h-fit py-20 md:px-28 px-6 flex flex-col gap-5 justify-center after:bg-primary after:absolute after:w-full relative after:top-0 after:right-0 after:bg-opacity-30 after:h-full items-center bg-cover bg-[url('/images/home.jpg')]">
        <div className="flex flex-col gap-3 z-30 justify-center items-center">
          <p className="text-center text-[34px] font-bold z-30 md:leading-[80px] md:w-[636px] w-full md:font-extrabold text-white md:text-[58px]">Get A Degree That Transcends Border!</p>
          <p className="text-center text-brand font-semibold md:w-[500px] z-30 text-lg md:text-xl">Preparing Future Generations For Global Careers</p>
        </div>
        <div className="flex z-30 flex-col md:flex-row gap-3 md:gap-2">
          <button className="border-2 border-secondary bg-secondary text-white py-2 px-12 font-bold rounded-full">Enrol Now!</button>
          <button className="border-2 border-primary bg-transparent text-primary py-2 px-12 font-bold rounded-full">Learn More</button>
        </div>
      </div>
      <Departments />
      <WhoWeAre />
      <Testimony />
      <ContactFromHome />
      <Consult />
    </div>
  )
}

export default Home;