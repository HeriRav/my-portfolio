import LinkedInIcon from "./assets/linkedinIcon";
import GitHubIcon from "./assets/githubIcon";

const linksEn = [
  {
    rights: "All Rights Reserved",
    linkedin: "https://www.linkedin.com/in/heritiana-raveloson-564347236/",
    github: "https://github.com/HeriRav",
  },
];

const Footer = () => {
  return (
    <footer className="py-4 md:py-20 bg-footer md:h-24 flex items-center justify-center">
      {linksEn.map((link, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-[calc(100%-40px)] sm:max-w-[calc(100%-120px)] lg:max-w-[calc(100%-200px)] xl:max-w-[calc(100%-400px)]"
        >
          <div className="flex items-center justify-center py-4 space-x-2 lg:space-x-4">
            <a
              href={link.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 border-2 border-light hover:scale-105 hover:border-light-grey transition-all duration-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href={link.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 border-2 border-light hover:scale-105 hover:border-light-grey transition-all duration-300"
            >
              <GitHubIcon />
            </a>
          </div>
          <p className="flex items-center justify-center text-center text-sm pb-4 !text-light">
            © {new Date().getFullYear()} Heritiana Raveloson. {link.rights}
          </p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
