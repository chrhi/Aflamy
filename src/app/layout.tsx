import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/side-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aflamy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <SideBar />
          <div className="bg-zinc-900 w-[calc(100%-300px)] ml-[300px] ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
