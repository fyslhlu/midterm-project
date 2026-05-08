import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg px-4">
      <div className="bg-card p-8 rounded-app shadow-xl w-full max-w-md border border-slate-200">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;