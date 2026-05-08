import { Button } from "@mui/material";
import { showSuccessToast } from "@/services/toastService";

function Users() {
  const handleAddUser = () => {
    showSuccessToast("User added successfully");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Users</h1>
        <p className="text-slate-500">
          Manage users and user permissions from this page.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">User Management</h2>

          <Button variant="contained" onClick={handleAddUser}>
            Add User
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">Faysal Helou</h3>
            <p className="text-slate-500">Admin</p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">Ali Ahmad</h3>
            <p className="text-slate-500">User</p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">Sara Khaled</h3>
            <p className="text-slate-500">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;