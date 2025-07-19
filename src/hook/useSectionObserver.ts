import { useEffect, useRef } from "react";

const useSectionObserver = () => {
  const sectionIds = useRef(["about", "gallery", "timeline", "contact"]);
  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          history.replaceState(null, "", `#${id}`);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    sectionIds.current.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.current?.observe(section);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
};

export default useSectionObserver;
