import { Trans, useTranslation } from "react-i18next";
import AboutIcon from "./assets/about-icon.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const offset = 80;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const About: React.FC = () => {
  const { t } = useTranslation();

  const linkLangs = [
    {
      title: t("about.title"),
      description: t("about.description"),
      expertise: (
        <Trans
          i18nKey="about.expertise"
          components={{
            1: <span className="font-semibold" />,
            3: <span className="font-semibold" />,
            5: <span className="font-semibold" />,
          }}
        />
      ),
      paragraph: t("about.paragraph"),
      contact: t("about.contact"),
    },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="ABOUT" className="flex flex-col items-center py-4">
      {linkLangs.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title">{link.title}</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8">
            <img
              src={AboutIcon}
              alt={link.title}
              className="hidden lg:block w-96 h-96"
            />
            <div className="flex flex-col space-y-4 max-w-xl">
              <p className="text-lg lg:text-xl !text-primary font-semibold italic">
                {link.description}
              </p>
              <p className="text-base">{link.expertise}</p>
              <p className="text-base">{link.paragraph}</p>
              <div key={index} className="py-4">
                <a
                  href="#CONTACT"
                  className="btn-primary w-48 md:w-52 text-center"
                  onClick={(e) => handleScroll(e, "CONTACT")}
                >
                  {link.contact} &#129146;
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
