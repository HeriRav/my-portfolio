import Me from "../../pages/home/assets/heritiana-colorless.png";
import en from "../../images/download/en/Heritiana Raveloson(en).pdf";
import fr from "../../images/download/fr/Heritiana Raveloson(fr).pdf";
import LinkedInIcon from "./assets/linkedinIcon";
import GitHubIcon from "./assets/githubIcon";
import ParticleBackground from "../../components/ui/particle-background";
import { useTranslation } from "react-i18next";

const linksEn = [
  {
    linkedin: "https://www.linkedin.com/in/heritiana-raveloson-564347236/",
    github: "https://github.com/HeriRav",
  },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const offset = 80;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Home = () => {
  const [t] = useTranslation("global");

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section
      id="HOME"
      className="flex justify-center bg-dark-grey relative overflow-hidden"
    >
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-[calc(100%-40px)] sm:max-w-[calc(100%-120px)] xl:max-w-[calc(100%-200px)]">
        <div className="flex flex-col-reverse lg:flex-row">
          {linksEn.map((link, index) => (
            <div
              key={index}
              className="w-full lg:mt-44 lg:w-1/2 text-center lg:text-end space-y-6 p-8"
            >
              <div className="text-4xl font-light">
                <p className="!text-white">{t("home.greeting")}</p>
              </div>
              <div className="text-4xl font-bold italic">
                <p className="!text-transparent bg-clip-text bg-gradient-to-b md:bg-gradient-to-r from-primary md:from-30% lg:from-40% 2xl:from-70% to-secondary">
                  {t("home.name")}
                </p>
              </div>
              <div className="text-xl font-semibold">
                <p className="!text-light-grey">{t("home.role")}</p>
              </div>
              <div className="flex items-center justify-center lg:justify-end lg:ml-auto space-x-4 py-1">
                <a
                  href={link.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <GitHubIcon />
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-center lg:justify-end xl:w-fit lg:ml-auto space-y-4 lg:mb-8 md:space-y-0 text-center">
                <a
                  href="#CONTACT"
                  className="btn-primary w-48 md:w-52 md:mr-2"
                  onClick={(e) => handleScroll(e, "CONTACT")}
                >
                  {t("home.contact")} &#129146;
                </a>
                <a
                  href={t("home.resume") === "en" ? en : fr}
                  download={
                    t("home.resume") === "en"
                      ? "CV Heritiana RAVELOSON(en).pdf"
                      : "CV Heritiana RAVELOSON(fr).pdf"
                  }
                  className="btn-secondary w-48 md:w-52 md:ml-2"
                >
                  {t("home.download")} &#10515;
                </a>
              </div>
            </div>
          ))}
          <div className="mt-22 mb-4 w-62 h-62 lg:w-[458px] lg:h-[458px] mx-auto lg:mt-auto lg:ml-0 min-2xl:ml-0 border-4 border-primary shadow-md shadow-primary rounded-full lg:rounded-tl-[240px] lg:rounded-br-[240px] lg:rounded-tr-[60px] lg:rounded-bl-[60px] overflow-hidden relative transition-all duration-300">
            <img
              src={Me}
              alt="My profile"
              className="mx-auto w-60 h-60 lg:w-[450px] lg:h-[450px] object-contain opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
