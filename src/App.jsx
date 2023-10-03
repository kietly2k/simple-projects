import React from "react";
import { Routes, Route } from "react-router-dom";
import AgeCaculator from "./components/age-caculator/AgeCaculator";
import Home from "./container/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/age-calculator" element={<AgeCaculator />} />
    </Routes>
  );
};

export default App;
