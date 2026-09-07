import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="
      flex min-h-[70vh]
      flex-col
      items-center
      justify-center
      text-center
    "
    >
      <p
        className="
        text-7xl font-black
        gradient-text
      "
      >
        404
      </p>

      <h1
        className="
        mt-5 text-2xl
        font-bold
      "
      >
        Page not found
      </h1>

      <p
        className="
        mt-2 text-slate-500
      "
      >
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="
          mt-6 rounded-xl
          bg-white
          px-5 py-3
          font-semibold
          text-slate-950
        "
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
