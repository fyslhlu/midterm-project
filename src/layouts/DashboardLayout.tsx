import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Midterm App</h2>

        <nav className="flex flex-col gap-3">
          <span className="bg-blue-600 px-4 py-2 rounded-lg font-medium">
            Dashboard
          </span>
          <span className="text-slate-300 px-4 py-2">Users</span>
          <span className="text-slate-300 px-4 py-2">Reports</span>
          <span className="text-slate-300 px-4 py-2">Settings</span>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;