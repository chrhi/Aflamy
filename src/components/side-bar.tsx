import type { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dashboardItems } from "@/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const SideBar: FC = ({}) => {
  return (
    <div className="w-[300px] h-screen flex flex-col justify-between bg-zinc-900 fixed top-0 bottom-0 left-0 p-8">
      <Image
        src={"/logo.svg"}
        alt="this is an image"
        width={150}
        height={45}
        className="mb-4"
      />

      <ScrollArea className="w-full h-[600px]  flex flex-col gap-y-4">
        <p className="text-white text-lg">Genera</p>

        <div className="w-full h-fit flex flex-col gap-y-1">
          {dashboardItems.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-start text-gray-100 hover:bg-white/5 hover:text-white cursor-pointer"
                )}
              >
                <item.icon className="w-4 h-4 mr-2" /> {item.name}
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SideBar;
