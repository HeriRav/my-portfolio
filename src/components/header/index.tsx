import React, { useEffect, useState } from "react";
import { navigationLinksEn } from "./data";
import clsx from "clsx";
import Popup from "../ui/header-popup";

interface HeaderProps {
  siteTitle: string;
}

const LogoEn = [
  {
    name: "Heritiana R.",
    decription: "My portfolio",
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

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("HOME");
  const [showPopup, setShowPopup] = useState(false);

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
    const sectionIds = navigationLinksEn.map((link) => link.to);

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
        {LogoEn.map((logo, index) => (
          <div
            key={index}
            className="lg:hidden bg-primary/95 px-8 py-4 flex items-center justify-between w-full cursor-default"
          >
            <h1 className="!text-transparent text-xl italic font-black bg-clip-text bg-gradient-to-r from-light to-primary-hover">
              {logo.name}
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
        ))}

        {/* Modal for mobile menu */}
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}

        {/* Desktop Navigation */}
        <nav className="hidden w-full py-6 lg:flex lg:items-center mx-auto">
          {LogoEn.map((logo, index) => (
            <div key={index} className="mr-auto ml-20 cursor-default">
              <h1 className="!text-transparent text-3xl italic font-black bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                {logo.name}
              </h1>
              <p className="!text-transparent text-xl font-bold bg-clip-text bg-gradient-to-r from-secondary to-secondary-hover">
                {logo.decription}
              </p>
            </div>
          ))}
          <ul className="flex space-x-8 text-xs xl:text-base min-2xl:text-lg mr-20">
            {navigationLinksEn.map((link, index: number) => (
              <li className="" key={`nav-link-${index}`}>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
