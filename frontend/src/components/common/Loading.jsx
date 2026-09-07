import { LoaderCircle } from "lucide-react";

const Loading = ({ text = "Analyzing machine..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10">
        <LoaderCircle size={30} className="animate-spin text-violet-400" />
      </div>

      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
};

export default Loading;
