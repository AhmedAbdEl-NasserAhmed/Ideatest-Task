import EmployerMainMenu from "@/ui/EmployerMainMenu";
import Nav from "@/ui/Nav";
import ProtectedRoute from "@/ui/ProtectedRoute";

const EmployerDashboardPage = ({ children }) => {
  return (
    <ProtectedRoute>
      <div>
        <Nav />
        <div className="p-8 h-[calc(100vh-7rem)] flex items-center  ">
          <EmployerMainMenu />
          <div className="grow  h-full rounded-lg p-10 over">{children}</div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default EmployerDashboardPage;
