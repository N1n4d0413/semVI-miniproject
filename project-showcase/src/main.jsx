import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Idea1 from "./Idea1";
import Idea2 from "./Idea2";
import Idea3 from "./Idea3";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/semVI-miniproject">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/idea-1" element={<Idea1 />} />
        <Route path="/idea-2" element={<Idea2 />} />
        <Route path="/idea-3" element={<Idea3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);