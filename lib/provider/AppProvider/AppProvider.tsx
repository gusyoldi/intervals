import SideBar from "@/ui/Button/NavBar/SideBar";
import { NextUIProvider } from "@nextui-org/react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <NextUIProvider>
        <main>{children}</main>;
      </NextUIProvider>
    </>
  );
};

export default AppProvider;
