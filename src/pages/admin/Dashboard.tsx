import React from "react";
import Dashboard from "../../components/Admin/Dashboard";
import AdminLayout from "../../layout/adminLayout";

const DashboardPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </>
  );
};

export default DashboardPage;
