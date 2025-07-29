import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-2 right-2 md:bottom-4 md:right-4 px-3 py-2 lg:px-4 lg:py-3 bg-primary text-light-grey rounded-full shadow-lg hover:bg-primary-hover transition-all duration-300 z-98"
      >
        &#129033;
      </button>
    )
  );
}
