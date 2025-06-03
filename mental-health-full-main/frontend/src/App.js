import React from "react";
import MentalHealthForm from "./components/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stress from "./pages/stress";
import Anxiety from "./pages/anxiety";
import Loneliness from "./pages/loneliness";
import Depression from "./pages/depression";
import Normal from "./pages/normal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentalHealthForm />} />
        <Route path="/anxiety" element={<Anxiety />} />
        <Route path="/stress" element={<Stress/>} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/loneliness" element={<Loneliness />} />
        <Route path="/normal" element={<Normal />} />
      </Routes>
    </Router>
  );
}

export default App;
