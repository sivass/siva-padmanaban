import React from "react";
import AdminLayout from "../../layout/adminLayout";
import MenuList from "../../components/Admin/CMS/Menu/List";

const MenuPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <MenuList />
      </AdminLayout>
    </>
  );
};

export default MenuPage;