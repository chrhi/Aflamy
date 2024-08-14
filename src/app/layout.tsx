import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/side-bar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aflamy",
  openGraph: {
    title: "Aflamy",
    description: "Aflamy where you can find your favorite movie",
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
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
