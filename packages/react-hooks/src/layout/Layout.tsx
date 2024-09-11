import type React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="layout w-full h-full">
      <Outlet />
    </div>
  );
};

export default Layout;
