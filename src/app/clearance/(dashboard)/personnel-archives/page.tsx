import Link from 'next/link';
import React from 'react';

export default function PersonnelArchives() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">


      {/*  SideNavBar (Mobile hidden, Web visible)  */}

      {/*  Main Content  */}
      <div className="flex-1 overflow-hidden">
        {/*  Header Section  */}

        {/*  Executive Board Highlight  */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-headline font-black text-xl tracking-widest uppercase">EXECUTIVE BOARD</h2>
            <div className="h-px flex-grow bg-surface-container-highest"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {/*  Executive 1  */}
            <div className="bg-surface-container-high p-8 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 -mr-12 -mt-12 rotate-45"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-28 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 grayscale">
                  <img alt="Director Portrait" className="w-full h-full object-cover mix-blend-luminosity" data-alt="Corporate director in suit, monochrome profile" src="/images/Spencer.png" />
                </div>
                <div className="flex-grow">
                  <p className="font-headline font-bold text-xs text-primary-container tracking-widest uppercase mb-1">ID: #000-001</p>
                  <h3 className="font-headline font-black text-2xl tracking-tight uppercase text-on-background">Oswald E. Spencer</h3>
                  <p className="text-secondary text-[10px] font-bold tracking-widest uppercase mt-1">Founding Director</p>
                  <div className="mt-4 flex gap-2">
                    <span className="bg-primary-container text-on-primary-container text-[8px] font-bold px-2 py-0.5 tracking-tighter uppercase">Clearance: OMEGA</span>
                    <span className="bg-error/20 text-error text-[8px] font-bold px-2 py-0.5 tracking-tighter border border-error/50 uppercase">Status: DECEASED (2006)</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Executive 2  */}
            <div className="bg-surface-container-high p-8 group relative overflow-hidden">
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-28 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 grayscale">
                  <img alt="Director Portrait" className="w-full h-full object-cover mix-blend-luminosity" data-alt="Elderly aristocratic man in suit, monochrome" src="/images/Ashford.png" />
                </div>
                <div className="flex-grow">
                  <p className="font-headline font-bold text-xs text-primary-container tracking-widest uppercase mb-1">ID: #000-002</p>
                  <h3 className="font-headline font-black text-2xl tracking-tight uppercase text-on-background">Edward Ashford</h3>
                  <p className="text-secondary text-[10px] font-bold tracking-widest uppercase mt-1">Executive Board Member</p>
                  <div className="mt-4 flex gap-2">
                    <span className="bg-primary-container text-on-primary-container text-[8px] font-bold px-2 py-0.5 tracking-tighter uppercase">Clearance: OMEGA</span>
                    <span className="bg-error/20 text-error text-[8px] font-bold px-2 py-0.5 tracking-tighter border border-error/50 uppercase">Status: DECEASED (1968)</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Executive 3  */}
            <div className="bg-surface-container-high p-8 group relative overflow-hidden">
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-28 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 grayscale">
                  <img alt="Director Portrait" className="w-full h-full object-cover mix-blend-luminosity" data-alt="Middle aged scientist in lab coat, monochrome" src="/images/Marcus.png" />
                </div>
                <div className="flex-grow">
                  <p className="font-headline font-bold text-xs text-primary-container tracking-widest uppercase mb-1">ID: #000-003</p>
                  <h3 className="font-headline font-black text-2xl tracking-tight uppercase text-on-background">James Marcus</h3>
                  <p className="text-secondary text-[10px] font-bold tracking-widest uppercase mt-1">Research Director</p>
                  <div className="mt-4 flex gap-2">
                    <span className="bg-primary-container text-on-primary-container text-[8px] font-bold px-2 py-0.5 tracking-tighter uppercase">Clearance: OMEGA</span>
                    <span className="bg-error/20 text-error text-[8px] font-bold px-2 py-0.5 tracking-tighter border border-error/50 uppercase">Status: DECEASED (1998)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Personnel Grid  */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline font-black text-xl tracking-widest uppercase">RESEARCH &amp; OPERATIONS</h2>
            <div className="flex gap-4">
              <button className="bg-surface-container-lowest border border-outline-variant/30 px-4 py-2 text-[10px] font-headline font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors">Filter: Dept</button>
              <button className="bg-surface-container-lowest border border-outline-variant/30 px-4 py-2 text-[10px] font-headline font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors">Sort: Clearance</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10">
            {/*  Profile Item 1  */}
            <div className="bg-surface p-6 flex flex-col md:flex-row gap-8 items-start border-l-4 border-primary-container">
              <div className="w-32 h-40 bg-surface-container-lowest border border-outline-variant/20 flex-shrink-0 flex items-center justify-center grayscale overflow-hidden">
                <img alt="Employee Photo" className="w-full h-full object-cover mix-blend-overlay" data-alt="Portrait of a young male researcher, grain effect" src="/images/William.png" />
              </div>
              <div className="flex-grow font-headline">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter">Dr. William Birkin</h4>
                    <p className="text-xs font-bold tracking-widest text-primary-container uppercase mt-1">ID: #023-8849 | LEVEL 6</p>
                  </div>
                  <span className="text-[10px] bg-error/30 text-error px-2 py-1 font-black">TERMINATED (1998)</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Department</p>
                    <p className="text-xs font-bold uppercase">Biological Research</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Location</p>
                    <p className="text-xs font-bold uppercase">Arklay Laboratory</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-surface-container-low border-l border-primary-container/30">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Psychological Evaluation Snippet</p>
                  <p className="text-[11px] leading-relaxed italic text-secondary">"Subject displays obsessive tendencies toward results. Highly competitive but invaluable to the G-Project. Suggest increased surveillance."</p>
                </div>
              </div>
            </div>
            {/*  Profile Item 2  */}
            <div className="bg-surface p-6 flex flex-col md:flex-row gap-8 items-start border-l-4 border-outline-variant">
              <div className="w-32 h-40 bg-surface-container-lowest border border-outline-variant/20 flex-shrink-0 flex items-center justify-center grayscale overflow-hidden">
                <img alt="Employee Photo" className="w-full h-full object-cover mix-blend-overlay" data-alt="Portrait of a female researcher in lab coat, noir" src="/images/Annette.png" />
              </div>
              <div className="flex-grow font-headline">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-on-surface/50">Dr. Annette Birkin</h4>
                    <p className="text-xs font-bold tracking-widest text-primary-container uppercase mt-1">ID: #023-8850 | LEVEL 5</p>
                  </div>
                  <span className="text-[10px] bg-surface-container-high text-on-surface opacity-50 px-2 py-1 font-black">RELOCATED</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Department</p>
                    <p className="text-xs font-bold uppercase">Viral Containment</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Location</p>
                    <p className="text-xs font-bold uppercase">Nest Undergrad</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-surface-container-low border-l border-outline-variant/30">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Psychological Evaluation Snippet</p>
                  <p className="text-[11px] leading-relaxed italic text-secondary">"Shows exceptional analytical capabilities. Professional relationship with ID #023-8849 remains within corporate guidelines."</p>
                </div>
              </div>
            </div>
            {/*  Profile Item 3  */}
            <div className="bg-surface p-6 flex flex-col md:flex-row gap-8 items-start border-l-4 border-primary-container">
              <div className="w-32 h-40 bg-surface-container-lowest border border-outline-variant/20 flex-shrink-0 flex items-center justify-center grayscale overflow-hidden">
                <img alt="Employee Photo" className="w-full h-full object-cover mix-blend-overlay" data-alt="Male security officer in sunglasses, dark" src="/images/Wesker.png" />
              </div>
              <div className="flex-grow font-headline">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter">Albert Wesker</h4>
                    <p className="text-xs font-bold tracking-widest text-primary-container uppercase mt-1">ID: #011-3329 | LEVEL 7</p>
                  </div>
                  <span className="text-[10px] bg-error/30 text-error px-2 py-1 font-black">DECEASED (1998)</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Department</p>
                    <p className="text-xs font-bold uppercase">U.S.S. Liaison</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Location</p>
                    <p className="text-xs font-bold uppercase">Special Forces HQ</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-surface-container-low border-l border-primary-container/30">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Psychological Evaluation Snippet</p>
                  <p className="text-[11px] leading-relaxed italic text-secondary">"Cold. Calculating. Ambition level exceeds standard psychological profiles. Loyalty currently deemed reliable but monitor closely."</p>
                </div>
              </div>
            </div>
            {/*  Profile Item 4 (Terminated)  */}
            <div className="bg-surface p-6 flex flex-col md:flex-row gap-8 items-start border-l-4 border-error overflow-hidden relative">
              <div className="absolute inset-0 bg-error/5 flex items-center justify-center pointer-events-none rotate-[-15deg]">
                <span className="text-error/20 text-6xl font-black border-4 border-error/20 px-4">TERMINATED</span>
              </div>
              <div className="w-32 h-40 bg-surface-container-lowest border border-outline-variant/20 flex-shrink-0 flex items-center justify-center grayscale opacity-20 overflow-hidden">
                <img alt="Employee Photo" className="w-full h-full object-cover mix-blend-overlay" data-alt="Portrait of a generic man, high contrast" src="/images/trevor.png" />
              </div>
              <div className="flex-grow font-headline opacity-30">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter">George Trevor</h4>
                    <p className="text-xs font-bold tracking-widest text-primary-container uppercase mt-1">ID: #001-4432 | LEVEL 4</p>
                  </div>
                  <span className="text-[10px] bg-error text-on-error px-2 py-1 font-black">TERMINATED</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Department</p>
                    <p className="text-xs font-bold uppercase">Architectural Engineering</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Location</p>
                    <p className="text-xs font-bold uppercase">Arklay Region</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-surface-container-low border-l border-error/30">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Psychological Evaluation Snippet</p>
                  <p className="text-[11px] leading-relaxed italic text-secondary">"Subject knowledge of facility layout poses unacceptable security risk. Contract concluded via Protocol 10-A."</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Footer / Data Density Grid  */}
        <footer className="mt-20 pt-12 border-t border-outline-variant/20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-primary-container font-headline font-bold text-xs tracking-widest uppercase block mb-4">CONFIDENTIALITY AGREEMENT</span>
            <p className="text-[10px] text-secondary leading-relaxed font-headline uppercase">By accessing this directory, you agree to the Umbrella Corporation Non-Disclosure Agreement (1969 Rev. 4). Any duplication, photography, or transcription of these files is a violation of international corporate law. Tracking is active. We are watching.</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[8px] tracking-[0.4em] opacity-40 uppercase">Total Active Count</p>
            <p className="text-3xl font-headline font-black text-on-background">4,812</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[8px] tracking-[0.4em] opacity-40 uppercase">Archived Count</p>
            <p className="text-3xl font-headline font-black text-primary-container">1,209</p>
          </div>
        </footer>
      </div>
      {/*  Visual Overlays  */}
      <div className="fixed inset-0 scanline opacity-30 pointer-events-none z-[100]"></div>
      <div className="fixed top-0 right-0 p-4 z-[60] pointer-events-none">
        <div className="text-[8px] font-mono text-primary-container text-right leading-tight">
          SYS_REF: 19.69.ALPHA<br />
          BUFFER: 0x88FF22<br />
          NET: ENCRYPTED
        </div>
      </div>

    </div>
  );
}
