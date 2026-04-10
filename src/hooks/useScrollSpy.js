import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const getActiveSection = () => {
      const offset = window.innerHeight * 0.22;
      const currentPosition = window.scrollY + offset;
      let currentId = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }

        const top = element.offsetTop;
        if (currentPosition >= top) {
          currentId = id;
        }
      }

      setActiveId(currentId);
    };

    if (sectionIds.length === 0) {
      return undefined;
    }

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    window.addEventListener("resize", getActiveSection);

    return () => {
      window.removeEventListener("scroll", getActiveSection);
      window.removeEventListener("resize", getActiveSection);
    };
  }, [sectionIds]);

  return activeId;
}
