import { useState, useEffect } from "react";

export const useScrollSpy = (ids: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 20; // 20px padding
      let currentId = "";

      for (const id of ids) {
        const element = document.getElementById(id.replace("#", ""));
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentId = id.replace("#", "");
            break;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to set initial active class
    
    // Add a debounced check for layout shifts
    const timeout = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [ids, offset]);

  return activeId;
};
