import { useEffect, useState } from "react";

function useActiveHash() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Listen for hash changes directly
    window.addEventListener("hashchange", handleHashChange);

    // Optional: Check hash on first render
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { activeHash };
}
export default useActiveHash;
