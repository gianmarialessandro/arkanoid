import React from "react";
import Home from "./home.js";
import Pagina from "./pagina.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/pagina" element={<Pagina />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
