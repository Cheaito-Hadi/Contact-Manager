import React from "react";

import AddContact from "./Components/AddContact/AddContact";
import Cards from "./Components/Cards/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}
