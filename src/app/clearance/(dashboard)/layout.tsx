'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ClearanceTerminal from '@/components/ClearanceTerminal';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [terminalOpen, setTerminalOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const isPressRelease = false;

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar */}
      {!isPressRelease && (
        <aside className="fixed left-0 top-0 h-full flex flex-col z-40 bg-[#0e0e0e] w-64 border-none transition-all duration-150 ease-in-out hidden md:flex">
        <div className="p-6 flex flex-col gap-1">
          <span className="font-headline uppercase font-medium text-xs tracking-widest text-[#e5e2e1]">RESTRICTED ACCESS</span>
          <span className="font-headline uppercase font-medium text-[10px] tracking-[0.2em] text-primary-container">OMEGA (FOUNDER ACCESS ONLY)</span>
        </div>
        <nav className="flex-1 mt-8">
          <div className="flex flex-col">
            <Link className={`flex items-center gap-4 px-6 py-4 font-headline uppercase font-medium text-xs tracking-widest transition-colors ${isActive('/clearance/global-sectors') ? 'bg-[#2a2a2a] text-[#d2002a] border-l-4 border-[#d2002a]' : 'text-[#e5e2e1] opacity-50 hover:bg-[#1c1b1b] hover:text-[#d2002a]'}`} href="/clearance/global-sectors">
              <span className="material-symbols-outlined">grid_view</span>
              <span>SECTORS</span>
            </Link>
            <Link className={`flex items-center gap-4 px-6 py-4 font-headline uppercase font-medium text-xs tracking-widest transition-colors ${isActive('/clearance/asset-containment') ? 'bg-[#2a2a2a] text-[#d2002a] border-l-4 border-[#d2002a]' : 'text-[#e5e2e1] opacity-50 hover:bg-[#1c1b1b] hover:text-[#d2002a]'}`} href="/clearance/asset-containment">
              <span className="material-symbols-outlined">biotech</span>
              <span>CONTAINMENT</span>
            </Link>
            <Link className={`flex items-center gap-4 px-6 py-4 font-headline uppercase font-medium text-xs tracking-widest transition-colors ${isActive('/clearance/personnel-archives') ? 'bg-[#2a2a2a] text-[#d2002a] border-l-4 border-[#d2002a]' : 'text-[#e5e2e1] opacity-50 hover:bg-[#1c1b1b] hover:text-[#d2002a]'}`} href="/clearance/personnel-archives">
              <span className="material-symbols-outlined">groups</span>
              <span>PERSONNEL</span>
            </Link>
            <Link className={`flex items-center gap-4 px-6 py-4 font-headline uppercase font-medium text-xs tracking-widest transition-colors ${isActive('/clearance/archival-records') ? 'bg-[#2a2a2a] text-[#d2002a] border-l-4 border-[#d2002a]' : 'text-[#e5e2e1] opacity-50 hover:bg-[#1c1b1b] hover:text-[#d2002a]'}`} href="/clearance/archival-records">
              <span className="material-symbols-outlined">inventory_2</span>
              <span>ARCHIVE</span>
            </Link>
          </div>
        </nav>
        <div className="p-6 flex flex-col gap-4 border-t border-surface-container-highest">
          <button onClick={() => setTerminalOpen(!terminalOpen)} className={`w-full py-3 font-headline font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${terminalOpen ? 'bg-primary text-on-primary-container' : 'bg-[#1c1b1b] text-primary hover:bg-[#2a2a2a]'}`}>
            <span className="material-symbols-outlined text-sm">terminal</span>
            TERMINAL
          </button>
          <div className="flex flex-col gap-2 mt-4">
            <Link className="flex items-center gap-3 text-[#e5e2e1] opacity-50 hover:opacity-100 font-headline text-[10px] tracking-widest transition-opacity" href="/">
              <span className="material-symbols-outlined text-sm">power_settings_new</span> LOGOUT
            </Link>
          </div>
        </div>
      </aside>
      )}

      {/* Main Content Area */}
      <main className={`${isPressRelease ? '' : 'md:ml-64'} relative flex flex-col min-h-screen`}>
        {/* We omitted the Top Nav <header> here globally so it vanishes everywhere inside the dashboard */}
        {children}
      </main>

      {/* Terminal Overlay */}
      {terminalOpen && <ClearanceTerminal onClose={() => setTerminalOpen(false)} />}
    </div>
  );
}
