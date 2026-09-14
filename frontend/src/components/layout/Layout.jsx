import Sidebar from "./Sidebar";
import Header from "./Header";
import { LayoutProvider, useLayout } from "../../context/LayoutContext";

const LayoutInner = ({ children }) => {
  const { collapsed } = useLayout();

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-100 flex flex-col antialiased selection:bg-violet-600 selection:text-white">
      <Sidebar />

      <div
        className={`
          flex-1 flex flex-col
          transition-all duration-300 ease-in-out
          ${collapsed ? "lg:pl-[72px]" : "lg:pl-64"}
          pl-0 w-full min-w-0
        `}
      >
        <Header />

        <main
          className="
            flex-1
            mx-auto w-full
            max-w-[1600px]
            p-4 sm:p-6 lg:p-8
            min-w-0
          "
        >
          {children}
        </main>

        <footer className="border-t border-white/5 py-4 px-6 text-center text-xs text-slate-400">
          PredictX • Industrial AI Predictive Maintenance Dashboard & ML Inference Engine
        </footer>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <LayoutProvider>
      <LayoutInner>{children}</LayoutInner>
    </LayoutProvider>
  );
};

export default Layout;
