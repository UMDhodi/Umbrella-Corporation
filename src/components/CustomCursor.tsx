'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports hover
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      // Small lag for the outer ring
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
      // Instant for the inner dot
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 1.5, borderColor: '#ff1a1a', backgroundColor: 'rgba(255,26,26,0.1)', duration: 0.3 });
      if (cursorDotRef.current) gsap.to(cursorDotRef.current, { opacity: 0, duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'transparent', duration: 0.3 });
      if (cursorDotRef.current) gsap.to(cursorDotRef.current, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add listners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .group, input, select, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/30 -translate-x-1/2" />
      </div>
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-bio-red pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
