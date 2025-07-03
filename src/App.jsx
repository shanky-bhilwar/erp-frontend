import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FutureBusiness from "./pages/Sections/FutureBusiness";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/future-business" element={<FutureBusiness />} />
      </Routes>
    </Router>
  );
};

export default App;
