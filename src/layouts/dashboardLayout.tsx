import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar.tsx";
import HeaderDashboard from "../components/dashboard/headerDashboard.tsx";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <HeaderDashboard />

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
