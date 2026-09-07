import { Loader2 } from "lucide-react";

const Button = ({
  children,
  loading = false,
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="
        flex w-full items-center
        justify-center gap-2
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-cyan-500
        px-5 py-3.5
        font-semibold
        text-white
        shadow-lg
        shadow-violet-500/20
        transition
        hover:scale-[1.01]
        hover:shadow-violet-500/30
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:scale-100
      "
    >
      {loading && <Loader2 size={18} className="animate-spin" />}

      {children}
    </button>
  );
};

export default Button;
