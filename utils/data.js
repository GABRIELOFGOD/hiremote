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
  FaUserShield,
  FaLaptop,
  FaMoneyBillWave,
  FaCertificate,
  FaBuilding,
  FaAward,
  FaRegClock,
  FaGlobeAmericas,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiCheckSquare, FiBarChart2 } from "react-icons/fi";
import { CiCircleQuestion } from "react-icons/ci";

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

export const FAQCardData = [
  {
    icon: <FaUserShield />,
    question: "Who can enroll in the programs?",
    answer:
      "Anyone looking to enhance their skills in remote work can enroll. Our program takes you from beginner to advanced-level across multiple fields which makes it cater to all levels.",
  },
  {
    icon: <FaLaptop />,
    question: "How are classes delivered?",
    answer:
      "All our classes are conducted online. You can attend live sessions on weekends combined with access to recorded lessons at your convenience.",
  },
  {
    icon: <FaMoneyBillWave />,
    question: "What is the cost of each program?",
    answer: "Our school fee is currently",
    fee: "N31500/$39.",
    access: "This gives you access to enroll into any program of your choice",
  },
  {
    icon: <FaCertificate />,
    question: " What happens after I complete a course?",
    answer:
      "Upon completing the course, you’ll receive a globally recognized certification, access to internship and job placement resources. We also have an active alumni community network.",
  },
  {
    icon: <FaBuilding />,
    question: "  Can organizations enroll their employees? ",
    answer:
      "Yes, we offer custom training programs for organizations looking to upskill their workforce.",
  },
  {
    icon: <FaAward />,
    question: "  Will I receive a certification? ",
    answer:
      "Yes, upon successful completion, you will receive a globally recognized certification.",
  },
  {
    icon: <CiCircleQuestion />,
    question: " Do You Guarantee Job? ",
    answer:
      "We don't promise jobs. However, we often have paid internships for our brightest stars! You'd be taught the procedures & strategies to be followed consistently  to be able to land an offer like the ones we share on our social media pages. It is important they are followed to get desired results within the shortest possible time.",
  },
  {
    icon: <FaRegClock />,
    question: "  Will 8 weeks Be Enough For Me To Become a Professional?",
    answer:
      "Yes, we basically save you from unnecessary theoretical aspects and take you through practical job market needs to fortify you with the technical know-how needed to succeed.",
  },
  {
    icon: <FaToolbox />,
    question: "I'm already skilled, is this the right program for me?",
    answer:
      "If you are skilled and you currently don't have any global tool knowledge, work portfolio, neither do you have an ATS standard resume or optimized Linkedin Profile, you'd definitely need to upskill with us. If you are still struggling with all of the above, our Remote Job Preparation and Placement programme is your sure bet.",
  },
  {
    icon: <FaGlobeAmericas />,
    question: "Can I join the program from anywhere in the world?",
    answer:
      "Yes, all our courses are 100% online, making them accessible from anywhere across the globe.",
  },
  {
    icon: <FaCalendarAlt />,
    question: "What is the duration of each program?",
    answer:
      "All of our programs last 8 weeks with flexible options for learning.",
  },
  {
    icon: <FaHandshake />,
    question: "How do organizational partnerships work?",
    answer:
      "We offer customizable upskilling programs for organizations looking to enhance employee productivity. Organizations can enroll their teams in our programs and benefit from cost-effective training solutions",
  },
];
