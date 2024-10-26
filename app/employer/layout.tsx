import EmployerMainMenu from "@/ui/EmployerMainMenu";

const EmployerDashboardPage = ({ children }) => {
  return (
    <div>
      <nav className="p-8 h-[6rem] text-xl font-bold bg-secondary flex justify-end ">
        Hello Mr , Ahmed Nasser
      </nav>
      <div className="p-8 h-[calc(100vh-7rem)] flex items-center  ">
        <EmployerMainMenu />
        <div className="grow  h-full rounded-lg p-10 over">{children}</div>
      </div>
    </div>
  );
};

export default EmployerDashboardPage;
