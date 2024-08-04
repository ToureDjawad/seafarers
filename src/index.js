import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { PageNoFound } from "./pages/PageNoFound/PageNoFound";
import { Projet } from "./pages/Projet/Projet";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Ajents } from "./pages/Ajents/Ajents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/Ajents" element={<Ajents />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Projet" element={<Projet />} />
          </Route>
          <Route path="/*" element={<PageNoFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </React.StrictMode>
);
