import { IoMdCodeWorking } from "react-icons/io";
import { IoBusinessSharp } from "react-icons/io5";
import { MdOutlineDataThresholding } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { VscRemoteExplorer } from "react-icons/vsc";

export const departments = [
  {
    title: "Department of No-Code Tech",
    description: "This offers a range of programmes focusing on harnessing technology without the need for coding skills. From product management to social media management, learners acquire practical skills to excel in remote roles that leverage no-code tools.",
    icon: <IoMdCodeWorking />,
    link: "no-code"
  },
  {
    title: "Department of Data",
    description: "This offers specialized courses in data science, data engineering, and data analysis. From predictive modeling to data visualization, learners gain proficiency in extracting insights and making data-driven decisions remotely.",
    icon: <MdOutlineDataThresholding />,
    link: "data"
  },
  {
    title: "Department of Business Development and Operations",
    description: "This offers a diverse range of courses covering digital marketing, executive assistance, virtual assistance, sales and marketing, lean business management, and domain flipping mastery.",
    icon: <IoBusinessSharp />,
    link: "business-development"
  },
  {
    title: "Department of Designs",
    description: "Cultivating creativity and design skills are essential for remote design roles. From product design to graphics design, learners explore user-centric design principles and digital tools to create visually appealing and user-friendly products remotely.",
    icon: <SiAffinitydesigner />,
    link: "design"
  },
  {
    title: "Department of Code Tech",
    description: "Learners delve into coding languages, cloud platforms, and cybersecurity protocols, preparing them for remote roles in software engineering, cloud architecture, and cybersecurity analysis.",
    icon: <FaLaptopCode />,
    link: "coding"
  },
  {
    title: "Department of Remote Job Preparation and Placement",
    description: "With a focus on remote work skills development, this department empowers individuals to secure remote job opportunities aligned with their career aspirations.",
    icon: <VscRemoteExplorer />,
    link: "remote"
  },
]