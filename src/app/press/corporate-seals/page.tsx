import React from 'react';
import Link from 'next/link';

export default function CorporateSealsPage() {
  return (
    <div className="flex-1 w-full bg-surface selection:bg-primary-container selection:text-on-primary-container font-body overflow-x-hidden pt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="w-full pb-12 px-8 md:px-24 border-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <Link href="/press" className="inline-flex items-center gap-2 text-sm font-headline tracking-widest text-on-surface hover:text-primary transition-colors uppercase">
                <span className="material-symbols-outlined text-[1rem]">arrow_back</span>
                Back to Press
              </Link>
              <div>
                <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container font-label text-[10px] tracking-[0.3em] font-black uppercase mb-4">
                    Level 5 Clearance Required
                </span>
                <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase text-on-surface">
                    Insignia <span className="text-primary-container">Archive</span>
                </h1>
              </div>
            </div>
            <div className="max-w-md text-right border-r-4 border-primary-container pr-6">
              <p className="font-label text-xs uppercase tracking-widest text-neutral-500 font-bold">Document Ref: UC-7742-G</p>
              <p className="font-label text-xs uppercase tracking-widest text-neutral-500 font-bold">System Status: Secure</p>
              <p className="font-label text-xs uppercase tracking-widest text-neutral-500 font-bold">Archive Location: Raccoon City / Paris / Tokyo</p>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {/* SECTION 1: THE STANDARD CORPORATE LOGO */}
          <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-0 bg-surface-container-lowest">
            <div className="relative min-h-[400px] flex items-center justify-center p-12 bg-surface">
              <div className="absolute top-8 left-8">
                <span className="font-label text-[10px] text-primary tracking-[0.4em] uppercase font-bold">01 // Foundation</span>
              </div>
              <img alt="Corporate Logo" className="w-64 h-64 object-contain filter brightness-110 drop-shadow-[0_0_20px_rgba(210,0,42,0.3)]" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg"/>
            </div>
            <div className="p-12 md:p-24 flex flex-col justify-center space-y-8 bg-surface-container-low">
              <h2 className="font-headline text-4xl font-bold tracking-tight uppercase border-l-8 border-primary-container pl-8">
                  The Standard <br/>Corporate Logo
              </h2>
              <div className="space-y-6 max-w-xl">
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                    The octagonal umbrella is the foundational visual pillar of the Umbrella Corporation. Developed by the Ashford family, the design evokes both protection and unyielding structural integrity.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-high">
                    <span className="block font-label text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Motto</span>
                    <p className="font-headline text-sm font-bold text-on-surface">"Protecting the Health of the People"</p>
                  </div>
                  <div className="p-4 bg-surface-container-high">
                    <span className="block font-label text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Origin</span>
                    <p className="font-headline text-sm font-bold text-on-surface">Ashford Family Crest Variant</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE GLOBAL EXECUTIVE SEAL */}
          <section className="p-8 md:p-24 bg-surface">
            <div className="flex flex-col items-center text-center space-y-12">
              <div className="space-y-4">
                <span className="font-label text-[10px] text-primary tracking-[0.4em] uppercase font-bold">02 // Executive Authority</span>
                <h2 className="font-headline text-5xl font-black uppercase tracking-tighter">Global Executive <span className="text-primary-container">Seal</span></h2>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary-container opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                <img alt="Executive Seal" className="relative w-80 h-80 object-contain drop-shadow-[0_0_30px_rgba(210,0,42,0.3)]" src="/images/seal.png" />
              </div>
              <div className="bg-surface-container-high p-6 max-w-2xl border-t-2 border-primary-container">
                <p className="font-label text-sm italic tracking-widest text-on-primary-container mb-2">"Conserve the Future"</p>
                <p className="font-body text-sm text-neutral-400">The Executive Seal is reserved for top-tier archival documents, facility entrances, and high-clearance orbital communications. It signifies the global reach and absolute authority of the board.</p>
              </div>
            </div>
          </section>

          {/* SECTION 3: DEPARTMENTAL VARIANTS */}
          <section className="bg-surface-container-lowest py-24 px-8 md:px-24">
            <div className="mb-16">
              <span className="font-label text-[10px] text-primary tracking-[0.4em] uppercase font-bold">03 // Specializations</span>
              <h2 className="font-headline text-5xl font-black uppercase tracking-tighter mt-4 text-on-surface">Departmental Variants</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="bg-surface group border-r border-outline-variant/10 p-12 flex flex-col items-center space-y-8 hover:bg-surface-container-low transition-all duration-300">
                <div className="w-32 h-32 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20"></div>
                  <span className="material-symbols-outlined text-7xl text-blue-500 scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                </div>
                <div className="text-center space-y-4">
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-blue-500">Umbrella Medical</h3>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-widest font-bold">Blue/White Variant</p>
                  <p className="font-body text-sm text-on-surface-variant">The clinical healthcare division seal. Utilizes a calming blue to denote trust and biological stability.</p>
                </div>
              </div>
              <div className="bg-surface-container-low group border-r border-outline-variant/10 p-12 flex flex-col items-center space-y-8 hover:bg-surface-container-high transition-all duration-300">
                <div className="w-32 h-32 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary-container/10 blur-2xl group-hover:bg-primary-container/20"></div>
                  <span className="material-symbols-outlined text-7xl text-primary-container scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                </div>
                <div className="text-center space-y-4">
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary-container">U.B.C.S.</h3>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-widest font-bold">Biohazard Countermeasure</p>
                  <p className="font-body text-sm text-on-surface-variant">Combines the umbrella with military motifs including swords and shields for search and rescue operations.</p>
                </div>
              </div>
              <div className="bg-surface group p-12 flex flex-col items-center space-y-8 hover:bg-surface-container-low transition-all duration-300">
                <div className="w-32 h-32 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-red-900/20 blur-2xl group-hover:bg-red-800/30"></div>
                  <span className="material-symbols-outlined text-7xl text-red-900 scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                <div className="text-center space-y-4">
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-white">Security Service</h3>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-widest font-bold">Aggressive Stance (U.S.S.)</p>
                  <p className="font-body text-sm text-on-surface-variant">A dark, monochromatic variant used by elite security forces. Represents shadows and total containment.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: THE BLUE UMBRELLA SEAL */}
          <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-surface">
            <div className="p-12 md:p-24 bg-surface flex flex-col justify-center space-y-8 order-2 md:order-1">
              <span className="font-label text-[10px] text-blue-500 tracking-[0.4em] uppercase font-bold">04 // Legacy Restoration</span>
              <h2 className="font-headline text-5xl font-black uppercase tracking-tighter text-blue-500">The 'Blue Umbrella' <br/>Seal</h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl">
                  Representing the post-collapse 'Umbrella Co.' private military entity. This blue variation signifies the transition from biological research to paramilitary intervention and corporate atonement.
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-24 bg-blue-500"></div>
                <div className="h-1 w-12 bg-blue-900"></div>
                <div className="h-1 w-6 bg-blue-950"></div>
              </div>
            </div>
            <div className="relative min-h-[500px] flex items-center justify-center p-12 bg-surface-container-lowest order-1 md:order-2">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #3b82f6 0%, transparent 70%)" }}></div>
              <img alt="Blue Umbrella Seal" className="w-80 h-80 object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]" src="/images/blue_umbrella.png"/>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
