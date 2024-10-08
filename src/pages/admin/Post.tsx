import React from "react";
import AdminLayout from "../../layout/adminLayout";
import Article from "../../components/Admin/CMS/Article/Article";

const PostPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <Article />
      </AdminLayout>
    </>
  );
};

export default PostPage;
