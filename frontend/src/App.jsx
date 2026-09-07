// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Toaster } from "react-hot-toast";

// import Layout from "./components/layout/Layout";

// import Dashboard from "./pages/Dashboard";
// import Predict from "./pages/Predict";
// import ModelInfo from "./pages/ModelInfo";
// import About from "./pages/About";
// import System from "./pages/System";
// import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 3500,

//           style: {
//             background: "#111522",
//             color: "#ffffff",
//             border: "1px solid rgba(255,255,255,0.1)",
//           },
//         }}
//       />

//       <Layout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />

//           <Route path="/predict" element={<Predict />} />

//           <Route path="/model" element={<ModelInfo />} />

//           <Route path="/system" element={<System />} />

//           <Route path="/about" element={<About />} />

//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { PredictionProvider } from "./context/PredictionContext";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Predict from "./pages/Predict";
import ModelInfo from "./pages/ModelInfo";
import About from "./pages/About";
import System from "./pages/System";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <PredictionProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: {
              background: "#111522",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />

        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/predict" element={<Predict />} />

            <Route path="/model" element={<ModelInfo />} />

            <Route path="/system" element={<System />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </PredictionProvider>
  );
};

export default App;
