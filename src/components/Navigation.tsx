'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navigation() {
  const pathname = usePathname();

  if (pathname.startsWith('/clearance') || pathname === '/press/corporate-seals' || pathname === '/press/photo-assets' || pathname === '/press/boilerplate-text' || pathname === '/press/executive-portraits' || pathname === '/press/executive-training') return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Founders', path: '/founders' },
    { name: 'Press', path: '/press' },
  ];

  return (
    <nav className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 flex justify-between items-center w-full px-8 py-4 fixed">
      <div className="flex items-center gap-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg" alt="Umbrella Logo" className="w-8 h-8 opacity-90" />
        <div className="text-[28px] font-black tracking-tighter text-[#ffffff] dark:text-[#ffffff]" style={{ fontFamily: "var(--font-michroma)" }}>UMBRELLA CORP</div>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`font-['Space_Grotesk'] uppercase tracking-tighter text-sm pb-1 transition-colors duration-150 ${isActive
                  ? 'text-[#d2002a] border-b-2 border-[#d2002a] hover:text-[#ffb3b0]'
                  : 'text-[#e5e2e1] lg:opacity-70 hover:text-[#ffb3b0]'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <Link
        href="/clearance"
        className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-bold uppercase tracking-widest text-xs hidden sm:block hover:bg-primary transition-colors"
      >
        CLEARANCE
      </Link>
    </nav>
  );
}
