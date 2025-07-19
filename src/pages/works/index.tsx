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
    description_primary: 'Showcasing my projects and contributions',
    button_label: 'View details',
  },
]

// const linksFr = [
//   {
//     title: 'Mes Projets',
//     description_primary: 'Présentation de mes projets et contributions',
//     button_label: 'Voir les détails',
//   },
// ]

const worksEn = [
  {
    name: 'Eto.mg',
    description: 'Comprehensive real estate website designed to facilitate transactions in Madagascar.',
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
    technologies: ['C#', '.NET', 'Visual Studio'],
    icon: <CPlusPlusIcon />,
  },
  {
    name: 'Samysamy',
    description: 'Platform connecting freelancers and companies.',
    img: Samysamy,
    job: 'Exam Project',
    technologies: ['C#', 'WPF', 'Visual Studio'],
    icon: <CPlusPlusIcon />,
  },
  {
    name: 'Mihary\'ket',
    description: 'Online sales platform for Malagasy handicraft products.',
    img: Miharyket,
    job: 'Thesis Defense for Master\'s Degree',
    technologies: ['React', 'JavaScript', 'Vite', 'Bootstrap'],
    icon: <ReactIcon />,
  },
  {
    name: 'Zeno Landing Page',
    description: 'Online sales platform for Malagasy handicraft products.',
    img: Zeno,
    job: 'Permanent Contract Mission',
    technologies: ['Gatsby', 'Typescript', 'Tailwind CSS', 'EmailJs'],
    icon: <GatsbyIcon />,
  },
  {
    name: 'Blender - Donut',
    description: '3D donut modeling project using Blender with Cycles Render Engine.',
    img: Blender,
    job: 'Permanent Contract Mission',
    technologies: ['Blender', 'Cycles'],
    icon: <BlenderIcon />,
  },
]

// const worksFr = [
//   {
//     name: 'Eto.mg',
//     description: 'Site web complet pour faciliter les transactions immobilières à Madagascar.',
//     img: Eto,
//     job: 'Stage',
//     technologies: ['WordPress', 'PHP'],
//     icon: <WordpressIcon />,
//   },
//   {
//     name: 'TCA (Titre Circulaire Aéroportuaire)',
//     description: 'Application web pour la demande de Titre Circulaire Aéroportuaire permanent.',
//     img: Tca,
//     job: 'Soutenance de mémoire de Licence',
//     technologies: ['C#', '.NET', 'Visual Studio'],
//     icon: <CPlusPlusIcon />,
//   },
//   {
//     name: 'Samysamy',
//     description: 'Plateforme de mise en relation entre freelances et entreprises.',
//     img: Samysamy,
//     job: 'Projet d\'examen',
//     technologies: ['C#', 'WPF', 'Visual Studio'],
//     icon: <CPlusPlusIcon />,
//   },
//   {
//     name: 'Mihary\'ket',
//     description: 'Plateforme de vente en ligne de produits artisanaux malgaches.',
//     img: Miharyket,
//     job: 'Soutenance de mémoire de Master',
//     technologies: ['React', 'JavaScript', 'Vite', 'Bootstrap'],
//     icon: <ReactIcon />,
//   },
//   {
//     name: 'Zeno Landing Page',
//     description: 'Page d\'atterrissage pour la vente en ligne de produits artisanaux malgaches.',
//     img: Zeno,
//     job: 'Mission en CDI',
//     technologies: ['Gatsby', 'Typescript', 'Tailwind CSS', 'EmailJs'],
//     icon: <GatsbyIcon />,
//   },
//   {
//     name: 'Blender - Donut',
//     description: 'Modélisation 3D d\'un donut avec Blender utilisant le moteur de rendu Cycles.',
//     img: Blender,
//     job: 'Mission en CDI',
//     technologies: ['Blender', 'Cycles'],
//     icon: <BlenderIcon />,
//   },
// ]

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
                <div className="flex flex-wrap px-6 py-4">
                  <span className="bg-secondary rounded-full px-3 py-2 text-sm font-semibold !text-secondary-hover text-center">
                    {work.technologies.join(' | ')}
                  </span>
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
            <p className="px-6 underline !text-dark-grey text-lg font-semibold">{selectedWork.job}</p>
            <p className="px-6 py-4 !text-dark-grey text-base">{selectedWork.description}</p>
            <div className="flex flex-wrap px-6 py-4">
              <span className="bg-secondary rounded-full px-3 py-2 text-sm font-semibold !text-secondary-hover text-center">
                {selectedWork.technologies.join(', ')}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;