import { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext(null);

export const LayoutProvider = ({ children }) => {
  // Desktop collapsed state
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("predictx_sidebar_collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  // Mobile open state
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("predictx_sidebar_collapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  // Close mobile drawer on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <LayoutContext.Provider
      value={{
        collapsed,
        setCollapsed,
        toggleCollapsed,
        mobileOpen,
        setMobileOpen,
        toggleMobile,
        closeMobile,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
};
