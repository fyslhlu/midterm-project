import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="h-screen flex">
      {/* Sidebar placeholder */}
      <div className="w-64 bg-blue-600 text-white p-4">
        Dashboard Menu
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;