import React from "react";
import Post from "../../components/Admin/Post";
import AdminLayout from "../../layout/adminLayout";

const PostPage: React.FC = () => {
  return (
    <>
      <AdminLayout>
        <Post />
      </AdminLayout>
    </>
  );
};

export default PostPage;
