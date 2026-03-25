import Link from 'next/link';
import React from 'react';

export default function GlobalSectors() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

      {/*  SideNavBar (Shared Component)  */}
      
      {/*  Main Canvas  */}
      <div className="flex-1 overflow-hidden">
        {/*  TopAppBar (Shared Component)  */}
        
        {/*  Content Body  */}
        <div className="flex-1 p-8 relative">
          {/*  Background Decorative Scanline Effect  */}
          <div className="absolute inset-0 scanline opacity-20 pointer-events-none"></div>
          {/*  Header Section  */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-black font-headline tracking-tighter mb-4">GLOBAL SECTOR STATUS</h1>
              <div className="flex items-center gap-4 font-headline text-sm tracking-widest uppercase text-primary">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary animate-pulse"></span> SYSTEM ONLINE</span>
                <span className="opacity-30">/</span>
                <span className="text-on-surface opacity-50">DATE: 14 NOV 2026</span>
                <span className="opacity-30">/</span>
                <span className="text-on-surface opacity-50">TIME: 04:22 GMT</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col items-end">
              <div className="bg-surface-container-high p-4 flex flex-col gap-1 min-w-[240px]">
                <span className="text-[10px] font-headline tracking-[0.3em] uppercase opacity-50">Network Integrity</span>
                <div className="flex gap-1">
                  <div className="h-1 flex-1 bg-primary-container"></div>
                  <div className="h-1 flex-1 bg-primary-container"></div>
                  <div className="h-1 flex-1 bg-primary-container"></div>
                  <div className="h-1 flex-1 bg-primary-container"></div>
                  <div className="h-1 flex-1 bg-primary-container"></div>
                  <div className="h-1 flex-1 bg-primary-container opacity-20"></div>
                </div>
                <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-right mt-1">84% OPERATIONAL</span>
              </div>
            </div>
          </div>
          {/*  Bento Grid - Sectors  */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
            {/*  Large Featured Sector: Arklay  */}
            <div className="md:col-span-8 bg-surface-container-low p-8 flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-headline font-black tracking-widest inline-block w-fit">SECTOR 1</span>
                  <h2 className="text-4xl font-black font-headline tracking-tight">ARKLAY MOUNTAINS</h2>
                  <p className="text-sm opacity-60 font-body max-w-sm">Destroyed in 1998.</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-headline tracking-widest opacity-50">COORDINATES</span>
                  <span className="text-xs font-mono">38.5412° N, 92.2010° W</span>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-headline tracking-widest uppercase opacity-40">Primary Purpose</span>
                  <span className="text-lg font-headline font-bold text-primary">MUTOMYCETE RESEARCH</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-headline tracking-widest uppercase opacity-40">Active Project</span>
                  <span className="text-lg font-headline font-bold">PROJECT: MEGAMYCETE / E-SERIES</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-headline tracking-widest uppercase opacity-40">Current Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                    <span className="text-lg font-headline font-bold text-red-600">DECOMMISSIONED / SANITIZED</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 h-32 bg-surface-container-high relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 flex flex-wrap gap-2 p-2">
                  <div className="w-4 h-4 bg-on-surface"></div><div className="w-4 h-4 bg-on-surface"></div><div className="w-4 h-4 bg-on-surface"></div>
                  <div className="w-4 h-4 bg-on-surface"></div><div className="w-4 h-4 bg-on-surface"></div><div className="w-4 h-4 bg-on-surface"></div>
                </div>
                <span className="relative z-10 text-[10px] font-headline tracking-[0.5em] opacity-30">READOUT: BIOMETRIC TELEMETRY DATA STREAM ACTIVE</span>
              </div>
            </div>
            {/*  Right Column: Raccoon City  */}
            <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between border-t-4 border-primary-container">
              <div>
                <span className="text-[10px] font-headline font-black tracking-widest opacity-40">SECTOR 2</span>
                <h2 className="text-2xl font-black font-headline tracking-tight mt-2">RACCOON CITY</h2>
                <div className="mt-6 flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-headline tracking-widest uppercase opacity-40 block mb-1">Status</span>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span className="material-symbols-outlined text-sm">warning</span>
                      <span>EXCLUSION ZONE / CONTAINED</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-headline tracking-widest uppercase opacity-40 block mb-1">Operation</span>
                    <span className="text-sm font-medium">Nuked in 1998 (Operation Bacillus).</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-headline tracking-widest uppercase opacity-40 block mb-1">Active Projects</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs py-1 px-2 bg-surface-container-lowest font-mono">CODE: NEST_01</span>
                      <span className="text-xs py-1 px-2 bg-surface-container-lowest font-mono">CODE: BIRKIN_G</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#sensor-map" className="block text-center w-full mt-8 py-3 bg-primary-container text-on-primary-container font-headline font-black text-xs tracking-widest uppercase hover:bg-primary transition-all">VIEW SENSOR MAP</a>
            </div>
            {/*  Row 2: Paris & Tokyo  */}
            <div className="md:col-span-4 bg-surface-container-low p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-headline tracking-widest opacity-40">SECTOR 3</span>
                <span className="text-[10px] font-headline tracking-widest text-red-500">INACTIVE / UNDER INVESTIGATION</span>
              </div>
              <h3 className="text-xl font-bold font-headline">PARIS LABS</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] opacity-60"><span>PROJECT</span><span>B.S.A.A. BIO-SOLDIER PROGRAM</span></div>
                <div className="h-1 bg-surface-container-high w-full"><div className="h-1 bg-primary w-2/3"></div></div>
              </div>
              <div className="mt-4 pt-4 border-t border-surface-container-highest flex items-center gap-3">
                <span className="material-symbols-outlined text-sm opacity-50">science</span>
                <span className="text-xs opacity-60">Investigated / Shut down after 2003.</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-headline tracking-widest opacity-40">SECTOR 5</span>
                <span className="text-[10px] font-headline tracking-widest opacity-40">ABANDONED / DESTROYED</span>
              </div>
              <h3 className="text-xl font-bold font-headline">ANTARCTIC FACILITY</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] opacity-60"><span>PROJECT</span><span>CODE: VERONICA</span></div>
                <div className="h-1 bg-surface-container-high w-full"><div className="h-1 bg-on-surface w-1/4 opacity-40"></div></div>
              </div>
              <div className="mt-4 pt-4 border-t border-surface-container-highest flex items-center gap-3">
                <span className="material-symbols-outlined text-sm opacity-50">hub</span>
                <span className="text-xs opacity-60">Destroyed in Code: Veronica.</span>
              </div>
            </div>
            {/*  Technical Readout / Abstract Data Vis  */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 flex flex-col justify-center">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-headline font-black tracking-[0.4em] uppercase text-primary">SECURITY OVERRIDE STATUS</span>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square bg-primary"></div>
                  <div className="aspect-square bg-primary opacity-50"></div>
                  <div className="aspect-square bg-primary"></div>
                  <div className="aspect-square bg-primary opacity-20"></div>
                  <div className="aspect-square bg-primary-container"></div>
                  <div className="aspect-square bg-primary"></div>
                  <div className="aspect-square bg-primary-container"></div>
                  <div className="aspect-square bg-primary opacity-80"></div>
                </div>
                <p className="text-[9px] font-mono leading-tight opacity-40 uppercase">Encrypted downlink established. Awaiting sector authority confirmation. Unauthorized access will trigger immediate biological purge protocols.</p>
              </div>
            </div>
            {/*  Map Interface Placeholder (Stylized)  */}Sensor Map<div id="sensor-map"></div>
            <div className="md:col-span-12 h-64 bg-surface-container-low relative flex items-center justify-center group cursor-crosshair">
              <div className="absolute inset-0 opacity-20" style={{ "backgroundImage": "radial-gradient(circle at 2px 2px, #e5e2e1 1px, transparent 0)", "backgroundSize": "24px 24px" }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-primary-container opacity-20"></div>
                <div className="h-full w-[1px] bg-primary-container opacity-20"></div>
              </div>
              {/*  Map Markers  */}
              <div className="absolute top-1/4 left-1/3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary animate-ping opacity-20 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="absolute left-4 top-0 text-[10px] font-headline font-bold whitespace-nowrap">SECTOR 1_ARKLAY</span>
                </div>
              </div>
              <div className="absolute bottom-1/3 right-1/4">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="absolute left-4 top-0 text-[10px] font-headline font-bold whitespace-nowrap opacity-40">SECTOR 3_PARIS</span>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-1/2">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary-container"></div>
                  <span className="absolute left-4 top-0 text-[10px] font-headline font-bold whitespace-nowrap">SECTOR 5_ANTARCTIC</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-headline tracking-[0.8em] font-black opacity-10">GLOBAL_FACILITY_OVERVIEW_V6.9</span>
              </div>
            </div>
          </div>
        </div>
        {/*  System Footer  */}
        <footer className="p-8 border-t border-surface-container-highest flex justify-between items-center text-[10px] font-headline tracking-widest opacity-40 uppercase">
          <span>© 2026 Umbrella Corporation Pharmaceutical. All Rights Reserved.</span>
          <div className="flex gap-8">
            <span>Direct Access: X-901-T</span>
            <span>User: SPENCER_O</span>
          </div>
        </footer>
      </div>
      {/*  Navigation Shell for Mobile  */}
      

    </div>
  );
}
