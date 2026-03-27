import { useState, useEffect } from "react";

export const useScrollSpy = (ids: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id.replace("#", "")));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -70% 0px`,
        threshold: 0,
      }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [ids, offset]);

  return activeId;
};
