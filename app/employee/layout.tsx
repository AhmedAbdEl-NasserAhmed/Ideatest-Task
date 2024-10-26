import EmployeeMainMenu from "@/ui/EmployeeMainMenu";
import Nav from "@/ui/Nav";
import ProtectedRoute from "@/ui/ProtectedRoute";

const EmployeeDashboardPage = ({ children }) => {
  return (
    <ProtectedRoute>
      <div>
        <Nav />
        <div className="p-8 h-[calc(100vh-7rem)] flex items-center  ">
          <EmployeeMainMenu />
          <div className="grow  h-full rounded-lg p-10   overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default EmployeeDashboardPage;
