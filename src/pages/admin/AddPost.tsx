import React from "react";
import AddPost from "../../components/Admin/AddPost";
import AdminLayout from "../../layout/adminLayout";

const AddPostPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <AddPost />
      </AdminLayout>
    </>
  );
};

export default AddPostPage;
