import About from "@/app/about/page";
import Home from "@/app/page";
import Link from "next/link";

export const navlist = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Hiremote",
    link: "/about",
  },
  {
    title: "Partner With Us",
    link: "/partner",
  },
  {
    title: "Academic Sessions",
    link: "/academic-sessions",
  },
  {
    title: "Club Membership",
    link: "/srw-club",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const NavBar = () => {
  //   return (
  //     <div className="flex bg-primary relative backdrop-filter backdrop-blur-sm px-[1rem]">
  //       <div className=" px-3.5 text-center md:flex-1 border-r-[3px] border-white text-white font-semibold text-sm">
  //         <p className="bg-primary w-full text-center px-2 flex-1 md:py-3 py-1 border-white text-white font-semibold text-sm">
  //           Our Portal
  //         </p>
  //       </div>
  //       <div className="flex h-full w-full justify-end my-auto px-4 flex-[9] text-white divide-x-2 ">
  //         {navlist.map((item, index) => (
  //           <Link
  //             key={index}
  //             href={item.link}
  //             className="my-auto h-full px-6 hover:text-blue-600 duration-200 hover:bg-white"
  //           >
  //             {item.title}
  //           </Link>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="bg-primary flex justify-between items-center px-4">
      <p className="text-white font-semibold text-[12px] md:text-[20px] border-r-[3px] border-white pr-4">
        Our Portal
      </p>

      {/* Navigation Menu using <details> */}
      <details className="group relative z-50">
        <summary className="cursor-pointer text-white font-semibold text-[12px] md:text-base duration-200 outline-none px-4 py-2 rounded-md focus:outline-none">
          Site Navigation
        </summary>
        <div className="absolute right-0 mt-2 bg-gray-100 rounded-md shadow-lg p-4 space-y-2 w-52 z-50">
          {navlist.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block text-gray-800 font-semibold hover:text-blue-600 hover:bg-gray-200 px-4 py-2 rounded duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
};

export default NavBar;
