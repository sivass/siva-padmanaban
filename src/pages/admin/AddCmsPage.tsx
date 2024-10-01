import React from "react";
import AdminLayout from "../../layout/adminLayout";
import PageAdd from "../../components/Admin/CMS/Pages/Add";

const AddCmsPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <PageAdd />
      </AdminLayout>
    </>
  );
};

export default AddCmsPage;