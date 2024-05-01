"use client";
import AppProvider from "@/lib/provider/AppProvider/AppProvider";
import SideBar from "@/ui/SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideBar />
      <AppProvider>{children}</AppProvider>
    </>
  );
};

export default Layout;
