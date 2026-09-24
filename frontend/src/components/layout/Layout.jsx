// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { LayoutProvider, useLayout } from "../../context/LayoutContext";

// const LayoutInner = ({ children }) => {
//   const { collapsed } = useLayout();

//   return (
//     <div className="min-h-screen bg-[#06080f] text-slate-100 flex flex-col antialiased selection:bg-violet-600 selection:text-white">
//       <Sidebar />

//       <div
//         className={`
//           flex-1 flex flex-col
//           transition-all duration-300 ease-in-out
//           ${collapsed ? "lg:pl-[72px]" : "lg:pl-64"}
//           pl-0 w-full min-w-0
//         `}
//       >
//         <Header />

//         <main
//           className="
//             flex-1
//             mx-auto w-full
//             max-w-[1600px]
//             p-4 sm:p-6 lg:p-8
//             min-w-0
//           "
//         >
//           {children}
//         </main>

//         <footer className="border-t border-white/5 py-4 px-6 text-center text-xs text-slate-400">
//           <div>
//             {" "}
//             PredictX • Industrial AI Predictive Maintenance Dashboard & ML
//             Inference Engine
//           </div>

//         </footer>
//       </div>
//     </div>
//   );
// };

// const Layout = ({ children }) => {
//   return (
//     <LayoutProvider>
//       <LayoutInner>{children}</LayoutInner>
//     </LayoutProvider>
//   );
// };

// export default Layout;

import Sidebar from "./Sidebar";
import Header from "./Header";
import { LayoutProvider, useLayout } from "../../context/LayoutContext";

const GitHubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.59 2 12.26c0 4.53 2.865 8.37 6.839 9.73.5.095.682-.222.682-.494 0-.244-.009-1.046-.014-1.898-2.782.618-3.369-1.378-3.369-1.378-.455-1.186-1.11-1.502-1.11-1.502-.908-.638.069-.625.069-.625 1.004.073 1.532 1.06 1.532 1.06.892 1.57 2.341 1.117 2.91.854.091-.665.349-1.117.636-1.374-2.22-.26-4.555-1.143-4.555-5.083 0-1.122.39-2.04 1.03-2.759-.103-.261-.446-1.309.098-2.727 0 0 .84-.276 2.75 1.054A9.24 9.24 0 0 1 12 6.012a9.2 9.2 0 0 1 2.5.35c1.91-1.33 2.749-1.054 2.749-1.054.545 1.418.202 2.466.1 2.727.64.719 1.028 1.637 1.028 2.759 0 3.95-2.339 4.82-4.566 5.075.359.318.678.946.678 1.907 0 1.376-.012 2.486-.012 2.824 0 .275.18.594.688.493C19.138 20.626 22 16.786 22 12.26 22 6.59 17.523 2 12 2Z" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  </svg>
);

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

        {/* Footer */}
        <footer className="relative border-t border-white/5 py-4 px-6 text-center text-xs text-slate-400">
          {/* Footer Text */}
          <div>
            PredictX • Industrial AI Predictive Maintenance Created By - Manav
            Delvadiya
          </div>

          {/* Social Links */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {/* GitHub */}
            <a
              href="https://github.com/ManavPatel7972"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="
                flex items-center justify-center
                w-9 h-9
                rounded-lg
                border border-white/10
                bg-white/[0.03]
                text-slate-400
                transition-all duration-200
                hover:bg-white/[0.08]
                hover:text-white
                hover:border-white/20
                hover:scale-105
              "
            >
              <GitHubIcon size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manav-delvadiya-881508345/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="
                flex items-center justify-center
                w-9 h-9
                rounded-lg
                border border-white/10
                bg-white/[0.03]
                text-slate-400
                transition-all duration-200
                hover:bg-white/[0.08]
                hover:text-white
                hover:border-white/20
                hover:scale-105
              "
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
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
