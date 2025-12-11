import type { JSX } from "react";
import ReactIcon from "./assets/reactIcon";
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
import GitlabIcon from "./assets/gitlabIcon";
import VsCodeIcon from "./assets/vsCodeIcon";
import IntellijIcon from "./assets/intellijIcon";
import GitHubIcon from "./assets/gitHubIcon";
import GitIcon from "./assets/gitIcon";
import DockerIcon from "./assets/dockerIcon";
import PostmanIcon from "./assets/postmanIcon";
import { useTranslation } from "react-i18next";

const Tooltip = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="relative group flex flex-col items-center min-w-[56px] max-w-[72px]">
    <div className="skill-icon cursor-help">{children}</div>
    <div className="absolute z-50 bottom-full px-2 py-1 rounded bg-dark-grey text-light-grey text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal lg:whitespace-nowrap pointer-events-none">
      {title}
    </div>
  </div>
);

const SkillCard = ({ title, tech }: { title: string; tech: JSX.Element }) => (
  <div className="flex flex-col h-full max-w-md lg:max-w-sm rounded-lg border border-light-grey shadow-lg bg-white mb-4 py-4 px-4 space-y-8 transition-all duration-300">
    <div className="text-center text-3xl font-semibold italic !text-primary">
      {title}
    </div>
    <div className="flex flex-row flex-wrap space-x-4 space-y-4 mx-auto z-0">
      {tech}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();

  const linksEn = [
    {
      title: t("skills.title"),
      description: t("skills.description"),
    },
  ];

  const skillsEn = [
    {
      title: "Frontend",
      tech: (
        <>
          <Tooltip
            title={
              <>
                React
                <br />
                {t("skills.frontend.react")}
              </>
            }
          >
            <ReactIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Gatsby
                <br />
                {t("skills.frontend.gatsby")}
              </>
            }
          >
            <GatsbyIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Typescript
                <br />
                {t("skills.frontend.typescript")}
              </>
            }
          >
            <TypescriptIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Taiwind CSS
                <br />
                {t("skills.frontend.tailwind")}
              </>
            }
          >
            <TailwindIcon />
          </Tooltip>
        </>
      ),
    },
    {
      title: "Backend",
      tech: (
        <>
          <Tooltip
            title={
              <>
                Java
                <br />
                {t("skills.backend.java")}
              </>
            }
          >
            <JavaIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Spring Boot
                <br />
                {t("skills.backend.springBoot")}
              </>
            }
          >
            <SpringIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Node.js
                <br />
                {t("skills.backend.node")}
              </>
            }
          >
            <NodeIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Express.js
                <br />
                {t("skills.backend.express")}
              </>
            }
          >
            <ExpressIcon />
          </Tooltip>
        </>
      ),
    },
    {
      title: "Database",
      tech: (
        <>
          <Tooltip
            title={
              <>
                MySQL Database Service
                <br />
                {t("skills.database.mysql")}
              </>
            }
          >
            <MySqlIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Microsoft SQL Server
                <br />
                {t("skills.database.sqlServer")}
              </>
            }
          >
            <SqlServerIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                PostgreSQL
                <br />
                {t("skills.database.postgresql")}
              </>
            }
          >
            <PostgresIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                MongoDB
                <br />
                {t("skills.database.mongodb")}
              </>
            }
          >
            <MongoDbIcon />
          </Tooltip>
        </>
      ),
    },
    {
      title: "Version Control",
      tech: (
        <>
          <Tooltip
            title={
              <>
                Git
                <br />
                {t("skills.versionControl.git")}
              </>
            }
          >
            <GitIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                GitHub
                <br />
                {t("skills.versionControl.github")}
              </>
            }
          >
            <GitHubIcon />
          </Tooltip>
        </>
      ),
    },
    {
      title: "CI/CD",
      tech: (
        <>
          <Tooltip
            title={
              <>
                GitLab CI
                <br />
                {t("skills.cicd.gitlabCi")}
              </>
            }
          >
            <GitlabIcon />
          </Tooltip>
        </>
      ),
    },
    {
      title: "Tools",
      tech: (
        <>
          <Tooltip
            title={
              <>
                Visual Studio Code
                <br />
                {t("skills.tools.vsCode")}
              </>
            }
          >
            <VsCodeIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                IntelliJ IDEA
                <br />
                {t("skills.tools.intellij")}
              </>
            }
          >
            <IntellijIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Docker
                <br />
                {t("skills.tools.docker")}
              </>
            }
          >
            <DockerIcon />
          </Tooltip>
          <Tooltip
            title={
              <>
                Postman
                <br />
                {t("skills.tools.postman")}
              </>
            }
          >
            <PostmanIcon />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <section
      id="SKILLS"
      className="relative flex flex-col items-center py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-light-grey background-skill"></div>
      {linksEn.map((link, index) => (
        <div key={index} className="relative z-10 section-container">
          <h2 className="title">{link.title}</h2>
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
};

export default Skills;
