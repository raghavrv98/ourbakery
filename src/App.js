import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

