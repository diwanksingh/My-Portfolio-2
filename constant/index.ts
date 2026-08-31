


export const Socials = [
  {
    name: "Linkedin",
    src: "/Linkedin.png",
    link: "https://www.linkedin.com/in/diwank-singh-6818b6166/"
  },
  {
    name: "Github",
    src: "/Github.png",
    link: "https://github.com/diwanksingh"
  },
];




export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
 
 
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Three js",
    Image: "/threejs.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Appwrite",
    Image: "/Appwrite.png",
    width: 55,
    height: 55,
  },
  
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },

];

export const Languages_skill = [
  {
    skill_name: "C++",
    Image: "/c++.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    Image: "/python.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Dsa",
    Image: "/DSA.png",
    width: 70,
    height: 70,
  },



];

export type Experience = {
  role: string;
  company: string;
  type: string;
  dates: string;
  duration: string;
  location: string;
  bullets: string[];
  skills?: string[];
};

export const Experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Xportel",
    type: "Full Time",
    dates: "Apr 2026 - Present",
    duration: "5 mos",
    location: "Delhi, India \u00b7 On-site",
    bullets: [],
  },
  {
    role: "SDE",
    company: "Avataar Skincare Technologies",
    type: "Internship",
    dates: "Jan 2026 - Apr 2026",
    duration: "4 mos",
    location: "New Delhi, Delhi, India \u00b7 On-site",
    bullets: [
      "Led development of an AI Skin Analyzer module, implementing lead capture, facial validation using MediaPipe, AI analysis with Gemini 2.5 Flash, and automated report generation for web and mobile application.",
      "Architected a scalable async processing system using BullMQ and Redis (10 workers) to handle AI requests; integrated PDF generation, AWS S3 storage, WhatsApp delivery, and CRM systems (LeadSquared, WATI).",
      "Designed a Doctor & Dietician Module using Next.js, React Native, SCSS, and NestJS, implementing 4 core workflows including appointment scheduling, patient history tracking, prescription generation, and automated meal plan delivery with PDF and WhatsApp integration.",
      "Implemented push notifications using Firebase Cloud Messaging (FCM), Notifee, and TypeScript, and built real-time customer support ticket communication for web and mobile application using polling.",
      "Redesigned the website homepage and 2 treatment journeys, and developed 5+ new treatment journeys & optimised landing pages to improve lead capture & user experience.",
    ],
    skills: [
      "React Native",
      "React.js",
      "Next.js",
      "NestJS",
      "TypeScript",
      "BullMQ",
      "Redis",
      "AWS S3",
      "Firebase Cloud Messaging",
      "MediaPipe",
      "Gemini 2.5 Flash",
      "SCSS",
    ],
  },
  {
    role: "Contributor",
    company: "GirlScript Summer of Code",
    type: "Open Source",
    dates: "Jul 2025 - Nov 2025",
    duration: "5 mos",
    location: "New Delhi, Delhi, India \u00b7 Remote",
    bullets: [],
  },
  {
    role: "Full-stack Developer",
    company: "Houseowls",
    type: "Internship",
    dates: "Jun 2025 - Aug 2025",
    duration: "3 mos",
    location:
      "HD-033 at, WeWork Vi-John Tower, 393, Phase III, Udyog Vihar, Sector 19, Gurugram \u00b7 Remote",
    bullets: [
      "Developed a responsive Rental Property Search & Filter module with 6+ filters (BHK Type, Property Type, Furnishing, Price Range, Area, Reset) using Next.js and React state management, achieving <500ms filter response time.",
      "Integrated backend APIs to efficiently fetch and filter property data, and developed feature detail pages with images, amenities, maps, rental terms, and contact options, reducing server response time by 30% and increasing lead conversions by 20%.",
    ],
    skills: ["Next.js", "React", "TypeScript", "REST APIs"],
  },
];

