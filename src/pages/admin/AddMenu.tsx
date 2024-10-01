import React from "react";
import AdminLayout from "../../layout/adminLayout";
import MenuAdd from "../../components/Admin/CMS/Menu/Add";

const AddMenuPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <MenuAdd />
      </AdminLayout>
    </>
  );
};

export default AddMenuPage;