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
      <div className="bg-zinc-900  w-full md:w-[calc(100%-300px)] md:ml-[300px] ">
        {children}
      </div>
    </>
  );
}
