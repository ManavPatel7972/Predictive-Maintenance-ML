import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-black gradient-text tracking-tighter">
        404
      </p>

      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
        Telemetry Page Not Found
      </h1>

      <p className="mt-2 max-w-md text-xs sm:text-sm text-slate-400">
        The route you are trying to access does not exist or has been relocated within the diagnostic platform.
      </p>

      <Link
        to="/"
        className="
          mt-8 inline-flex items-center gap-2 rounded-xl
          bg-gradient-to-r from-violet-600 to-indigo-600
          px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30
          transition hover:scale-105
        "
      >
        <Home size={16} />
        <span>Return to Dashboard</span>
      </Link>
    </div>
  );
};

export default NotFound;
