import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateRegistration from "./pages/CandidateRegistration";
import Layout from './layouts/Layout';
import DashboardPage from './pages/Dashboard/BusinessDashboard';
import HelpdeskPage from './pages/helpdesk/HelpdeskPage';
import LogisticPage from './pages/Logistics/LogisticPage';
import LoginPage from './pages/Login/LoginPage';
import SecondPage from './pages/Login/SecondPage';

import DashboardLayout from "./components/Layout/DashboardLayout";
import FutureBusiness from "./components/Future-business/FutureBusiness";
import TaxSection from "./components/Tax-Section/TaxSection";
import FinancialDashboard from "./components/Cash-banks/FinancialDashboard";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route outside Layout */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<SecondPage />} />

        {/* All other routes wrapped inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="helpdesk" element={<HelpdeskPage />} />
          <Route path="logistics" element={<LogisticPage />} />

          <Route path="/future-business" element={<DashboardLayout />}>
            <Route path="future-business-dashboard" element={<FutureBusiness />} />
            <Route path="tax" element={<TaxSection />} />
            <Route path="cash-banks" element={<FinancialDashboard />} />
         </Route>

          {/*  */}
           <Route path="/candidate-registration" element={<CandidateRegistration />} />

        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
