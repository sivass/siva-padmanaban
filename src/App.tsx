import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
