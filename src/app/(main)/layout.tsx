import SideBar from "@/components/side-bar";

interface layoutProps {}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <div className="bg-zinc-900 w-[calc(100%-300px)] ml-[300px] ">
        {children}
      </div>
    </>
  );
}
