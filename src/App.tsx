import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
import Home from "./pages/Home";
import LoginPage from "./pages/admin/Login";
import DashboardPage from "./pages/admin/Dashboard";
import PostPage from "./pages/admin/Post";
import AddPostPage from "./pages/admin/AddPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin/login" element={<LoginPage />}></Route>
            <Route path="/admin/dashboard" element={<DashboardPage />}></Route>
            <Route path="/admin/posts" element={<PostPage />}></Route>
            <Route path="/admin/post/add" element={<AddPostPage />}></Route>
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
