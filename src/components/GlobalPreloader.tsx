'use client';

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

// A module-scoped variable persists across Next.js SPA transitions 
// but is completely reset upon a hard browser reload.
let hasRunPreloader = false;

export default function GlobalPreloader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(hasRunPreloader);

  useEffect(() => {
    if (hasRunPreloader) {
      setIsLoaded(true);
    }
  }, []);

  const handleComplete = () => {
    hasRunPreloader = true;
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <Preloader onComplete={handleComplete} />}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} flex flex-col min-h-screen relative z-10`}>
        {children}
      </div>
    </>
  );
}
