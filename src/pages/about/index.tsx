import AboutIcon from './assets/about-icon.png';

const linksEn = [
  {
    title: 'About me',
    description_primary: 'Software developer | Passionate about Innovation and New Challenges',
    description_secondary: (
      <>
        Specialized in <span className="font-semibold"> front-end </span> development with <span className="font-semibold"> back-end </span> knowledge, I design intuitive and high-performance user interfaces. My expertise in <span className="font-semibold"> React, JavaScript/TypeScript, and HTML/CSS </span> allows me to transform creative ideas into responsive web applications.
      </>
    ),
    description_tertiary: 'Always on the lookout for the latest innovations, I strive to continuously improve my skills. I optimize performance and experiment with new approaches to create quality solutions that meet user needs.',
    contact: 'Contact me',
  }
]

// const linksFr = [
//   {
//     title: 'À propos de moi',
//     description_primary: 'Développeur logiciel | Passionné par l\'innovation et les nouveaux défis',
//     description_secondary: (
//       <>
//         Spécialisé dans le développement <span className="font-semibold"> front-end </span> avec des connaissances en <span className="font-semibold"> back-end </span>, je conçois des interfaces utilisateur intuitives et performantes. Mon expertise en <span className="font-semibold"> React, JavaScript/TypeScript et HTML/CSS </span> me permet de transformer des idées créatives en applications web réactives.
//       </>
//     ),
//     description_tertiary: "Toujours à l'affût des dernières innovations, je cherche constamment à améliorer mes compétences. J'optimise les performances et expérimente de nouvelles approches pour créer des solutions de qualité répondant aux besoins utilisateurs.",
//     contact: 'Contactez-moi',
//   }
// ]

const About : React.FC = () => {
  return (
    <section id="ABOUT" className="flex flex-col items-center py-4">
      {linksEn.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">
            {link.title}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8">
            <img src={AboutIcon} alt={link.title} className="hidden lg:block w-96 h-96" />
            <div className="flex flex-col space-y-4 max-w-xl">
              <p className="text-lg lg:text-xl !text-primary font-semibold italic">{link.description_primary}</p>
              <p className="text-base">{link.description_secondary}</p>
              <p className="text-base">{link.description_tertiary}</p>
              <div className="flex justify-center">
                <a href="" className="btn-primary w-48 md:w-52 text-center">
                  {link.contact} &#8680;
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;