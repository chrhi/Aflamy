import { LoaderCircle } from "lucide-react";
import type { FC } from "react";

const Loading: FC = ({}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <LoaderCircle size={48} className="w-8 h-8 animate-spin text-white" />
    </div>
  );
};

export default Loading;
