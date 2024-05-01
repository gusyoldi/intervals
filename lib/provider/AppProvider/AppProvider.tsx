import SideBar from "@/ui/SideBar/SideBar";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default AppProvider;
