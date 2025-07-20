import type { JSX } from "react";
import ReactIcon from "./assets/reactIcon";
import ViteIcon from "./assets/viteIcon";
import GatsbyIcon from "./assets/gatsbyIcon";
import TypescriptIcon from "./assets/typescriptIcon";
import TailwindIcon from "./assets/tailwindIcon";
import JavaIcon from "./assets/javaIcon";
import SpringIcon from "./assets/springIcon";
import NodeIcon from "./assets/nodeIcon";
import ExpressIcon from "./assets/expressIcon";
import MySqlIcon from "./assets/mySqlIcon";
import SqlServerIcon from "./assets/sqlServerIcon";
import PostgresIcon from "./assets/postgresIcon";
import MongoDbIcon from "./assets/mongoDbIcon";
import DockerIcon from "./assets/dockerIcon";
import GitlabIcon from "./assets/gitlabIcon";
import VisualStudioIcon from "./assets/visualStudioIcon";
import VsCodeIcon from "./assets/vsCodeIcon";
import IntellijIcon from "./assets/intellijIcon";
import GitHubIcon from "./assets/gitHubIcon";

const linksEn = [
  {
    title: 'My Skills',
    description: 'A showcase of my technical skills and expertise',
  },
];

// const linksFr = [
//   {
//     title: 'Mes Compétences',
//     description: 'Une vitrine de mes compétences techniques et expertise',
//   },
// ];

const Tooltip = ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => (
  <div className="relative group flex flex-col items-center min-w-[56px] max-w-[72px]">
    <div className="skill-icon cursor-help">{children}</div>
    <div className="absolute z-50 bottom-full px-2 py-1 rounded bg-dark-grey text-light-grey text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal lg:whitespace-nowrap pointer-events-none">
      {title}
    </div>
  </div>
);

const skillsEn = [
  {
    title: 'Frontend',
    tech: (
      <>
        <Tooltip title={<>Frontend<br />Front-end JavaScript library</>}>
          <ReactIcon />
        </Tooltip>
        <Tooltip title={<>Vite<br />Development server</>}>
          <ViteIcon />
        </Tooltip>
        <Tooltip title={<>Gatsby<br />React-based open source framework</>}>
          <GatsbyIcon />
        </Tooltip>
        <Tooltip title={<>Typescript<br />A strongly typed programming language that builds on JavaScript</>}>
          <TypescriptIcon />
        </Tooltip>
        <Tooltip title={<>Taiwind CSS<br />Utility-first CSS framework</>}>
          <TailwindIcon />
        </Tooltip>
      </>
    ),
  },
  {
    title: 'Backend',
    tech: (
      <>
        <Tooltip title={<>Java<br />High-level object-oriented programming language</>}>
          <JavaIcon />
        </Tooltip>
        <Tooltip title={<>Spring Boot<br />Java framework / Spring Framework extension</>}>
          <SpringIcon />
        </Tooltip>
        <Tooltip title={<>Node.js<br />JavaScript runtime environment</>}>
          <NodeIcon />
        </Tooltip>
        <Tooltip title={<>Express.js<br />Node.js Framework</>}>
          <ExpressIcon />
        </Tooltip>
      </>
    ),
  },
  {
    title: 'Database',
    tech: (
      <>
        <Tooltip title={<>MySQL Database Service<br />Popular open-source relational database</>}>
          <MySqlIcon />
        </Tooltip>
        <Tooltip title={<>Microsoft SQL Server<br />Microsoft’s enterprise-grade SQL database</>}>
          <SqlServerIcon />
        </Tooltip>
        <Tooltip title={<>PostgreSQL<br />Advanced open-source relational database</>}>
          <PostgresIcon />
        </Tooltip>
        <Tooltip title={<>MongoDB<br />NoSQL database using flexible JSON-like documents</>}>
          <MongoDbIcon />
        </Tooltip>
      </>
    ),
  },
  {
    title: 'DevOps',
    tech: (
      <>
        <Tooltip title={<>Docker<br />Run apps in isolated containers</>}>
          <DockerIcon />
        </Tooltip>
      </>
    ),
  },
  {
    title: 'CI/CD',
    tech: (
      <>
        <Tooltip title={<>GitLab CI<br />Continuously build, test, and deploy code changes</>}>
          <GitlabIcon />
        </Tooltip>
      </>
    ),
  },
  {
    title: 'Tools',
    tech: (
      <>
        <Tooltip title={<>Visual Studio<br />Microsoft’s full-featured IDE for development</>}>
          <VisualStudioIcon />
        </Tooltip>
        <Tooltip title={<>Visual Studio Code<br />Fast, customizable code editor by Microsoft</>}>
          <VsCodeIcon />
        </Tooltip>
        <Tooltip title={<>IntelliJ IDEA<br />JetBrains IDE for professional Java development</>}>
          <IntellijIcon />
        </Tooltip>
        <Tooltip title={<>GitHub<br />Platform for hosting and collaborating on code</>}>
          <GitHubIcon />
        </Tooltip>
      </>
    ),
  },
];

const SkillCard = ({ title, tech }: { title: string; tech: JSX.Element }) => (
  <div className="flex flex-col h-full max-w-md lg:max-w-sm rounded-lg border border-light-grey shadow-lg bg-white mb-4 py-4 px-4 space-y-8 hover:scale-105 transition-all duration-300">
    <p className="text-center text-3xl font-semibold italic !text-primary">{title}</p>
    <p className="flex flex-row flex-wrap space-x-4 space-y-4 mx-auto z-0">{tech}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="SKILLS" className="flex flex-col items-center py-4 bg-light-grey">
      {linksEn.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">
            {link.title}
          </h2>
          <p className="text-center text-3xl mb-6 !text-dark-grey">
            {link.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {skillsEn.map((skill, idx) => (
              <SkillCard key={idx} title={skill.title} tech={skill.tech} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;