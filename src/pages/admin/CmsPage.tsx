import React from "react";
import AdminLayout from "../../layout/adminLayout";
import PageList from "../../components/Admin/CMS/Pages/List";

const CmsPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <PageList />
      </AdminLayout>
    </>
  );
};

export default CmsPage;