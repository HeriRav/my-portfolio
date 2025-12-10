import { useEffect, useState } from "react";
import Eto from "./assets/eto.png";
import Tca from "./assets/tca.png";
import Samysamy from "./assets/samysamy.png";
import Miharyket from "./assets/miharyket.png";
import Zeno from "./assets/zeno.png";
import Blender from "./assets/blender.png";
import WordpressIcon from "./assets/wordpressIcon";
import CPlusPlusIcon from "./assets/cSharpIcon";
import ReactIcon from "./assets/reactIcon";
import GatsbyIcon from "./assets/gatsbyIcon";
import BlenderIcon from "./assets/blenderIcon";
import ClipPath from "./assets/clipPath";
import GithubIcon from "./assets/gitHubIcon";
import { useTranslation } from "react-i18next";

const Tooltip = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="relative group flex items-center justify-center min-w-[40px] min-h-[40px] max-w-[60px]">
    <div className="flex items-center justify-center w-full h-full">
      {children}
    </div>
    <div className="absolute z-50 bottom-full mb-2 px-2 py-1 rounded bg-dark-grey text-light-grey text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal lg:whitespace-nowrap pointer-events-none">
      {title}
    </div>
  </div>
);

const Works = () => {
  const { t } = useTranslation();

  const label = [
    {
      title: t("works.title"),
      description: t("works.description"),
      button_label: t("works.button"),
    },
  ];

  const worksLang = [
    {
      name: t("works.work_1.title"),
      description: t("works.work_1.description"),
      img: Eto,
      job: t("works.work_1.role"),
      technologies: ["WordPress", "PHP"],
      icon: <WordpressIcon />,
    },
    {
      name: t("works.work_2.title"),
      description: t("works.work_2.description"),
      img: Tca,
      job: t("works.work_2.role"),
      technologies: ["C#", ".NET", "Visual Studio", "SQL Server"],
      icon: <CPlusPlusIcon />,
    },
    {
      name: t("works.work_3.title"),
      description: t("works.work_3.description"),
      img: Samysamy,
      job: t("works.work_3.role"),
      technologies: ["C#", "WPF", "Visual Studio", "PostgeSQL"],
      icon: <CPlusPlusIcon />,
      link: "https://github.com/MendrikaRajaonarison/Samysamy",
      link_label: t("works.work_3.link"),
    },
    {
      name: t("works.work_4.title"),
      description: t("works.work_4.description"),
      img: Miharyket,
      job: t("works.work_4.role"),
      technologies: [
        "React",
        "Vite",
        "Bootstrap",
        "Spring Boot",
        "PostreSQL",
        "Stripe",
      ],
      icon: <ReactIcon />,
      link: "https://github.com/HeriRav/Miharyket-FrontEnd",
      other_link: "https://github.com/randrianiaina/mihary-back",
      link_label: t("works.work_4.link_1"),
      other_link_label: t("works.work_4.link_2"),
    },
    {
      name: t("works.work_5.title"),
      description: t("works.work_5.description"),
      img: Blender,
      job: t("works.work_5.role"),
      technologies: ["Blender", "Cycles"],
      icon: <BlenderIcon />,
      link: "/src/pages/works/blender/donut.blend",
      link_label: t("works.work_5.link"),
    },
    {
      name: t("works.work_6.title"),
      description: t("works.work_6.description"),
      img: Zeno,
      job: t("works.work_6.role"),
      technologies: [
        "Gatsby",
        "Typescript",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Atlas",
        "EmailJs",
      ],
      icon: <GatsbyIcon />,
      link: "https://github.com/HeriRav/landing-page-zeno",
      link_label: t("works.work_6.link_1"),
      other_link: "https://landing-page-zeno.vercel.app/",
      other_link_label: t("works.work_6.link_2"),
    },
  ];

  type Work = (typeof worksLang)[number];

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const openModal = (work: Work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  const handleProjectLinkClick = () => {
    if (selectedWork && selectedWork.link) {
      window.open(selectedWork.link, "_blank");
    }
  };

  const handleOtherProjectLinkClick = () => {
    if (selectedWork && selectedWork.other_link) {
      window.open(selectedWork.other_link, "_blank");
    }
  };

  // Handle body overflow when modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedWork]);

  return (
    <section id="WORKS" className="flex flex-col items-center py-4">
      {label.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">{link.title}</h2>
          <p className="text-center text-3xl mb-6 !text-dark-grey">
            {link.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
            {worksLang.map((work, idx) => (
              <div
                key={idx}
                className="relative flex flex-col h-full max-w-md lg:max-w-sm rounded-lg overflow-hidden border border-light-grey shadow-lg bg-white mb-4 transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-dark-grey opacity-0 hover:opacity-95 transition-all duration-300 z-10">
                  <button
                    onClick={() => openModal(work)}
                    className="bg-white font-semibold rounded-full px-6 py-4"
                  >
                    {link.button_label}
                  </button>
                </div>
                <img className="w-full h-full" src={work.img} alt="Work" />
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Modal */}
      {selectedWork && (
        <div
          className="animate-fadeIn duration-300 fixed inset-0 bg-gradient-to-br from-dark/90 via-primary/30 to-dark/90 backdrop-blur-sm flex justify-center items-center z-99"
          onClick={closeModal}
        >
          <div
            className="duration-500 bg-white rounded-lg p-8 max-w-2xl w-full relative shadow-2xl border border-light-grey/50 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-row items-start mb-6">
              <div className="flex flex-row items-center">
                <h2 className="text-4xl !text-transparent font-bold italic bg-gradient-to-r from-primary via-primary-hover to-secondary bg-clip-text leading-tight">
                  {selectedWork.name}
                </h2>
                <p className="px-2">{selectedWork.icon}</p>
              </div>
              <button
                onClick={closeModal}
                className="ml-auto -mt-2 -mr-2 p-3 rounded-full bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-all duration-300 transform hover:scale-100 hover:rotate-90 group"
              >
                &#10006;
              </button>
            </div>
            <div className="relative overflow-hidden rounded-lg mb-6 group">
              <img
                className="w-full h-fit object-cover bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg transition-transform duration-500 group-hover:scale-105"
                src={selectedWork.img}
                alt="Portfolio Website Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold !text-dark-grey underline decoration-primary-hover decoration-2 underline-offset-4">
                {selectedWork.job}
              </p>
            </div>
            <div className="mb-6">
              <p className="!text-dark-grey text-lg leading-relaxed">
                {selectedWork.description}
              </p>
            </div>
            <div className="flex flex-row items-start mb-4">
              <div className="flex flex-wrap gap-3">
                <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-full px-6 py-3 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="bg-gradient-to-r from-primary to-secondary-hover bg-clip-text !text-transparent text-sm font-bold">
                    {selectedWork.technologies.join(" | ")}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-x-10">
              {selectedWork.link && (
                <div className="transition-all duration-300 transform hover:scale-110 group border border-dark-grey rounded-full p-2">
                  <Tooltip title={selectedWork.link_label}>
                    <button onClick={handleProjectLinkClick}>
                      {selectedWork.link?.includes("github") ? (
                        <GithubIcon />
                      ) : (
                        <ClipPath />
                      )}
                    </button>
                  </Tooltip>
                </div>
              )}
              {selectedWork.other_link && (
                <div className="transition-all duration-300 transform hover:scale-110 group border border-dark-grey rounded-full p-2">
                  <Tooltip title={selectedWork.other_link_label}>
                    <button onClick={handleOtherProjectLinkClick}>
                      {selectedWork.other_link?.includes("github") ? (
                        <GithubIcon />
                      ) : (
                        <ClipPath />
                      )}
                    </button>
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
