import type { JSX } from "react";
import ReactIcon from "./assets/reactIcon";
import GatsbyIcon from "./assets/gatsbyIcon";
import TypescriptIcon from "./assets/typescriptIcon";
import JavaIcon from "./assets/javaIcon";
import SpringIcon from "./assets/springIcon";
import NodeIcon from "./assets/nodeIcon";
import ExpressIcon from "./assets/expressIcon";
import MySqlIcon from "./assets/mySqlIcon";
import PostgresIcon from "./assets/postgresIcon";
import MongoDbIcon from "./assets/mongoDbIcon";
import DockerIcon from "./assets/dockerIcon";
import GitlabIcon from "./assets/gitlabIcon";
import VisualStudioIcon from "./assets/visualStudioIcon";
import VsCodeIcon from "./assets/vsCodeIcon";
import IntellijIcon from "./assets/intellijIcon";

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

const skillsEn = [
  {
    title: 'Frontend',
    tech: (
      <>
        <span title="React" className="skill-icon"><ReactIcon /></span>
        <span title="Gatsby" className="skill-icon"><GatsbyIcon /></span>
        <span title="TypeScript" className="skill-icon"><TypescriptIcon /></span>
      </>
    ),
  },
  {
    title: 'Backend',
    tech: (
      <>
        <span title="Java" className="skill-icon"><JavaIcon /></span>
        <span title="Spring Boot" className="skill-icon"><SpringIcon /></span>
        <span title="NodeJs" className="skill-icon"><NodeIcon /></span>
        <span title="ExpressJs" className="skill-icon"><ExpressIcon /></span>
      </>
    ),
  },
  {
    title: 'Database',
    tech: (
      <>
        <span title="MySQL" className="skill-icon"><MySqlIcon /></span>
        <span title="PostreSQL" className="skill-icon"><PostgresIcon /></span>
        <span title="MongoDB" className="skill-icon"><MongoDbIcon /></span>
      </>
    ),
  },
  {
    title: 'DevOps',
    tech: (
      <>
        <span title="Docker" className="skill-icon"><DockerIcon /></span>
      </>
    ),
  },
  {
    title: 'CI/CD',
    tech: (
      <>
        <span title="Gitlab CI" className="skill-icon"><GitlabIcon /></span>
      </>
    ),
  },
  {
    title: 'Tools',
    tech: (
      <>
        <span title="Visual Studio" className="skill-icon"><VisualStudioIcon /></span>
        <span title="Visual Studio Code" className="skill-icon"><VsCodeIcon /></span>
        <span title="Intellij" className="skill-icon"><IntellijIcon /></span>
      </>
    ),
  },
];

// const skillsFr = [
//   {
//     title: 'Frontend',
//     tech: (
//       <>
//         <span title="React" className="skill-icon"><ReactIcon /></span>
//         <span title="Gatsby" className="skill-icon"><GatsbyIcon /></span>
//         <span title="TypeScript" className="skill-icon"><TypescriptIcon /></span>
//       </>
//     ),
//   },
//   {
//     title: 'Backend',
//     tech: (
//       <>
//         <span title="Java" className="skill-icon"><JavaIcon /></span>
//         <span title="Spring Boot" className="skill-icon"><SpringIcon /></span>
//       </>
//     ),
//   },
//   {
//     title: 'Base de données',
//     tech: (
//       <>
//         <span title="MySQL" className="skill-icon"><MySqlIcon /></span>
//         <span title="PostgreSQL" className="skill-icon"><PostgresIcon /></span>
//         <span title="MongoDB" className="skill-icon"><MongoDbIcon /></span>
//       </>
//     ),
//   },
//   {
//     title: 'DevOps',
//     tech: (
//       <>
//         <span title="Docker" className="skill-icon"><DockerIcon /></span>
//       </>
//     ),
//   },
//   {
//     title: 'CI/CD',
//     tech: (
//       <>
//         <span title="Gitlab CI" className="skill-icon"><GitlabIcon /></span>
//       </>
//     ),
//   },
//   {
//     title: 'Outils',
//     tech: (
//       <>
//         <span title="Visual Studio" className="skill-icon"><VisualStudioIcon /></span>
//         <span title="Visual Studio Code" className="skill-icon"><VsCodeIcon /></span>
//         <span title="Intellij" className="skill-icon"><IntellijIcon /></span>
//       </>
//     ),
//   },
// ];

const SkillCard = ({ title, tech }: { title: string; tech: JSX.Element }) => (
  <div className="flex flex-col h-full max-w-md lg:max-w-sm rounded-lg overflow-hidden border border-light-grey shadow-lg bg-white mb-4 py-4 px-4 space-y-8 hover:scale-105 transition-all duration-300">
    <p className="text-center text-3xl font-semibold italic !text-primary">{title}</p>
    <p className="flex flex-row space-x-4 space-y-4 mx-auto">{tech}</p>
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