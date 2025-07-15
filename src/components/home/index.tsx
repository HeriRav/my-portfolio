import Me from '../../components/home/images/heritiana.png';
import LinkedInIcon from './images/linkedinIcon';
import GitHubIcon from './images/githubIcon';

const Home = () => {
  return (
    <section id="HOME" className="flex flex-col lg:flex-row items-center bg-dark">
      <div className="w-full lg:w-1/2 text-center bg-gray-400 space-y-4 p-8">
        <div className="mt-4 lg:mt-48 text-xl font-light">
          <p className="">Hi, I am</p>
        </div>
        <div className="text-4xl font-bold">
          <p>Heritiana Raveloson</p>
        </div>
        <div className="font-semibold">
          <p className="!text-light-grey">Front-end (a bit of Back-end) Developer / UI Designer</p>
        </div>
        <div className='size-20 mx-auto flex items-center justify-center space-x-4 lg:mb-24'>
          <a
            href="https://www.linkedin.com/in/heritiana-raveloson-564347236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon/>
          </a>
          <a
            href="https://github.com/HeriRav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon/>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={Me} alt="My profile" className='mx-auto w-60 lg:w-full lg:h-[450px] object-contain' />
      </div>
    </section>
  );
}

export default Home;