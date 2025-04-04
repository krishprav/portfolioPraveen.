import { FaPhoneAlt } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Education", link: "#education" }, 
  { name: "Skills", link: "#skills" },       
  { name: "Contact", link: "#contact" },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
    institution: "IIIT Manipur",
    year: "2022 - 2026",
    description: "",
    img: "/iiit-manipur-logo.png", 
  },
];

export const services = [
  {
    id: 1,
    title: "🛬 Landing Page Development",
    desc: "Custom-built, high-converting landing pages with modern UI/UX.",
    price: "₹5,000+",
  },
  {
    id: 2,
    title: "🤖 Chatbot Integration",
    desc: "AI-powered chatbots for automation and customer support.",
    price: "₹8,000+",
  },
  {
    id: 3,
    title: "💡 SaaS Development",
    desc: "Scalable SaaS platforms tailored to your business needs.",
    price: "₹25,000+",
  },
  {
    id: 4,
    title: "💻 Full-Stack Web Development",
    desc: "End-to-end web solutions with React, Next.js & Node.js.",
    price: "₹15,000+",
  },
  {
    id: 5,
    title: "👦🏻 Portfolio Website Development",
    desc: "Personalized portfolio sites to showcase your work and skills.",
    price: "₹999+",
  },
  {
    id: 6,
    title: "🖨️ ATS-Optimized Resume",
    desc: "Professional, ATS-friendly resumes that boost job chances.",
    price: "₹99+",
  },
  {
    id: 7,
    title: "🎓 College Semester Projects",
    desc: "Get expert help for your academic projects in web & AI.",
    price: "₹1,000+",
  },
];

export const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: "/skills/c++.svg" }, 
      { name: "JavaScript", icon: "/skills/javascript-2.svg" },
      { name: "C", icon: "/skills/c.svg" },
      { name: "Java", icon: "/skills/java-4.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "SQL", icon: "/skills/sql.svg" },
      { name: "Bash", icon: "/skills/bash-1.svg" },
      { name: "Python", icon: "/skills/python-5.svg" },
      { name: "PHP", icon: "/skills/php-4.svg" },
      { name: "HTML", icon: "/skills/html-1.svg" },
      { name: "CSS", icon: "/skills/css-3.svg" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Tailwind CSS", icon: "/skills/tailwind-css-icon.svg" },
      { name: "React.js", icon: "/skills/react-2.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "Django", icon: "/skills/django-svgrepo-com.svg" },
      { name: "Redux", icon: "/skills/redux.svg" },
      { name: "Axios", icon: "/skills/axios.svg" },
      { name: "Bootstrap", icon: "/skills/bootstrap-5-1.svg" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "/skills/mysql-3.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "/skills/git-icon.svg"},
      { name: "GitHub", icon: "/skills/github-icon-1.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "Linux", icon: "/skills/linux.svg"},
      { name: "JWT", icon: "/skills/jwt-3.svg" },
    ]
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Mentor - FAANG Interview Prep",
    des: "• Engineered an AI-driven platform that generates coding solutions in under 10 seconds for FAANG technical interviews",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://faangaimentor.vercel.app/",
  },
  {
    id: 2,
    title: "AI Tech Interview",
    des: "A interview preparation platform powered by Vapi AI Voice agents",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", 
      "/firebase.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Crux AI – PDF Summarization Assistant",
    des: "AI-powered tool that extracts key insights from PDFs with an accuracy exceeding 95%.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/rpay.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Cricket Scoreboard – Real-Time Cricket App",
    des: "Created a application delivering real-time match scores and detailed statistics with updates every 1 second via WebSockets.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ws.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 16 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/https://apple-umber-theta.vercel.app/",
  },
    {
    id: 6,
    title: "OCR Image to Text",
    des: "Your Image to Text Converter extracts text from images with lightning-fast speed and exceptional accuracy, making digitization effortless.",
    img: "/p6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/https://ocr-tan.vercel.app",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Remote AI Training Coding Expert",
    desc: "AI trainer coder at Outlier helps train generative AI models.This role is fully remote.",
    className: "md:col-span-2",
    thumbnail: "https://app.outlier.ai/static/img/outlier/logotype.svg",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    desc: "  Offering expert web development services to clients across various industries, delivering high-quality solutions and exceeding expectations.",
    className: "md:col-span-2",
    thumbnail: "gig.jpg",
  },
  {
    id: 3,
    title: "Expert Computer Science",
    desc: "Utilized expertise in Computer Science to deliver comprehensive support to students, fostering understanding and academic growth.",
    className: "md:col-span-2",
    thumbnail: "chegg.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/krishprav",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Praveen44309492",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/krishprav/",
  },
  {
    id: 4,
    img: "/wapp.svg",
    link: "https://wa.me/qr/KPATS2REZUJZD1 ",
  },
  {
    id: 5,
    img: "/discord.svg",
    link: "https://discord.com/users/krishprav9182",
  },
  {
    id: 6,
    icon: "/call.svg",
    link: "tel:+91 9182730962",
  },
];
