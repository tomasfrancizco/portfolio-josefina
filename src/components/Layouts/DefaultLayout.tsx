"use client";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({
  children,
}: DefaultLayoutProps) {
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden bg-gray-100">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Navbar Start ===== --> */}
          <Navbar sidebarOpen={false} setSidebarOpen={() => {}} />
          {/* <!-- ===== Navbar End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
