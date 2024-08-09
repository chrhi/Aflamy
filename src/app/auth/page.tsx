import type { FC } from "react";

interface PageProps {}

const Page: FC = ({}) => {
  return (
    <div className="w-full h-screen grid grid-cols-3">
      <div className="w-full h-full col-span-1"></div>
      <div className="w-full h-full col-span-2 p-4">
        <div className="w-full h-full bg-black rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Page;