import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { showSuccessToast } from "@/services/toastService";

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    showSuccessToast("Logged out successfully");
    navigate("/login");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-primary text-white"
        : "text-slate-300 hover:bg-primary-dark hover:text-white"
    }`;

  return (
    <div className="min-h-screen flex bg-app-bg">
      <aside className="w-64 bg-sidebar text-white p-6 hidden md:flex md:flex-col">
        <h2 className="text-2xl font-bold mb-8">Midterm App</h2>

        <nav className="flex flex-col gap-3 flex-1">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/users" className={linkClass}>
            Users
          </NavLink>

          <NavLink to="/notifications" className={linkClass}>
            Notifications
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            Settings
          </NavLink>
        </nav>

        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;