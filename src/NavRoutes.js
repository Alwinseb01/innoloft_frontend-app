import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Edit from "./pages/Edit";

export default function NavRoutes() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={"HI"} />
        <Route path="/product/*" element={<Product />}>
          <Route path="product/edit" element={<Edit />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Router>
  );
}

