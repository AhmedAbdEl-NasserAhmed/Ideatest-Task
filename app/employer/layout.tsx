import EmployerMainMenu from "@/ui/EmployerMainMenu";

const EmployerDashboardPage = ({ children }) => {
  return (
    <div className="p-12 h-screen flex items-center  ">
      <EmployerMainMenu />
      <div className="grow  h-full rounded-lg p-10">{children}</div>
    </div>
  );
};

export default EmployerDashboardPage;
