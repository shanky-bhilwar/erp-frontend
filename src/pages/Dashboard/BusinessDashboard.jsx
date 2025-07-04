import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BusinessDashboard from '../../components/dashboard/BusinessDashboard';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const DashboardPage = () => {
  const { activeMainMenu, activeSubMenu, setActiveSubMenu } = useOutletContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-full relative">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <DashboardSidebar
          activeMenu={activeMainMenu}
          activeSubMenu={activeSubMenu}
          onItemClick={(sub) => setActiveSubMenu(sub)}
        />
      </div>

      {/* Sidebar drawer for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="absolute inset-0 bgOp" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative z-50 w-64 bg-white shadow-lg h-full">
            <DashboardSidebar
              activeMenu={activeMainMenu}
              activeSubMenu={activeSubMenu}
              onItemClick={(sub) => {
                setActiveSubMenu(sub);
                setSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b">
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Dashboard */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <BusinessDashboard
            activeMenu={activeMainMenu}
            activeSubMenu={activeSubMenu}
          />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
