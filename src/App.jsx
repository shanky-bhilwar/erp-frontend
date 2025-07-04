import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import DashboardPage from  './pages/Dashboard/BusinessDashboard';
import HelpdeskPage from './pages/Dashboard/helpdesk/HelpdeskPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          {/* Default route (e.g., redirect or dashboard overview) */}
          <Route index element={<DashboardPage />} />

          {/* Optional: nested paths under dashboard */}
           <Route path="dashboard" element={<DashboardPage />} />
           <Route path="helpdesk" element={<HelpdeskPage />} />
          {/* <Route path="dashboard/:subPage" element={<DashboardPage />} />  */}
          
          {/* Add other main menu routes if needed */}
          {/* <Route path="pos" element={<DashboardPage />} />
          <Route path="inventory" element={<DashboardPage />} />
          <Route path="hr" element={<DashboardPage />} /> */}
          {/* ... etc */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;