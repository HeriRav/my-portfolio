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
    title: 'My Works',
    description: 'Showcasing my projects and contributions',
    button_label: 'View details',
  },
]

// const linksFr = [
//   {
//     title: 'Mes Projets',
//     description: 'Présentation de mes projets et contributions',
//     button_label: 'Voir les détails',
//   },
// ]

const worksEn = [
  {
    name: 'Eto.mg',
    description: 'Comprehensive real estate website designed to facilitate transactions.',
    img: Eto,
    job: 'Internship',
    technologies: ['WordPress', 'PHP'],
    icon: <WordpressIcon />,
  },
  {
    name: 'TCA (Airport Circular Title)',
    description: 'Web application for requesting a permanent Airport Circular Title.',
    img: Tca,
    job: 'Thesis Defense for Bachelor\'s Degree',
    technologies: ['C#', '.NET', 'Visual Studio', 'SQL Server'],
    icon: <CPlusPlusIcon />,
  },
  {
    name: 'Samysamy',
    description: 'Platform connecting freelancers and companies.',
    img: Samysamy,
    job: 'Exam Project',
    technologies: ['C#', 'WPF', 'Visual Studio', 'PostgeSQL'],
    icon: <CPlusPlusIcon />,
  },
  {
    name: 'Mihary\'ket',
    description: 'Online sales platform for handicraft products.',
    img: Miharyket,
    job: 'Thesis Defense for Master\'s Degree',
    technologies: ['React', 'Vite', 'Bootstrap', 'Spring Boot', 'PostreSQL', 'Stripe'],
    icon: <ReactIcon />,
  },
  {
    name: 'Blender - Donut',
    description: '3D donut modeling project using Blender with Cycles render engine.',
    img: Blender,
    job: 'Personal Project',
    technologies: ['Blender', 'Cycles'],
    icon: <BlenderIcon />,
  },
  {
    name: 'Zeno Landing Page',
    description: 'Showcase site',
    img: Zeno,
    job: 'Permanent Contract Mission',
    technologies: ['Gatsby', 'Typescript', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Atlas', 'EmailJs'],
    icon: <GatsbyIcon />,
  },
];

type Work = typeof worksEn[number];

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to reset overflow when component unmounts or modal closes
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedWork]);

  return (
    <section id="WORKS" className="flex flex-col items-center py-4">
      {linksEn.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">
            {link.title}
          </h2>
          <p className="text-center text-3xl mb-6 !text-dark-grey">
            {link.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
            {worksEn.map((work, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col h-full max-w-md lg:max-w-sm rounded-lg overflow-hidden border border-light-grey shadow-lg bg-white mb-4 hover:scale-105 transition-all duration-300" 
                >
                <div className="absolute inset-0 flex items-center justify-center bg-dark-grey opacity-0 hover:opacity-95 transition-opacity duration-300 z-10">
                    <button
                    onClick={() => openModal(work)}
                    className="bg-white font-semibold rounded-full px-6 py-4"
                    >
                      {link.button_label}
                    </button>
                </div>
                <img className="w-full h-48" src={work.img} alt="Work" />
                <div className="flex flex-row px-6 py-4">
                  <div className="font-semibold italic text-primary text-xl">{work.name}</div>
                  <span className="ml-auto">{work.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Modal */}
      {selectedWork && (
        <div 
          className="animate-fadeIn fixed inset-0 bg-black/80 flex justify-center items-center z-50" 
          onClick={closeModal}
        >
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-row">
              <h2 className="text-3xl font-bold italic mb-4 !text-primary">{selectedWork.name}</h2>
              <button
                onClick={closeModal}
                className="text-dark-grey hover:text-red-500 transition-all duration-300 ml-auto mb-auto"
              >
                &#10006;
              </button>
            </div>
            <img className="w-full h-fit md:h-48 md:object-contain bg-dark-grey rounded-lg px-6 mb-4" src={selectedWork.img} alt="Work" />
            <p className="px-6 underline !text-dark-grey text-2xl font-semibold">{selectedWork.job}</p>
            <p className="px-6 py-4 !text-dark-grey text-base">{selectedWork.description}</p>
            <div className="flex flex-wrap px-6 py-4">
              <span className="bg-secondary rounded-full px-3 py-2 text-sm font-semibold !text-secondary-hover text-center">
                {selectedWork.technologies.join(' | ')}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;