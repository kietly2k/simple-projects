import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./container/home";
import AgeCaculator from "./components/age-caculator/AgeCaculator";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/age-calculator" element={<AgeCaculator />} />
    </Routes>
  );
};

export default App;
