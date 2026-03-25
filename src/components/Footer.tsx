'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/clearance') || pathname === '/press/corporate-seals' || pathname === '/press/photo-assets' || pathname === '/press/boilerplate-text' || pathname === '/press/executive-portraits' || pathname === '/press/executive-training') return null;

  return (
    <footer className="bg-[#0e0e0e] dark:bg-[#0e0e0e] docked full-width bottom-0 border-t border-[#1c1b1b] w-full px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-8 relative z-40 mb-[env(safe-area-inset-bottom)]">
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
        <span className="text-lg md:text-xl font-black text-[#e5e2e1]" style={{ fontFamily: "var(--font-michroma)" }}>UMBRELLA CORP</span>
        <p className="font-['Inter'] text-[9px] md:text-[10px] uppercase tracking-widest text-[#393939] max-w-xs text-center md:text-left">
            © 1969 UMBRELLA PHARMACEUTICALS. ALL RIGHTS RESERVED. CLASSIFIED MATERIAL.
        </p>
      </div>
      <div className="flex gap-4 md:gap-8 flex-wrap justify-center md:justify-end items-center">
        <a className="font-['Inter'] text-[9px] md:text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Ethics</a>
        <a className="font-['Inter'] text-[9px] md:text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Logistics</a>
        <a className="font-['Inter'] text-[9px] md:text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Security</a>
        <a className="font-['Inter'] text-[9px] md:text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Legal</a>
      </div>
    </footer>
  );
}
