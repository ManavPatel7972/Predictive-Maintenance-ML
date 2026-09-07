import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="lg:pl-64">
        <Header />

        <main
          className="
          mx-auto
          max-w-[1500px]
          p-5
          sm:p-8
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
