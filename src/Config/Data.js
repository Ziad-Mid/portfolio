import ENSA from "../assets/ENSA.png";
import INFOSAT from "../assets/INFOSAT.png";
import {
  SiChakraui,
  SiCodingame,
  SiFirebase,
  SiJavascript,
  SiMaterialui,
  SiMysql,
  SiOracle,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaHackerrank,
  FaGitAlt,
  FaJava,
  FaReact,
} from "react-icons/fa";


export const education = [
  {
    title: "National school of applied sciences - Agadir",
    alt: "ENSA Agadir",
    skills: ["Software engineering"],
    description:
      "The three years contain theoretical courses to found a strong basis in logical reasoning, that enriches one’s general thinking skills. Most of the courses are supported by practical workshops, and course ending projects, to develop student's skills in real world work.",
    role: "Master degree in Software engineering",
    period: "2019 – present",
    logo: ENSA,
  },
  {
    title: "National school of applied sciences - Agadir",
    alt: "ENSA Agadir",
    skills: ["Engineer"],
    description:
      "Preparatory classes are common core years of studies in an engineering school, it's mandatory in french educational system. Two years before the engineering cycle have as goals: mastery of fundamental disciplines, solid foundation in mathematics and engineering sciences., acquisition of technical & methodological, and reinforcement of autonomy.",
    role: "Integrated preparatory cycle",
    period: "2017 – 2019",
    logo: ENSA,
  },
];

export const experiences = [
  {
    title: "INFOSAT",
    alt: "INFOSAT",
    role: "Software Engineer intern",
    description:
      "As part of my end-of-year project, I did an internship at CROAS, an architect's council under the theme: The development and implementation of a web application for architecture project management, that simplified the process of submitting, verifying, and retrieving requests for new projects.",
    skills: [
      "Angular",
      "Spring Boot",
      "Bootstrap",
      "Javascript",
      "Mysql",
    ],
    period: "March 2021 – July 2021",
    logo: INFOSAT,
  },
];

export const technologies = [
  {
    name: "Java",
    link: "https://www.java.com/",
    icon: <FaJava />,
    color: "red.600"
  },
  {
    name: "Spring framework",
    link: "https://www.spring.io/",
    icon: <SiSpring />,
    color: "green.600"

  },
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: <FaReact />,
    color: "blue.600"
   
  },

  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    icon: <SiTailwindcss />,
    color: "blue.200"

  },
  {
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
    icon: <SiChakraui />,
    color: "teal.400"

  },
  {
    name: "Material UI",
    link: "https://mui.com/",
    icon: <SiMaterialui />,
    color: "blue.600"

  },
  {
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript />,
    color: "yellow.400"

  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
    color: "blue.500"

  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500"

  },
  {
    name: "Mysql",
    link: "https://www.mysql.com/",
    icon: <SiMysql />,
    color: "blue.600"

  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    icon: <SiFirebase />,
    color: "orange.500"

  },
  {
    name: "Oracle database",
    link: "https://www.oracle.com/",
    icon: <SiOracle />,
    color: "red.500"
  },
];




