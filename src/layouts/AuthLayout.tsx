import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;