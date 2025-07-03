import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FutureBusiness from "./pages/Sections/FutureBusiness";
import CandidateRegistration from "./pages/CandidateRegistration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/future-business" element={<FutureBusiness />} />
        <Route path="/candidate-registration" element={<CandidateRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;
