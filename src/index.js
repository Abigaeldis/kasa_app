import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import NotFound from "./pages/NotFound";
import LodgingPage from "./pages/LodgingPage";
import Gallery from "./components/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={<LodgingPage />} />
        <Route path="/logements" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
