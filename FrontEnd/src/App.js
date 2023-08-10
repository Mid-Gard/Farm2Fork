import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Dashboard/Dashboard";
import Learn from "./components/Learn/Learn";
import News from "./components/News/News";
import SHOP from "./components/SHOP/SHOP"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="Appcontainer">
        <div className="Appcontent">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Learn" element={<Learn />} />
            <Route path="/News" element={<News />} />
            <Route path="/SHOP" element={<SHOP />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
