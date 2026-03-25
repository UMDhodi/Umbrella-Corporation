import React from 'react';
import Link from 'next/link';

export default function PhotoAssetsPage() {
  return (
    <div className="flex-1 w-full bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden pt-12">
      <div className="flex min-h-screen justify-center">
        {/* Main Content */}
        <main className="flex-1 bg-surface-container-lowest p-8 md:p-12 max-w-7xl">
          <header className="mb-16 max-w-4xl relative">
            <Link href="/press" className="absolute -top-12 left-0 inline-flex items-center gap-2 text-sm font-headline tracking-widest text-on-surface hover:text-primary transition-colors uppercase mb-8">
              <span className="material-symbols-outlined text-[1rem]">arrow_back</span>
              Back to Press
            </Link>
          
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-black tracking-tighter text-red-700 dark:text-red-600 font-headline uppercase">UMBRELLA CORP</span>
              <div className="h-[1px] flex-1 bg-zinc-800/50"></div>
              <p className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">SOVEREIGN LABS // CLEARANCE: OMEGA</p>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">Visual Identity &amp; <span className="text-primary-container">Asset Catalog</span></h1>
            <div className="w-24 h-2 bg-primary-container mb-8"></div>
            <p className="font-body text-xl text-zinc-400 max-w-2xl leading-relaxed">System Archive 1969. Official internal documentation for corporate branding, tactical deployments, and industrial bio-containment infrastructure.</p>
          </header>

          {/* Section 1: Pharmaceutical */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-zinc-800/30">
              <div className="lg:col-span-4 py-12 pr-12 border-r border-zinc-800/30">
                <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary-container mb-4 block">Archive: 01-PHARMA</span>
                <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-6">The Pharmaceutical Public Face</h2>
                <p className="text-zinc-500 leading-relaxed mb-8">Clinical superiority and surgical precision. Our consumer pharmaceuticals redefine standard health and wellness through advanced synthetic chemistry.</p>
                <ul className="space-y-4 font-headline text-[10px] uppercase tracking-widest">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600"></span> Adravil™ Synthesis</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600"></span> Safeprinn® Delivery</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600"></span> Raccoon City Branch HQ</li>
                </ul>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 p-12 bg-surface">
                <div className="group relative aspect-square overflow-hidden bg-surface-container-high border border-zinc-800/50">
                  <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH3QzyToeM7NbN8qnMQPmyAavF5LHcYcjPRMWvpzv52bOOpQ2mXyvvzOpW9HlS5uLvyTmf2Cz97YPidYQZlDOZXySL8QKGtnMuNzhrW8Pi1dULrez1-CPOC1LxCGqSwwfHr4PKoUnnQu5fmJXTb2shkmxqksvVdcBdbPZeigaUtoHbeozGJ5TU_1Dgyada4_WmX4Vojqd6zYlmzsHlnfhgHwiguwzj6hdthwhlm5CxKIgq8W-55uA6v2sfe4vOc7raWxS4J1JXEOM"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <span className="font-headline font-bold text-xs uppercase tracking-widest">Unit-72 Packaging</span>
                  </div>
                </div>
                <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-zinc-800/50 md:translate-y-12">
                  <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-SVSfzQ4XEKBlHaclzMyixJd5UDl4oOCIWcQRG551sj0YdNQJRTplSid1nxNrYzQyz7v7l9rKHv_6EXPbxxnQNNvoyDuy4PN_ilJjUs03hd_wuMsfjVS-Ay1WNeSR1J40lDHM3hlf27mWVsmS15NEF_HJGDH8Jc0yt-wylrjRn3Ik6jxMw625-6wBbZBMRkf2DP5GFym18bw01nlA8eV8LsBm9JQnYagtdWS6GauDMM7ijbtoBtz5KPwJJBltltHqScHG_QZIIZs"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <span className="font-headline font-bold text-xs uppercase tracking-widest">Raccoon City HQ</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Tactical Assets */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-zinc-800/30 bg-surface-container-low">
              <div className="lg:col-span-8 p-8 md:p-12 relative overflow-hidden h-[600px]">
                <img className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzI4xqUxTXwNSPW7OfV5-hznkwxfZadR5LFsgWkmwCAMXamEDtPQTo1oCDftjNBl9lCVJdYD7sbydEhA1IrCz0cNvy5PYW06TYpQXEIGaLYG9G3u8UygGRXhzURSHhmVrR60A9d1QIUh8v2F3u1FHscTXZ-Bo8JkR1VMZ9J1ftpksf7Cm55QQLb72eDg42iP9b-1RQbacwp8MOosOsqqLb7NKnQLVXOnMV-3p_SbVHQr25sypu0LCRpvCmzbgovlaoUuXo0XkNOWI"/>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-center max-w-md">
                  <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary-container mb-4">Archive: 02-TACTICAL</span>
                  <h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-6 italic leading-none">High-Tech Tactical Assets</h2>
                  <p className="text-zinc-400 mb-8 border-l-2 border-red-700 pl-4">Elite assets for corporate security and biohazard containment. Equipment engineered for maximum intimidation and operational absolute.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/60 backdrop-blur-md p-4 border border-zinc-800">
                      <p className="text-[8px] font-headline uppercase tracking-[0.2em] text-zinc-500 mb-2">Transport</p>
                      <p className="text-xs font-bold font-headline uppercase">UH-60 Black Hawk</p>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md p-4 border border-zinc-800">
                      <p className="text-[8px] font-headline uppercase tracking-[0.2em] text-zinc-500 mb-2">Clearance</p>
                      <p className="text-xs font-bold font-headline uppercase">Level 8 Combat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 p-12 border-l border-zinc-800/30 flex flex-col justify-center">
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 bg-zinc-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-red-600 text-3xl">masks</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm uppercase mb-2">S.S. Gas Mask</h4>
                      <p className="text-[10px] text-zinc-500 leading-relaxed uppercase">Dual-filter CBRN protection with reinforced red-tinted polymer optics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 bg-zinc-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-red-600 text-3xl">shield</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm uppercase mb-2">Ballistic Kevlar</h4>
                      <p className="text-[10px] text-zinc-500 leading-relaxed uppercase">High-density matte black composite weave. Modular system compatibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Industrial Subterranean */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary-container mb-4 block">Archive: 03-INDUSTRIAL</span>
                <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter">Subterranean Industrial Assets</h2>
              </div>
              <div className="hidden md:block text-right">
                <p className="font-headline text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Status: Level 10 Containment</p>
                <p className="font-headline text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Location: [REDACTED]</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
              <div className="md:col-span-2 relative overflow-hidden border border-zinc-800 group">
                <img className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvmhC0h3Gf9sXn0tqSo-VHixn2cSmZVQsj_6soUuEvTc8QV_mQVZrM6w1k9kmy-bCiM2T3szA5GU5tZcCCgb1x_8hffSx0Tr0uYmzfGgNgHL6Pa9pFBngXhxdHAsDMJZq62wxbD5n_sTslyWurQJjKhsyjp7jFJPQ8zw5u4P2NGHdqJqlblBZgRAOFIWrcOsxwlj8yrsZAq-MiNxWA1v8LlTRWj7QlJd5V7xcA8UTe7OcTevegVgOy4ACTYj1Zeh07xisDhC8qYvU"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="font-headline text-2xl font-bold uppercase mb-2">The Hive Complex</h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest max-w-xs">Primary underground research facility. Biological experimentation zone.</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 flex flex-col border border-zinc-800/50">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6">biotech</span>
                <h3 className="font-headline text-lg font-bold uppercase mb-4">T-Virus Assets</h3>
                <div className="flex-1 border-l border-zinc-700/50 pl-4 py-2">
                  <p className="text-[10px] text-zinc-500 uppercase leading-loose">
                    // Double Helix Vials<br/>
                    // Stabilization Agents<br/>
                    // Neural Mutation Logs<br/>
                    // Antigen Protocols
                  </p>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="w-8 h-2 bg-blue-600"></div>
                  <div className="w-8 h-2 bg-red-600"></div>
                  <div className="w-8 h-2 bg-yellow-600"></div>
                </div>
              </div>
              <div className="bg-zinc-950 p-8 flex flex-col border border-zinc-800">
                <div className="mb-auto">
                  <p className="font-headline text-[8px] uppercase tracking-widest text-zinc-500 mb-4">Identification Protocol</p>
                  <div className="space-y-4">
                    <div className="p-3 bg-red-900/20 border-l-2 border-red-600 flex justify-between items-center">
                      <span className="font-headline text-[10px] uppercase font-bold">RED KEYCARD</span>
                      <span className="material-symbols-outlined text-xs">key</span>
                    </div>
                    <div className="p-3 bg-zinc-900 border-l-2 border-zinc-600 flex justify-between items-center">
                      <span className="font-headline text-[10px] uppercase font-bold text-zinc-500">BLUE KEYCARD</span>
                      <span className="material-symbols-outlined text-xs text-zinc-600">key</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-zinc-800">
                  <p className="text-[10px] text-red-600 font-bold uppercase animate-pulse">System Override Required</p>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
