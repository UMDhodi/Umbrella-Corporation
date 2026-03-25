import Link from 'next/link';
import React from 'react';
import NextImage from 'next/image';

export default function IncidentReport() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

<div className="grain-overlay"></div>
<div className="scanline"></div>
{/*  Top Navigation Anchor  */}
<nav className="bg-[#131313] flex justify-between items-center w-full px-12 h-16 fixed top-0 z-40 border-b border-surface-container-highest">
<div className="text-xl font-black text-[#d2002a] tracking-tight font-headline uppercase">
            PROJECT: REDACTED
        </div>
<div className="hidden md:flex items-center gap-8">
<Link className="font-headline uppercase tracking-tighter font-bold text-sm text-[#e5e2e1] opacity-70 hover:bg-[#2a2a2a] transition-colors duration-150 px-3 py-1" href="/clearance/global-sectors">Sectors</Link>
<Link className="font-headline uppercase tracking-tighter font-bold text-sm text-[#e5e2e1] opacity-70 hover:bg-[#2a2a2a] transition-colors duration-150 px-3 py-1" href="/clearance/asset-containment">Containment</Link>
<Link className="font-headline uppercase tracking-tighter font-bold text-sm text-[#d2002a] border-b-2 border-[#d2002a] pb-1" href="/clearance/archival-records">Archive</Link>
<Link className="font-headline uppercase tracking-tighter font-bold text-sm text-[#e5e2e1] opacity-70 hover:bg-[#2a2a2a] transition-colors duration-150 px-3 py-1" href="/clearance/personnel-archives">Personnel</Link>
</div>
<div className="bg-primary-container text-on-primary-container px-4 py-1 font-headline font-bold text-xs uppercase tracking-widest">
            SECURITY CLEARANCE: LVL 5
        </div>
</nav>
<div className="flex-1 overflow-hidden">
{/*  Watermark  */}
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0 w-[800px]">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<NextImage 
  alt="Umbrella Corporation Logo Watermark" 
  src="/images/incident-report.jpg"
  fill
  className="object-cover grayscale opacity-60"
/>
</div>
</div>
{/*  1. Incident Header  */}

{/*  2. Status Overview (Bento Grid)  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-16 relative z-10 bg-surface-container-highest">
<div className="bg-surface-container-lowest p-8 flex flex-col justify-between aspect-square md:aspect-auto">
<div>
<span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="warning">warning</span>
<h3 className="font-headline text-sm font-bold uppercase tracking-widest opacity-50 mb-2">STATUS</h3>
<p className="font-headline text-4xl font-black text-primary-container leading-none uppercase">CONTAINMENT:<br/>FAILED</p>
</div>
<p className="text-[10px] uppercase tracking-tighter opacity-40 leading-tight">PERIMETER BREACH AT 0400 HOURS. CIVILIAN INFESTATION RATE: 98%.</p>
</div>
<div className="bg-surface-container-lowest p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="biotech" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>biotech</span>
<h3 className="font-headline text-sm font-bold uppercase tracking-widest opacity-50 mb-2">THREAT LEVEL</h3>
<p className="font-headline text-4xl font-black text-on-surface leading-none uppercase">BIO-ORGANIC LEAK:<br/>CONFIRMED</p>
</div>
<div className="h-1 bg-surface-container-high w-full">
<div className="h-full bg-primary-container w-full"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="groups">groups</span>
<h3 className="font-headline text-sm font-bold uppercase tracking-widest opacity-50 mb-2">VIABILITY</h3>
<p className="font-headline text-4xl font-black text-on-surface leading-none uppercase">SURVIVOR COUNT:<br/><span className="redacted">REDACTED</span></p>
</div>
<div className="flex justify-between items-end">
<p className="text-[10px] uppercase tracking-tighter opacity-40 leading-tight">U.B.C.S. DEPLOYMENT:<br/>ACTIVE</p>
<span className="text-primary-container font-black text-xl font-headline tracking-tighter">ERROR 404</span>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
{/*  3. Incident Timeline  */}
<div className="lg:col-span-7">
<h2 className="font-headline text-2xl font-bold uppercase tracking-widest mb-10 flex items-center gap-4">
<span className="w-12 h-px bg-primary-container"></span>
                    CHRONOLOGICAL PROGRESSION
                </h2>
