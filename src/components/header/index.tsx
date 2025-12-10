import React, { useEffect, useState } from "react";
import { navigationLinksKeys } from "./data";
import clsx from "clsx";
import Popup from "../ui/header-popup";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import EnFlag from "./assets/enFlag";
import FrFlag from "./assets/frFlag";

interface HeaderProps {
  siteTitle: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const offset = 80;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("HOME");
  const [showPopup, setShowPopup] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [showLangMenu, setShowLangMenu] = useState(false);

  const navigationLinks = navigationLinksKeys.map((link) => ({
    ...link,
    label: t(`header.${link.keys}`),
  }));

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    scrollToSection(id);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigationLinksKeys.map((link) => link.to);

    const handleScrollSpy = () => {
      const offset = 100;
      let current = "HOME"; // fallback

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // pour le chargement initial

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="section-container fixed flex items-center max-w-full">
        {/* Hamburger button */}
        <div className="lg:hidden bg-primary/95 px-8 py-4 flex items-center justify-between w-full cursor-default">
          <h1 className="!text-transparent text-xl italic font-black bg-clip-text bg-gradient-to-r from-light to-primary-hover">
            {t("header.name")}
          </h1>
          <button
            onClick={() => setShowPopup(true)}
            className="!text-light focus:outline-none lg:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Modal for mobile menu */}
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}

        {/* Desktop Navigation */}
        <nav className="hidden w-full py-6 lg:flex lg:items-center lg:justify-center relative">
          <div className="cursor-default absolute left-20">
            <h1 className="!text-transparent text-3xl italic font-black bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
              {t("header.name")}
            </h1>
            <p className="!text-transparent text-xl font-bold bg-clip-text bg-gradient-to-r from-secondary to-secondary-hover">
              {t("header.title")}
            </p>
          </div>

          <ul className="flex space-x-8 text-xs xl:text-base min-2xl:text-lg">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  onClick={(e) => handleScroll(e, link.to)}
                  className={clsx(
                    "!text-light hover:!underline hover:!underline-offset-9 hover:!decoration-2 transition-all duration-300",
                    activeSection === link.to && "font-bold"
                  )}
                >
                  {link.label}
                </a>
                <hr
                  className={clsx(
                    "h-1 bg-light rounded-sm",
                    activeSection === link.to ? "block" : "hidden"
                  )}
                />
              </li>
            ))}
          </ul>

          <div className="absolute right-20">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex gap-x-2 text-light font-semibold border border-light px-3 py-1 rounded"
            >
              <Globe /> {t("header.languages")}
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 bg-black text-white rounded shadow-md overflow-hidden w-full animate-[fadeInScale_0.15s_ease-out]">
                <button
                  onClick={() => {
                    handleChangeLanguage("en");
                    setShowLangMenu(false);
                  }}
                  className="flex gap-x-2 px-4 py-2 hover:bg-primary text-left w-full transition-all"
                >
                  <EnFlag /> EN
                </button>
                <button
                  onClick={() => {
                    handleChangeLanguage("fr");
                    setShowLangMenu(false);
                  }}
                  className="flex gap-x-2 px-4 py-2 hover:bg-primary text-left w-full transition-all"
                >
                  <FrFlag />
                  FR
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
