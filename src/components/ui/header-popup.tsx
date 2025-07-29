import { useEffect, useState } from "react";
import { navigationLinksEn } from "../header/data";
import clsx from "clsx";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const offset = 80;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Popup = ({ onClose }: { onClose: () => void }) => {
  const [closing, setClosing] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("HOME");

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    scrollToSection(id);
  };

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/70 bg-opacity-80 overflow-hidden popup ${
        closing ? "animate-popOut" : "animate-popIn"
      }`}
      onClick={closeMenu}
    >
      <div
        className="relative w-screen h-screen p-5 bg-primary min-h-screen flex items-center justify-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
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
  );
};

export default Popup;