<div className="relative border-l-2 border-surface-container-highest ml-4 pl-12 py-4">
<div className="mb-12 relative">
<div className="absolute -left-[54px] top-0 w-3 h-3 bg-primary-container"></div>
<span className="font-headline text-xs font-bold text-primary tracking-widest uppercase block mb-1">MAY 11, 1998</span>
<h4 className="font-headline text-xl font-bold uppercase mb-2">Arklay Research Facility Leak</h4>
<p className="text-sm opacity-60 leading-relaxed max-w-lg">
                            An accidental release of the <span className="redacted">Tyrant Virus</span> occurs during a containment transfer. Initial casualties reported as "cannibalistic homicides" in the Arklay Mountains.
                        </p>
</div>
<div className="mb-12 relative">
<div className="absolute -left-[54px] top-0 w-3 h-3 bg-on-surface"></div>
<span className="font-headline text-xs font-bold text-on-surface tracking-widest uppercase block mb-1">JULY 24, 1998</span>
<h4 className="font-headline text-xl font-bold uppercase mb-2">S.T.A.R.S. Intervention</h4>
<p className="text-sm opacity-60 leading-relaxed max-w-lg">
                            Special Tactics and Rescue Service team dispatched to investigate the Spencer Mansion. Mansion destroyed. Evidence suppressed by <span className="redacted">Albert Wesker</span>.
                        </p>
</div>
<div className="mb-12 relative">
<div className="absolute -left-[54px] top-0 w-3 h-3 bg-primary-container animate-pulse"></div>
<span className="font-headline text-xs font-bold text-primary tracking-widest uppercase block mb-1">SEPTEMBER 22, 1998</span>
<h4 className="font-headline text-xl font-bold uppercase mb-2">Subterranean Laboratory Breach</h4>
<p className="text-sm opacity-60 leading-relaxed max-w-lg">
                            Recovery of G-Virus samples leads to direct contamination of the city water supply. Infection enters the municipal system via the sewers.
                        </p>
</div>
<div className="relative">
<div className="absolute -left-[54px] top-0 w-3 h-3 border-2 border-primary-container"></div>
<span className="font-headline text-xs font-bold text-primary tracking-widest uppercase block mb-1">CURRENT STATUS</span>
<h4 className="font-headline text-xl font-bold uppercase mb-2">Total Urban Infestation</h4>
<p className="text-sm opacity-60 leading-relaxed max-w-lg">
                            City-wide panic. Law enforcement neutralized. Containment is no longer a viable biological objective.
                        </p>
</div>
</div>
</div>
{/*  4. Redacted Data & Call to Action  */}
<div className="lg:col-span-5">
<div className="bg-surface-container-low p-8 border-t-4 border-primary-container mb-8">
<h2 className="font-headline text-xl font-bold uppercase mb-6 flex items-center justify-between">
                        ASSET DISPOSAL LOG
                        <span className="material-symbols-outlined opacity-30" data-icon="lock_open">lock_open</span>
