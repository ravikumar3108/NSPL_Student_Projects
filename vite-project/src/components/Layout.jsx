import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <div className="lg:pl-[280px]">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;