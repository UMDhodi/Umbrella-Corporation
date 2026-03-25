import React from 'react';
import Link from 'next/link';

export default function BoilerplateTextPage() {
  return (
    <div className="flex-1 w-full bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      
      <main className="pt-16 pb-24 min-h-screen flex flex-col items-center relative">
        <div className="w-full max-w-4xl px-6 mb-8 flex justify-start">
          <Link href="/press" className="flex items-center gap-2 text-primary-container hover:text-primary transition-colors group">
            <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
            <span className="font-label uppercase tracking-widest text-xs font-bold">Back to Press</span>
          </Link>
        </div>
        {/* Center Aligned Document Layout */}
        <div className="max-w-4xl w-full px-6 flex flex-col items-center">
          
          {/* Corporate Identity Header */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-10 overflow-hidden bg-surface-container-highest p-4 flex items-center justify-center border border-outline-variant/30 shadow-[0_0_15px_rgba(210,0,42,0.1)]">
              <img alt="Umbrella Corporation Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(210,0,42,0.6)]" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg"/>
            </div>
            <div className="h-px w-24 bg-primary-container mb-8"></div>
            <h1 className="font-headline text-5xl md:text-6xl font-bold uppercase tracking-tighter text-on-surface leading-none mb-4">
                                THE PUBLIC RELATIONS <span className="text-primary-container">BOILERPLATE</span>
            </h1>
            <p className="font-headline text-lg uppercase tracking-[0.2em] text-on-surface/60 font-medium">
                                Corporate Identity &amp; Surface-Level Communications
            </p>
          </div>

          {/* Content Slab */}
          <section className="w-full bg-surface border-l-4 border-primary-container p-12 md:p-20 shadow-2xl relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div className="space-y-1">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface/40">Reference Code</p>
                <p className="font-headline font-bold text-sm">UC-PR-1969-X-01</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface/40">Status</p>
                <p className="font-headline font-bold text-sm text-primary-container">APPROVED FOR RELEASE</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="font-body text-xl md:text-2xl leading-relaxed text-on-surface/90 font-light text-justify">
                                  Umbrella Corporation is a global leader in pharmaceutical innovation, dedicated to the development of life-saving medical technologies and biological remediation. Founded on the principle of <span className="text-on-surface font-semibold italic">"Protecting the Health of the People,"</span> our mission is to provide cutting-edge healthcare solutions while maintaining the highest standards of bio-ethical integrity. 
              </p>
              <div className="my-10 h-px bg-surface-container-highest w-1/3"></div>
              <p className="font-body text-lg leading-loose text-on-surface/70 text-justify">
                                  Our operations commit immense resources to global hazard neutralization and the restoration of ecosystems affected by industrial instability. Our infrastructure spans six continents, housing the world's most advanced synthetic biology facilities and containment architectures.
              </p>
            </div>


          </section>



        </div>
      </main>

      {/* Background Technical Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #e5e2e1 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      </div>

      {/* Asymmetric Red Accent */}
      <div className="fixed bottom-0 right-0 w-1/4 h-1 bg-primary-container z-40 opacity-50"></div>

    </div>
  );
}