</h2>
<div className="space-y-4 font-body text-sm">
<div className="p-3 bg-surface border-l-2 border-surface-container-highest">
<p className="opacity-40 text-[10px] uppercase mb-1">SUBJECT ALPHA</p>
<p className="font-mono text-on-surface">Target: <span className="redacted">G-BIRKIN</span> - Location: <span className="redacted">NEST LAB</span></p>
<p className="text-xs text-primary mt-2 uppercase font-bold tracking-tighter">STATUS: EVOLVING</p>
</div>
<div className="p-3 bg-surface border-l-2 border-surface-container-highest">
<p className="opacity-40 text-[10px] uppercase mb-1">ASSET NE-T</p>
<p className="font-mono text-on-surface">Target: <span className="redacted">NEMESIS T-TYPE</span> - Objective: <span className="redacted">ELIMINATE STARS</span></p>
<p className="text-xs text-tertiary mt-2 uppercase font-bold tracking-tighter">STATUS: DEPLOYED</p>
</div>
<div className="p-3 bg-surface border-l-2 border-surface-container-highest">
<p className="opacity-40 text-[10px] uppercase mb-1">DISPOSAL PROTOCOL</p>
<p className="font-mono text-on-surface">Code: <span className="redacted">MISSION LACKEY</span> - Method: <span className="redacted">THERMOBARIC BLAST</span></p>
</div>
</div>
</div>
{/*  5. Action Required  */}
<div className="bg-surface-container-high p-8 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary-container text-6xl mb-4" data-icon="dangerous">dangerous</span>
<h2 className="font-headline text-2xl font-black uppercase mb-2">CRITICAL DECISION</h2>
<p className="text-xs opacity-60 uppercase tracking-[0.2em] mb-8">AUTHORIZATION REQUIRED FROM GLOBAL BOARD</p>
<button className="group relative w-full bg-primary-container py-6 px-4 transition-all duration-150 active:scale-95 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
<span className="relative font-headline font-black text-xl text-on-primary-container tracking-tighter uppercase">
                            INITIATE STERILIZATION PROTOCOL
                        </span>
</button>
<p className="mt-6 text-[10px] uppercase tracking-widest opacity-40 max-w-[280px]">
                        WARNING: EXECUTION OF THIS COMMAND IS IRREVERSIBLE AND WILL RESULT IN THE DESTRUCTION OF ALL CORPORATE ASSETS WITHIN RADIUS RC-01.
                    </p>
</div>
</div>
</div>
</div>
{/*  Footer Anchor  */}
<footer className="bg-[#0e0e0e] flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 border-t border-[#353534]/30 relative z-20">
<div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
<div className="flex items-center gap-2 opacity-50 grayscale">
<div className="relative w-6 h-6">
  <NextImage 
    alt="Umbrella Logo" 
    src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg"
    fill
    className="object-contain"
  />
</div>
<span className="font-headline font-bold text-xs tracking-tighter uppercase">Sovereign Pharmaceuticals</span>
</div>
<p className="font-['Inter'] uppercase text-[10px] tracking-[0.2em] leading-relaxed text-[#e5e2e1] opacity-50 text-center md:text-left max-w-md">
                © 1969 SOVEREIGN PHARMACEUTICALS. UNAUTHORIZED REPRODUCTION IS A TERMINABLE OFFENSE. 
                <br/>ALL RIGHTS RESERVED UNDER THE GLOBAL SECURITY ACT.
            </p>
</div>
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex gap-6">
<Link className="font-['Inter'] uppercase text-[10px] tracking-[0.2em] text-[#e5e2e1] opacity-50 hover:text-[#ffb3b0] transition-colors duration-150" href="/clearance/asset-containment">Security Protocols</Link>
<Link className="font-['Inter'] uppercase text-[10px] tracking-[0.2em] text-[#e5e2e1] opacity-50 hover:text-[#ffb3b0] transition-colors duration-150" href="/clearance/personnel-archives">Chain of Custody</Link>
<Link className="font-['Inter'] uppercase text-[10px] tracking-[0.2em] text-[#e5e2e1] opacity-50 hover:text-[#ffb3b0] transition-colors duration-150" href="/clearance/asset-containment">Disposal Guidelines</Link>
</div>
<div className="flex items-center gap-2 px-3 py-1 border border-primary-container/30 text-primary-container">
<span className="material-symbols-outlined text-sm" data-icon="shield">shield</span>
<span className="font-headline text-[10px] font-bold uppercase tracking-widest">ENCRYPTED</span>
</div>
</div>
</footer>

    </div>
  );
}
