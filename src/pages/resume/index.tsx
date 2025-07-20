const linksEn = [
  {
    title: 'My Resume',
    description: 'My professional and academic background.',
    intro:
      'Since graduating, I have quickly entered the professional world, which allows me to develop my skills on a daily basis.',
  },
];

const professionalEn = [
  {
    title: 'Zeno Inno',
    contract: 'Full time',
    start_date: 'August 2024',
    end_date: 'Ongoing',
    job: 'Software Developer',
    description:
      "Creating dynamic user interfaces with React. Integrating reusable components using Tailwind CSS. Working closely with product teams to improve user experience.",
  },
  {
    title: 'Zeno Inno',
    contract: 'Internship',
    start_date: 'May 2024',
    end_date: 'July 2024',
    job: 'Intern Software Developer',
    description:
      'Implemented a batch processing system with Spring Batch targeting a PostgreSQL database, and developed a drag-and-drop UI feature using React.',
  },
  {
    title: 'Personal Project',
    contract: 'Side project',
    start_date: 'Dec 2023',
    end_date: 'Mars 2024',
    job: '3D Model Designer',
    description:
      'Designed and modeled a realistic 3D donut using Blender, focusing on shape, texture, and lighting. Created a decorative background to enhance visual appeal and scene composition, emphasizing color harmony and depth. This project demonstrated proficiency in 3D modeling, materials, and rendering techniques.',
  },
  {
    title: 'Software Overseas Academy (SOA)',
    contract: 'Fixed-term contract',
    start_date: 'April 2023',
    end_date: 'October 2023',
    job: 'Software Application Developer',
    description:
      'Responsible for the development and maintenance of the application. Designed and integrated end-to-end tests as part of a major application redesign to ensure system reliability and performance.',
  },
  {
    title: 'Inclusiv Academy',
    contract: 'Bootcamp',
    start_date: 'October 2022',
    end_date: 'April 2023',
    job: 'Digital Application Designer & Developer',
    description:
      '- Project Web: Conceived and implemented a web application using React.js, Spring Boot, and PostgreSQL. This platform connects farmers directly with end customers, enhancing the agricultural supply chain. \n- Project Desktop: Designed and developed a desktop application using Visual Studio, WPF (.NET Framework, C#), and PostgreSQL. The app facilitates connections between freelancers and companies, streamlining the hiring process.',
  },
  {
    title: 'Your Target Agency',
    contract: 'Internship',
    start_date: 'October 2021',
    end_date: 'Mars 2022',
    job: 'Intern Wordpress Developer',
    description:
      '- Implemented a local development environment using XAMPP. \n- Developed and launched a real estate website using WordPress. \n- Redesigned the webmaster-madagascar.com website with WordPress Elementor. \n- Integrated product listings for the supermarket "Kibo" on PrestaShop. \n- Created and managed a blog page on the Best Place website.',
  },
];

const academicEn = [
  {
    title: 'Inclusiv Academy',
    degree: 'RNCP Level 6 certification, equivalent to the first year of a Master\'s degree',
    start_date: 'Septembre 2022',
    end_date: 'April 2023',
    description: 'Obtained RNCP Level 6 certification, recognized as equivalent to the first year of a Master’s degree in France.',
  },
  {
    title: 'Espace Universitaire Régional de l\'Océan Indien (EUROI)',
    degree: 'Professional Bachelor\'s Degree in Electronics / Computer Science / Telecommunications',
    start_date: 'Septembre 2022',
    end_date: 'April 2023',
    description: 'Obtained a Professional Bachelor\'s Degree in Electronics, Computer Science, and Telecommunications after successfully defending my thesis.',
  },
];

const Timeline = ({
  items,
  isAcademic = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  isAcademic?: boolean;
}) => (
  <div className="relative my-12">
    {/* Ligne verticale */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-light-grey" />
    <div className="flex flex-col gap-16">
      {items.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            key={i}
            className={`relative flex flex-col lg:flex-row ${
              isLeft ? 'lg:justify-start' : 'lg:justify-end'
            }`}
          >
            <div
              className={`lg:w-1/2 px-4 ${
                isLeft ? 'lg:pr-12 text-left lg:text-right' : 'lg:pl-12 text-left'
              }`}
            >
              <div className="bg-dark-grey border border-primary-hover shadow-lg p-6 rounded-lg hover:scale-105 transition-all duration-300">
                {isAcademic ? (
                  <>
                    <h3 className="text-2xl font-bold !text-primary italic">{item.title}</h3>
                    <p className="!text-secondary italic">{item.degree}</p>
                    <p className="text-sm !text-gray-400 italic mb-2">
                      {item.start_date} - {item.end_date}
                    </p>
                    <p className="!text-light-grey">
                      {item.description}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold !text-primary italic">{item.title}</h3>
                    <p className="!text-light-grey">{item.job}</p>
                    <p className="text-sm !text-gray-400 italic mb-2">
                      <span className="!text-secondary">{item.contract}</span> • {item.start_date} - {item.end_date}
                    </p>
                    <p className="!text-light-grey" style={{ whiteSpace: 'pre-line' }}>
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Point central */}
            <div className="hidden lg:flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-grey shadow-md" />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Resume = () => {
  return (
    <section id="RESUME" className="relative flex flex-col items-center py-12 bg-dark-grey">
      {linksEn.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title !text-white">{link.title}</h2>
          <p className="text-center text-3xl pb-6 !text-light-grey">{link.description}</p>
          <p className="text-center pb-12 !text-light-grey italic">{link.intro}</p>

          {/* Timeline expériences pro */}
          <Timeline items={professionalEn} />

          {/* Titre diplômes */}
          <h2 className="title !text-white mt-20">My Diplomas</h2>

          {/* Timeline diplômes */}
          <Timeline items={academicEn} isAcademic />
        </div>
      ))}
    </section>
  )
}

export default Resume;