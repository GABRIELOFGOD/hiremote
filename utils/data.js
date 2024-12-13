import { IoMdCodeWorking } from "react-icons/io";
import { IoBusinessSharp } from "react-icons/io5";
import { MdOutlineDataThresholding } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { VscRemoteExplorer } from "react-icons/vsc";
import {
  FaGraduationCap,
  FaBriefcase,
  FaHandshake,
  FaToolbox,
} from "react-icons/fa";
import { FiCheckSquare, FiBarChart2 } from "react-icons/fi";

export const departments = [
  {
    title: "Department of No-Code Tech",
    description:
      "This offers a range of programmes focusing on harnessing technology without the need for coding skills. From product management to social media management, learners acquire practical skills to excel in remote roles that leverage no-code tools.",
    icon: <IoMdCodeWorking />,
    link: "no-code",
    image: "/department/nocode.jpg",
    data: [
      "Professional Certification in Product Management: Learn the essentials of managing product lifecycles and delivering successful products remotely.",
      "Professional Certification in Quality Assurance: Learn testing techniques to ensure software products meet customer standards and quality requirements.",
      "Professional Certification in Project Management: Develop expertise in managing projects using tools like Agile and Scrum, critical for remote teams.",
      "Professional Certification in Customer Relationship Management: Dive deep into CRM tools such as Zendesk and Salesforce, and learn customer interaction strategies to enhance service delivery.",
      "Professional Certification in Social Media Management: Learn to build effective social media campaigns and drive brand engagement remotely.",
    ],
  },
  {
    title: "Department of Data",
    description:
      "This offers specialized courses in data science, data engineering, and data analysis. From predictive modeling to data visualization, learners gain proficiency in extracting insights and making data-driven decisions remotely.",
    icon: <MdOutlineDataThresholding />,
    link: "data",
    image: "/department/data.jpg",
    data: [
      "Professional Certification in Data Analysis: Learn to collect, process, and interpret data to inform critical business decisions.",
      "Professional Certification in Business Analysis: Understand how to bridge the gap between IT and business, ensuring projects deliver value through proper analysis and planning.",
    ],
  },
  {
    title: "Department of Business Development and Operations",
    description:
      "This offers a diverse range of courses covering digital marketing, executive assistance, virtual assistance, sales and marketing, lean business management, and domain flipping mastery.",
    icon: <IoBusinessSharp />,
    link: "business-development",
    image: "/department/business.jpg",
    data: [
      "Professional Certification in Digital Marketing: Learn practical digital marketing strategies, from SEO to content creation, to help businesses grow online.",
      "Professional Certification in Executive Assistance: Learn how to practically manage C-level executives schedules, high-level communications, and administrative duties in a remote setting.",
      "Professional Certification in Advanced Virtual Assistance: Enhance your virtual assistant skills, with a focus on project management, Telemarketing, Lead Generation, CRM tools, and many more",
      "Professional Certification in Domain Flipping Mastery: Learn the art of buying, selling, and profiting from domain names in the digital economy.",
    ],
  },
  {
    title: "Department of Designs",
    description:
      "Cultivating creativity and design skills are essential for remote design roles. From product design to graphics design, learners explore user-centric design principles and digital tools to create visually appealing and user-friendly products remotely.",
    icon: <SiAffinitydesigner />,
    link: "design",
    image: "/department/design.jpg",
    data: [
      "Professional Certification in Product Design: Use design thinking to create user-friendly products, from ideation to prototype testing.",
      "Professional Certification in Graphics Design: Develop strong visual communication skills, focusing on branding, typography, and digital tools.",
    ],
  },
  {
    title: "Department of Code Tech",
    description:
      "Learners delve into coding languages, cloud platforms, and cybersecurity protocols, preparing them for remote roles in software engineering, cloud architecture, and cybersecurity analysis.",
    icon: <FaLaptopCode />,
    link: "coding",
    image: "/department/code.jpg",
    data: [
      "Professional Certification in Software Development: A hands-on course covering languages such as Python, JavaScript, and frameworks essential for building scalable software.",
      "Professional Certification in Cybersecurity: Learn how to protect digital assets from cyber threats, manage security protocols, ethical hacking and prevent data breaches.",
    ],
  },
  {
    title: "Department of Remote Job Preparation and Placement",
    description:
      "With a focus on remote work skills development, this department empowers individuals to secure remote job opportunities aligned with their career aspirations.",
    icon: <VscRemoteExplorer />,
    link: "remote",
    image: "/department/remote.jpg",
    data: [],
  },
];

export const footerList = {
  title: "Company links",
  items: ["About", "Contact", "Billing", "Links", "Customer"],
};

export const clubBenefits = [
  {
    title: "Pre-career Training",
    description:
      "Gain essential remote work skills before entering the job market, giving you an advantage over your peers.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Industry-Specific Training",
    description:
      " Get trained in skills that align directly with your academic course, ensuring relevance to your future career.",
    icon: <FaBriefcase />,
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with remote workers, professionals, and industry leaders. Build a strong network that could lead to mentorship, internships, and job offers.",
    icon: <FaHandshake />,
  },
  {
    title: "Real-World Experience",
    description:
      " Get real-world experience while still in school, making you highly employable upon graduation.",
    icon: <FiCheckSquare />,
  },
  {
    title: "Access to Remote Work Resources",
    description:
      "  Get exclusive access to tools like resume templates, job boards, and industry-specific training content.",
    icon: <FaToolbox />,
  },
  {
    title: "Industry Trends",
    description:
      "  Stay updated on the latest technological and industry trends, ensuring that you remain relevant in your chosen field.",
    icon: <FiBarChart2 />,
  },
];
