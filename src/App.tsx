import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
import Home from "./pages/Home";
import LoginPage from "./pages/admin/Login";
import DashboardPage from "./pages/admin/Dashboard";
import PostPage from "./pages/admin/Post";
import AddPostPage from "./pages/admin/AddPost";
import MenuPage from "./pages/admin/Menu";
import AddMenuPage from "./pages/admin/AddMenu";
import CmsPage from "./pages/admin/CmsPage";
import AddCmsPage from "./pages/admin/AddCmsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin/" element={<LoginPage />}></Route>
            <Route path="/admin/login" element={<LoginPage />}></Route>
            <Route path="/admin/dashboard" element={<DashboardPage />}></Route>
            <Route path="/admin/cms/menu" element={<MenuPage />}></Route>
            <Route path="/admin/cms/menu/add" element={<AddMenuPage />}></Route>
            <Route path="/admin/cms/pages" element={<CmsPage />}></Route>
            <Route path="/admin/cms/pages/add" element={<AddCmsPage />}></Route>
            <Route path="/admin/cms/articles" element={<PostPage />}></Route>
            <Route path="/admin/cms/article/add" element={<AddPostPage />}></Route>
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
