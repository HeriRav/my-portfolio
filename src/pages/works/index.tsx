import Eto from "./assets/eto.png";
import Tca from "./assets/tca.png";
import Samysamy from "./assets/samysamy.png";
import Miharyket from "./assets/miharyket.png";
import Zeno from "./assets/zeno.png";
import WordpressIcon from "./assets/wordpressIcon";
import CPlusPlusIcon from "./assets/cSharpIcon";
import ReactIcon from "./assets/reactIcon";
import GatsbyIcon from "./assets/gatsbyIcon";

const linksEn = [
  {
    title: 'My Works',
    description_primary: 'Showcasing my projects and contributions',
  },
]

// const linksFr = [
//   {
//     title: 'Mes Projets',
//     description_primary: 'Présentation de mes projets et contributions',
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
    name: 'TCA',
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
    technologies: ['React', 'JavaScript', 'Vite', 'Bootstrap', 'VS Code'],
    icon: <ReactIcon />,
  },
  {
    name: 'Zeno Landing Page',
    description: 'Online sales platform for Malagasy handicraft products.',
    img: Zeno,
    job: 'Permanent Contract',
    technologies: ['Gatsby', 'Tailwind CSS', 'AOS', 'EmailJs', 'VS Code'],
    icon: <GatsbyIcon />,
  },
]

const Works = () => {
  return (
    <section id="WORKS" className="flex flex-col items-center py-4">
      {linksEn.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">
            {link.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center">
            {worksEn.map((work, idx) => (
              <div key={idx} className="flex flex-col h-full max-w-md lg:max-w-sm rounded-lg overflow-hidden border border-light-grey shadow-lg bg-white mb-4">
                <img className="w-full h-48" src={work.img} alt="Logo" />
                <div className="flex flex-row px-6 py-4">
                  <div className="font-semibold text-primary text-xl">{work.name}</div>
                  <span className="ml-auto">{work.icon}</span>
                </div>
                <div className="px-6 underline">
                  <p className="!text-dark-grey text-base font-semibold">
                    {work.job}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="!text-dark-grey text-base">
                    {work.description}
                  </p>
                </div>
                <div className="flex flex-wrap px-6 py-4 mx-auto">
                  <span className="bg-secondary rounded-full px-3 py-2 text-sm font-semibold !text-secondary-hover text-center">
                    {work.technologies.join(' | ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Works;