import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import type { ColDef } from "ag-grid-community";

type UserRow = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

function Dashboard() {
  const [rowData] = useState<UserRow[]>([
    {
      id: 1,
      name: "Faysal Helou",
      email: "faysal@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Ali Ahmad",
      email: "ali@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Sara Khaled",
      email: "sara@example.com",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Omar Hassan",
      email: "omar@example.com",
      role: "User",
      status: "Pending",
    },
  ]);

  const [columnDefs] = useState<ColDef<UserRow>[]>([
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ]);

  const defaultColDef = useMemo<ColDef<UserRow>>(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to the admin dashboard. This table is powered by AG Grid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">4</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Active Users</h3>
          <p className="text-3xl font-bold text-green-600">2</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Pending Users</h3>
          <p className="text-3xl font-bold text-yellow-600">1</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Users Table</h2>

        <div style={{ height: 400, width: "100%" }}>
          <AgGridReact
            theme={themeQuartz}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;