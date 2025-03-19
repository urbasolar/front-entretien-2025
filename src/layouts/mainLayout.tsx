import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { navbarItems } from '@/layouts/navbarItems';
import { Navbar } from '@/components/navbar/navbar';

export const Layout: FC = () => {
  return (
    <div
      id="page-container"
      className="flex bg-neutral-gray dark:bg-neutral-dark-black w-full"
    >
      <Navbar items={navbarItems} />
      <div id="body" className="w-full h-screen bg-neutral-gray">
        <Outlet />
      </div>
    </div>
  );
};
