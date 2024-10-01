import React from "react";
import AdminLayout from "../../layout/adminLayout";
import AddArticle from "../../components/Admin/CMS/Article/AddArticle";

const AddPostPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <AddArticle />
      </AdminLayout>
    </>
  );
};

export default AddPostPage;
