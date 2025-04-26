"use client";

import { FC, useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dashboardItems } from "@/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

const SideBar: FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <Link href={"/"} className="mb-6">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={150}
          height={45}
          className="cursor-pointer"
        />
      </Link>

      <ScrollArea className="flex-grow pr-4">
        <p className="text-white text-lg font-medium mb-2">General</p>

        <div className="flex flex-col gap-y-1 mb-6">
          {dashboardItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-start text-gray-100 hover:bg-white/5 hover:text-white cursor-pointer",
                  isActive && "bg-white/10 text-white font-medium"
                )}
                onClick={() => setOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2" /> {item.name}
              </Link>
            );
          })}
        </div>

        <p className="text-white text-lg font-medium mb-2">Personal</p>

        <div className="flex flex-col gap-y-1">
          <Link
            href="/wishlist"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full flex items-center justify-start text-gray-100 hover:bg-white/5 hover:text-white cursor-pointer",
              pathname === "/wishlist" && "bg-white/10 text-white font-medium"
            )}
            onClick={() => setOpen(false)}
          >
            <Heart className="w-4 h-4 mr-2" /> Wishlist
          </Link>
        </div>
      </ScrollArea>

      <div className="mt-auto pt-6">
        <Button
          variant="ghost"
          className="w-full flex items-center justify-start text-gray-100 hover:bg-white/5 hover:text-white"
          onClick={() => {
            // Add your logout logic here
            console.log("Logging out");
          }}
        >
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar with Sheet */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-40"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-zinc-900 p-6 w-[280px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-[300px] h-screen flex-col justify-between bg-zinc-900 fixed top-0 bottom-0 left-0 p-6 border-r border-zinc-800">
        <SidebarContent />
      </div>
    </>
  );
};

export default SideBar;
