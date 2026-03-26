'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NextImage from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname.startsWith('/clearance') || pathname === '/press/corporate-seals' || pathname === '/press/photo-assets' || pathname === '/press/boilerplate-text' || pathname === '/press/executive-portraits' || pathname === '/press/executive-training') return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Founders', path: '/founders' },
    { name: 'Press', path: '/press' },
  ];

  return (
    <nav className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-[1000] flex justify-between items-center w-full px-6 md:px-8 py-4 fixed border-b border-white/5">
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <NextImage 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg" 
          alt="Umbrella Logo" 
          width={28} 
          height={28} 
          priority
          className="opacity-90 h-6 md:h-7 w-auto" 
        />
        <div className="text-[16px] sm:text-[20px] md:text-[28px] font-black tracking-tighter text-[#ffffff] whitespace-nowrap overflow-visible leading-none" style={{ fontFamily: "var(--font-michroma)" }}>UMBRELLA CORP</div>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8 items-center">
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

      <div className="flex items-center gap-4">
        <Link
          href="/clearance"
          className="bg-primary-container text-on-primary-container px-4 md:px-6 py-2 font-headline font-bold uppercase tracking-widest text-[10px] md:text-xs hidden lg:block hover:bg-primary transition-colors"
        >
          CLEARANCE
        </Link>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#e5e2e1] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#131313] z-[999] flex flex-col p-8 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-['Space_Grotesk'] uppercase tracking-widest text-2xl font-bold ${isActive ? 'text-[#d2002a]' : 'text-[#e5e2e1]'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="h-[1px] bg-white/10 my-4"></div>
            
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#393939] leading-relaxed">
              SECURE ACCESS PORTAL // DESKTOP ONLY<br/>
              UMBRELLA CORP GLOBAL NETWORK
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
