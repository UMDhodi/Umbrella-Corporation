'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AssetContainment() {
  const [showOverride, setShowOverride] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

    return (
        <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

            {/*  SideNavBar  */}
            
            {/*  Main Content  */}
            <div className="flex-1 overflow-hidden">
                {/*  TopAppBar  */}
                
                <div className="p-8 space-y-8">
                    {/*  Header Section  */}
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h1 className="text-6xl font-black font-headline tracking-tighter uppercase leading-none">Bio-Organic<br /><span className="text-primary-container">Asset Tracking</span></h1>
                            <p className="text-secondary max-w-md mt-4 font-light leading-relaxed">System-wide monitoring of experimental subjects within global jurisdictions. Authorized access only.</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="classified-stamp px-6 py-2 text-primary-container font-black text-2xl font-headline tracking-widest uppercase mb-4">
                                TOP SECRET
                            </div>
                            <div className="bg-surface-container-high p-4 text-right">
                                <div className="text-[10px] text-secondary font-headline uppercase tracking-widest">System Status</div>
                                <div className="text-primary-container font-black text-xl font-headline uppercase">Hazard: E-Series Mold</div>
                            </div>
                        </div>
                    </div>
                    {/*  Bento Grid Tactical Layout  */}
                    <div className="grid grid-cols-12 gap-6">
                        {/*  Main Tracking Terminal  */}
                        <div className="col-span-12 lg:col-span-8 space-y-6">
                            <div className="bg-surface-container-low p-1">
                                <div className="bg-surface p-6 border-l-4 border-primary-container">
                                    <div className="flex justify-between items-center mb-8">
                                        <h2 className="font-headline font-bold uppercase tracking-widest flex items-center">
                                            <span className="material-symbols-outlined mr-2 text-primary-container" data-icon="monitoring">monitoring</span>
                                            Active Subject Registry
                                        </h2>
                                        <span className="text-[10px] font-headline text-secondary">REF: [69-B-001]</span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-surface-container-lowest text-secondary uppercase text-[10px] font-headline tracking-widest">
                                                <tr>
                                                    <th className="p-4 font-medium">Designation</th>
                                                    <th className="p-4 font-medium">Status</th>
                                                    <th className="p-4 font-medium">Bio-Sign</th>
                                                    <th className="p-4 font-medium">Security</th>
                                                    <th className="p-4 font-medium text-right">Protocol</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-surface-container-high">
                                                <tr className="hover:bg-surface-container-high transition-colors group">
                                                    <td className="p-4">
                                                        <div className="font-headline font-bold text-sm">Subject: SOLDAT SERIES</div>
                                                        <div className="text-[10px] opacity-40 uppercase">BSAA Bio-Soldier</div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="flex items-center text-[10px] font-bold text-primary-container uppercase">
                                                            <span className="w-1.5 h-1.5 bg-primary-container rounded-full mr-2 animate-pulse"></span>
                                                            Active Deployment
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        <div className="w-24 h-4 bg-surface-container-highest flex items-center p-0.5">
                                                            <div className="bg-primary-container h-full w-[85%]"></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="text-[10px] px-2 py-1 bg-primary-container text-on-primary-container font-black">LEVEL 5 - CRITICAL</span>
                                                    </td>
                                                    <td className="p-4 text-right font-headline text-xs font-bold text-secondary">P-70-B</td>
                                                </tr>
                                                <tr className="hover:bg-surface-container-high transition-colors">
                                                    <td className="p-4">
                                                        <div className="font-headline font-bold text-sm">Subject: MOROAIC VARIANT</div>
                                                        <div className="text-[10px] opacity-40 uppercase">Village Incident</div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="flex items-center text-[10px] font-bold text-green-500 uppercase">
                                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                                                            Dormant
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        <div className="w-24 h-4 bg-surface-container-highest flex items-center p-0.5">
                                                            <div className="bg-green-500 h-full w-[20%]"></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="text-[10px] px-2 py-1 bg-secondary-container text-on-secondary-container font-black">LEVEL 3 - SECURE</span>
                                                    </td>
                                                    <td className="p-4 text-right font-headline text-xs font-bold text-secondary">P-12-A</td>
                                                </tr>
                                                <tr className="hover:bg-surface-container-high transition-colors">
                                                    <td className="p-4">
                                                        <div className="font-headline font-bold text-sm">Subject: LYCAN ALPHA</div>
                                                        <div className="text-[10px] opacity-40 uppercase">Hound Wolf Target</div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="flex items-center text-[10px] font-bold text-secondary uppercase">
                                                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        <div className="w-24 h-4 bg-surface-container-highest flex items-center p-0.5">
                                                            <div className="bg-secondary h-full w-[65%]"></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="text-[10px] px-2 py-1 bg-surface-container-highest text-secondary font-black">LEVEL 2 - MONITOR</span>
                                                    </td>
                                                    <td className="p-4 text-right font-headline text-xs font-bold text-secondary">P-05-D</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*  Security Protocols  */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-surface-container-high p-6 border-t-2 border-primary-container">
                                    <h3 className="font-headline font-bold text-xs uppercase tracking-widest mb-4">Protocol: Aerosol Dispersion</h3>
                                    <p className="text-xs text-secondary leading-relaxed mb-6 opacity-80">Manual override required. System-wide anti-viral deployment initiated in the event of Level 5 containment failure. All non-essential staff must evacuate immediately.</p>
                                    <button onClick={() => setShowOverride(true)} className="text-primary-container font-headline font-black text-[10px] tracking-widest uppercase flex items-center group cursor-pointer hover:opacity-80">
                                        AUTHORIZE OVERRIDE
                                        <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-1" data-icon="chevron_right">chevron_right</span>
                                    </button>
                                </div>
                                <div className="bg-surface-container-high p-6 border-t-2 border-secondary-container">
                                    <h3 className="font-headline font-bold text-xs uppercase tracking-widest mb-4">Protocol: Megamycete Suppression</h3>
                                    <p className="text-xs text-secondary leading-relaxed mb-6 opacity-80">Atmospheric fungicidal deployment for specialized combat areas. Automated release based on bio-sign deviation of ±15%.</p>
                                    <button onClick={() => setShowStatus(true)} className="text-secondary font-headline font-black text-[10px] tracking-widest uppercase flex items-center group cursor-pointer hover:opacity-80">
                                        SYSTEM STATUS
                                        <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-1" data-icon="chevron_right">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*  Metrics & Side Stats  */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">
                            {/*  Breach Probability Card  */}
                            <div className="bg-primary-container p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-20">
                                    <span className="material-symbols-outlined text-8xl" data-icon="warning" style={{ "fontVariationSettings": "'FILL' 1" }}>warning</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[10px] font-headline font-black text-on-primary-fixed tracking-[0.2em] uppercase mb-1">Breach Probability</div>
                                    <div className="text-7xl font-black font-headline tracking-tighter text-on-primary-container">84.2%</div>
                                    <div className="mt-4 flex items-center space-x-2">
                                        <div className="flex-1 h-1 bg-on-primary-fixed-variant">
                                            <div className="h-full bg-on-primary-container w-[84%]"></div>
                                        </div>
                                        <span className="text-[10px] font-black font-headline text-on-primary-container">CRITICAL</span>
                                    </div>
                                </div>
                            </div>
                            {/*  Facility Map / Grid  */}
                            <div className="bg-surface-container-high p-6 aspect-square flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-headline font-bold text-[10px] uppercase tracking-widest">Sector: Romania (Village)</h3>
                                    <div className="classified-stamp border-2 border-primary-container px-2 py-0.5 text-[8px] font-black text-primary-container">CLASSIFIED</div>
                                </div>
                                <div className="flex-1 relative border border-outline-variant/30 grid grid-cols-6 grid-rows-6">
                                    {/*  Tactical Grid Simulation  */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                        <span className="material-symbols-outlined text-[200px]" data-icon="dna">genetics</span>
                                    </div>
                                    {/*  Map dots  */}
                                    <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-primary-container animate-ping"></div>
                                    <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-primary-container"></div>
                                    <div className="absolute bottom-[40%] right-[15%] w-2 h-2 bg-secondary"></div>
                                    {/*  Static Grid Lines  */}
                                    <div className="col-span-full border-b border-outline-variant/20"></div>
                                    <div className="col-span-full border-b border-outline-variant/20"></div>
                                    <div className="col-span-full border-b border-outline-variant/20"></div>
                                    <div className="col-span-full border-b border-outline-variant/20"></div>
                                    <div className="col-span-full border-b border-outline-variant/20"></div>
                                </div>
                                <div className="mt-4 flex justify-between text-[10px] font-headline text-secondary opacity-60">
                                    <span>LAT: 45.94.32 N</span>
                                    <span>LNG: 24.96.68 E</span>
                                </div>
                            </div>
                            {/*  Asset Diagram Placeholder  */}
                            <div className="bg-surface-container-lowest p-6 border border-outline-variant/10">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-surface-container-high">
                                        <span className="material-symbols-outlined text-primary-container" data-icon="biotech">biotech</span>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-headline font-bold uppercase text-secondary">Asset Anatomy</div>
                                        <div className="text-xs font-bold font-headline uppercase">Neural Interface Failure</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                                        <span className="text-secondary opacity-60">Synaptic Feedback</span>
                                        <span className="text-primary-container font-black">UNRESPONSIVE</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-surface-container-high">
                                        <div className="h-full bg-primary-container w-full"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                                        <span className="text-secondary opacity-60">Muscular Density</span>
                                        <span className="text-on-surface font-black">+420% AVG</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-surface-container-high">
                                        <div className="h-full bg-secondary w-[90%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Footer Redaction  */}
                    <footer className="mt-12 pt-8 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center opacity-40">
                        <div className="text-[10px] font-headline uppercase tracking-[0.3em]">
                            © 2026 Blue Umbrella | All Rights Reserved | Non-Disclosure Agreement Active
                        </div>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <span className="bg-on-surface h-3 w-12"></span>
                            <span className="bg-on-surface h-3 w-8"></span>
                            <span className="bg-on-surface h-3 w-20"></span>
                        </div>
                    </footer>
                </div>
            </div>

        
      {/* OVERRIDE MODAL */}
      {showOverride && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#131313] border-t-4 border-[#d2002a] p-8 max-w-md w-full shadow-[0_0_40px_rgba(210,0,42,0.3)]">
            <div className="flex items-center mb-6 text-[#d2002a]">
              <span className="material-symbols-outlined text-4xl mr-4" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <h2 className="font-headline font-black text-2xl uppercase tracking-tighter">Authorize Override</h2>
            </div>
            <p className="text-[#e5e2e1] opacity-70 font-mono text-sm leading-relaxed mb-8">
              WARNING: Authorizing Aerosol Dispersion will flood Sector Romania with anti-viral agents. Minimum estimated casualty rate: 89%. 
              <br /><br />
              Please provide biometric confirmation to proceed with purge.
            </p>
            <div className="flex justify-end space-x-4 font-headline uppercase text-xs font-bold tracking-widest">
              <button onClick={() => setShowOverride(false)} className="text-[#e5e2e1] opacity-50 hover:opacity-100 px-4 py-2 transition-opacity">Cancel</button>
              <button onClick={() => setShowOverride(false)} className="bg-[#d2002a] text-white px-6 py-2 hover:bg-neutral-600 transition-colors shadow-[0_0_15px_rgba(210,0,42,0.5)]">Initiate Sequence</button>
            </div>
          </div>
        </div>
      )}

      {/* SYSTEM STATUS MODAL */}
      {showStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#131313] border-t-4 border-secondary-container p-8 max-w-sm w-full shadow-[0_0_40px_rgba(70,71,71,0.3)]">
            <div className="flex items-center mb-6 text-on-surface">
              <span className="material-symbols-outlined text-4xl mr-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <h2 className="font-headline font-black text-2xl uppercase tracking-tighter">System Status</h2>
            </div>
            
            <div className="space-y-4 mb-8">
               <div className="bg-surface-container-high p-3">
                  <div className="text-[10px] font-headline uppercase opacity-50 tracking-widest">Megamycete Suppression System</div>
                  <div className="text-emerald-500 font-bold font-mono">NOMINAL / ONLINE</div>
               </div>
               <div className="bg-surface-container-high p-3">
                  <div className="text-[10px] font-headline uppercase opacity-50 tracking-widest">Fungicidal Reserves</div>
                  <div className="text-on-surface font-black font-headline text-xl">84.2%</div>
               </div>
            </div>

            <div className="flex justify-end font-headline uppercase text-xs font-bold tracking-widest">
              <button onClick={() => setShowStatus(false)} className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-6 py-2 transition-colors">Close Terminal</button>
            </div>
          </div>
        </div>
      )}

</div>
    );
}
