import Me from '../../pages/home/assets/heritiana-colorless.png';
import cv from '../../images/download/CV Heritiana RAVELOSON.pdf';
import LinkedInIcon from './assets/linkedinIcon';
import GitHubIcon from './assets/githubIcon';

const linksEn = [
  {
    greeting: 'Hello, I am',
    name: 'Heritiana Raveloson',
    title: 'Software developer',
    linkedin: 'https://www.linkedin.com/in/heritiana-raveloson-564347236/',
    github: 'https://github.com/HeriRav',
    contact: 'Contact me',
    cv: 'Download CV',
  }
]

// const linkFr = [
//   {
//     greeting: 'Bonjour, je suis',
//     name: 'Heritiana Raveloson',
//     title: 'Développeur logiciel',
//     linkedin: 'https://www.linkedin.com/in/heritiana-raveloson-564347236/',
//     github: 'https://github.com/HeriRav',
//     contact: 'Contactez-moi',
//     cv: 'Télécharger le CV',
//   }
// ]

const Home = () => {
  return (
    <section id="HOME" className="flex justify-center bg-dark-grey">
      <div className="w-full max-w-[calc(100%-40px)] sm:max-w-[calc(100%-120px)]">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {linksEn.map((link, index) => (
            <div key={index} className="w-full lg:w-1/2 text-center space-y-6 p-8">
              <div className="lg:mt-46 text-4xl font-light">
                <p className="!text-white">{link.greeting}</p>
              </div>
              <div className="text-4xl font-bold">
                <p className='!text-primary'>{link.name}</p>
              </div>
              <div className="font-semibold">
                <p className="!text-light-grey">{link.title}</p>
              </div>
              <div className='mx-auto flex items-center justify-center space-x-12 mb-6'>
                <a href={link.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='icon'>
                  <LinkedInIcon />
                </a>
                <a href={link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='icon'>
                  <GitHubIcon />
                </a>
              </div>
              <div className='flex flex-col md:flex-row space-y-4 lg:mb-8 md:space-y-0'>
                <a href="" className='btn-primary w-full md:w-52  md:mr-2'>
                  {link.contact} &#8680;
                </a>
                <a href={cv} download={cv} className='btn-secondary w-full md:w-52  md:ml-2'>
                  {link.cv} &#10515;
                </a>
              </div>
            </div>
          ))}
          <div className="mt-22 mb-4 w-62 h-62 lg:w-[458px] lg:h-[458px] lg:mx-auto lg:mt-auto rounded-full border-4 border-primary inset-shadow-sm inset-shadow-primary shadow-md shadow-primary">
            <img src={Me} alt="My profile" className='mx-auto w-60 h-60 lg:w-[450px] lg:h-[450px] object-contain rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;