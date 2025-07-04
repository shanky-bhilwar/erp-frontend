import { useParams, Outlet } from 'react-router-dom';
import Menubar from './Menubar';
import React, { useState } from 'react';


const Layout = () => {
  const { subPage } = useParams();
  const [activeMainMenu, setActiveMainMenu] = useState('Dashboard');
  const [activeSubMenu, setActiveSubMenu] = useState(subPage || 'Dashboard');

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Menubar
        activeMenu={activeMainMenu}
        onMenuChange={(menu) => {
          setActiveMainMenu(menu);
          setActiveSubMenu(menu);
        }}
      />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Outlet context={{ activeMainMenu, activeSubMenu, setActiveSubMenu }} />
      </div>
    </div>
  );
};

export default Layout;
