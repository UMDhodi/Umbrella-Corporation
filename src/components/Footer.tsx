'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/clearance') || pathname === '/press/corporate-seals' || pathname === '/press/photo-assets' || pathname === '/press/boilerplate-text' || pathname === '/press/executive-portraits' || pathname === '/press/executive-training') return null;

  return (
    <footer className="bg-[#0e0e0e] dark:bg-[#0e0e0e] docked full-width bottom-0 border-t border-[#1c1b1b] w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 relative z-40">
      <div className="flex flex-col items-center md:items-start gap-4">
        <span className="text-xl font-black text-[#e5e2e1]" style={{ fontFamily: "var(--font-michroma)" }}>UMBRELLA CORP</span>
        <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#393939] max-w-xs text-center md:text-left">
            © 1969 UMBRELLA PHARMACEUTICALS. ALL RIGHTS RESERVED. CLASSIFIED MATERIAL.
        </p>
      </div>
      <div className="flex gap-8 flex-wrap justify-center flex-row">
        <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Ethics Committee</a>
        <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Global Logistics</a>
        <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Security Protocols</a>
        <a className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#393939] hover:text-[#e5e2e1] transition-all duration-150" href="#">Legal Disclaimer</a>
      </div>
    </footer>
  );
}
