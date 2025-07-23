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

const linksEn = [
  {
    title: "My Works",
    description: "Showcasing my projects and contributions",
    button_label: "View details",
  },
];

// const linksFr = [
//   {
//     title: 'Mes Projets',
//     description: 'Présentation de mes projets et contributions',
//     button_label: 'Voir les détails',
//   },
// ]

const worksEn = [
  {
    name: "Eto.mg",
    description:
      "Comprehensive real estate website designed to facilitate transactions.",
    img: Eto,
    job: "Internship",
    technologies: ["WordPress", "PHP"],
    icon: <WordpressIcon />,
  },
  {
    name: "TCA (Airport Circular Title)",
    description:
      "Web application for requesting a permanent Airport Circular Title.",
    img: Tca,
    job: "Thesis Defense for Bachelor's Degree",
    technologies: ["C#", ".NET", "Visual Studio", "SQL Server"],
    icon: <CPlusPlusIcon />,
  },
  {
    name: "Samysamy",
    description: "Platform connecting freelancers and companies.",
    img: Samysamy,
    job: "Exam Project",
    technologies: ["C#", "WPF", "Visual Studio", "PostgeSQL"],
    icon: <CPlusPlusIcon />,
  },
  {
    name: "Mihary'ket",
    description: "Online sales platform for handicraft products.",
    img: Miharyket,
    job: "Thesis Defense for Master's Degree",
    technologies: [
      "React",
      "Vite",
      "Bootstrap",
      "Spring Boot",
      "PostreSQL",
      "Stripe",
    ],
    icon: <ReactIcon />,
  },
  {
    name: "Blender - Donut",
    description:
      "3D donut modeling project using Blender with Cycles render engine.",
    img: Blender,
    job: "Personal Project",
    technologies: ["Blender", "Cycles"],
    icon: <BlenderIcon />,
  },
  {
    name: "Zeno Landing Page",
    description: "Showcase site",
    img: Zeno,
    job: "Permanent Contract Mission",
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
  },
];

type Work = (typeof worksEn)[number];

const Works = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const openModal = (work: Work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
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
      {linksEn.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">{link.title}</h2>
          <p className="text-center text-3xl mb-6 !text-dark-grey">
            {link.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
            {worksEn.map((work, idx) => (
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
              <h2 className="text-4xl !text-transparent font-bold italic bg-gradient-to-r from-primary via-primary-hover to-secondary bg-clip-text leading-tight">
                {selectedWork.name}
              </h2>
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
            <div className="flex flex-wrap gap-3">
              <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-full px-6 py-3 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="bg-gradient-to-r from-primary to-secondary-hover bg-clip-text !text-transparent text-sm font-bold">
                  {selectedWork.technologies.join(" | ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
