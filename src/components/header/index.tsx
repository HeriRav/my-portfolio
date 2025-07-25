import React, { useEffect, useState } from "react";
import { navigationLinksEn } from "./data";
import clsx from "clsx";
import Logo from "../../components/header/assets/logo-bg-white.png"

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("HOME");

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    scrollToSection(id);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
        <div className="lg:hidden bg-primary/95 px-8 py-4 flex items-center justify-between w-full">
          <img
            src={Logo}
            alt=""
            className="pointer-events-none max-w-[50px] w-full rounded-full"
          />  
          <button
          onClick={toggleMenu}
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
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      
        {/* Modal for mobile menu */}
        {isOpen && (
          <div
            className="animate-popIn fixed inset-0 bg-black/70 bg-opacity-80"
            onClick={closeMenu}
          >
            <div
              className="relative w-screen h-screen p-5 bg-primary min-h-screen flex items-center justify-center shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeMenu}
                className="absolute text-black top-7 right-12"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Links */}
              <ul className="flex flex-col items-center justify-center space-y-4">
                {navigationLinksEn.map((link, index: number) => (
                  <li className="block py-2 text-black" key={`link-${index}`}>
                    <a
                      href={link.to}
                      onClick={closeMenu}
                      onClickCapture={(e) => handleScroll(e, link.to)}
                      className={clsx(
                        "!text-light transition-all duration-200",
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
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden w-full py-6 lg:flex lg:items-center mx-auto">
          <div className="mr-auto ml-20 ">
            <img
              src={Logo}
              alt=""
              className="pointer-events-none max-w-[70px] w-full rounded-full"
            />
          </div>
          <ul className="flex space-x-8 text-xs xl:text-base min-2xl:text-lg mr-20">
            {navigationLinksEn.map((link, index: number) => (
              <li className="" key={`nav-link-${index}`}>
                <a
                  href={link.to}
                  onClick={(e) => handleScroll(e, link.to)}
                  className={clsx(
                    "!text-light hover:!underline hover:!underline-offset-6 hover:!decoration-2 transition-all duration-300",
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
