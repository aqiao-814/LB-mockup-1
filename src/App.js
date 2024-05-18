import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout";
import LandingPage from "./pages/Landing Page/index.js";
import AboutUs from "./pages/About Us/index.js";
import ProductInfo from "./pages/Product Info/index.js";

import "./App.css";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<ProductInfo />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
