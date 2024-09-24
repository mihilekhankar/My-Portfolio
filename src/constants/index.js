import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";

export const HERO_CONTENT = `I am a passionate Software Test Engineer with 4+ years of professional experience, including 2+ years in Quality Assurance and 2 years as a Technical Support Executive. Hands-on experience specializing in meticulous testing of software mobile, and web applications. Proficient in utilizing a diverse set of testing tools to ensure the delivery of high-quality software. Specializing in various testing methodologies, including manual, automation, agile, smoke, regression, accessibility, and functional testing. Adept at crafting comprehensive testing plans and implementing robust test cases.`;

export const ABOUT_TEXT = `I have a total of 4.2 years of professional experience, including 2.2 years in Quality Assurance and 2 years as a Technical Support Executive. My experience in QA has equipped me with strong skills in test planning, execution, defect management, and collaboration within agile teams. My technical support background has further enhanced my analytical skills, problem-solving ability, and communication with both technical and non-technical stakeholders. In addition, I am actively learning programming in C#, .NET, and ReactJS, which I believe will enhance my ability to work effectively in QA roles, particularly those involving automation and integration testing.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Test Engineer",
    company: "Tech Mahindra",
    description: `Mobile and web application software tester specializing in meticulous testing and bug identification. Responsible for Functional Testing, System Testing, Black box Testing, Regression Testing, Smoke Testing, and Accessibility Testing for two of the most popular social media applications from Meta. Served as POC in the company-wide initiative for process improvement.`,
    technologies: ["Functional", "Regression", "Smoke", "Accessibility", "Web"],
  },
  {
    year: "2020 - 2022",
    role: " Technical Support Specialist",
    company: "Teleperformance (Xiaomi India)",
    description: ` I excel in diagnosing and resolving complex technical issues, leveraging my in-depth knowledge of hardware, software and network systems. Proficient in troubleshooting, I ensure seamless functionality and user satisfaction.`,
  technologies:[]
  },
];


export const PROJECTS = [
  {
    url: "https://github.com/mihilekhankar/Xcalibur-AI",
    title: "Xcalibur AI",
    image: project1,
    description:
      "Excalibur AI is designed to leverage the advanced capabilities of Gemini for natural language understanding, text generation, code writing, and more.",
    technologies: ["ReactJS", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    url: "https://github.com/mihilekhankar/My-Portfolio",
    title: "My Portfolio",
    image: project2,
    description:
      "A fully responsive and dynamic platform developed site, showcasing my experience, projects and personal details.",
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS"],
  },
  {
    url: "https://github.com/nullbyte01/Image-converter",
    title: "Image Converter",
    image: project3,
    description:
      "Blazor WASM image converter using ffmpeg This is a simple blazor Webassembly project to learn blazor WASM, and its deployment cycle using GitHub Actions.",
    technologies: ["C#", "Blazor", "WebAssembly", "ffmpeg"],
  },
  {
    url: "https://github.com/mihilekhankar/Snake-js",
    title: "Snake Game",
    image: project4,
    description:
      "A classic Snake game runs on web browsers. Created while learning Javascript",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Mumbai - India",
  phoneNo: "+91 84011-43043 ",
  email: "mihilekhankar@gmail.com",
};
