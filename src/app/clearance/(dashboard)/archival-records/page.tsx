import Link from 'next/link';
import React from 'react';

export default function ArchivalRecords() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

{/*  TopNavBar  */}

<div className="flex-1 overflow-hidden">
{/*  Hero Section  */}
<section className="relative w-full h-[716px] flex items-end overflow-hidden">
<img alt="Industrial pharmaceutical manufacturing line with sterile equipment" className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="Monochrome pharmaceutical production line in a high-tech facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOVbrDKKfFc1TMzRXoBBwx0kcmmBFh_Kn1orSsp_WZtnrgvXRiMlJKsdMvo3I6FldhxIOMRGoWvKbn5S8vaCkCOvd5igXGfjhjL8CfGPdhfjb3yWX8WEiNZcM7OxC97jJaLIigJnpjEbbjD6ddT6kKquLtB854AN-7m6QZ3zVWzm9IayY8UfL-RRUj4zd3PZGymg9yUymQOtvF1r23yzo0ASLhxBL0fqjx1LVyYqjwkEEgwGaqAwuYjtxkWwlyAs0frW3snaO6bVg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
<div className="relative z-10 p-12 w-full max-w-7xl mx-auto grid grid-cols-12 gap-8">
<div className="col-span-12 md:col-span-8">
<div className="bg-primary-container inline-block px-3 py-1 mb-4">
<span className="font-headline font-black text-xs tracking-[0.2em] text-on-primary-container">CLASSIFIED ARCHIVAL RECORD // 2026</span>
</div>
<h1 className="font-headline font-black text-6xl md:text-8xl text-on-background tracking-tighter leading-[0.9] uppercase mb-6">
                        UMBRELLA PHARMACEUTICALS<br/><span className="text-3xl text-primary md:text-5xl opacity-80">(AFRICA / ANTARCTIC DIVISION)</span>
                    </h1>
</div>
<div className="col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end">
<div className="border-l-4 border-primary-container pl-6 py-2">
<p className="font-headline text-3xl font-bold text-primary tracking-tighter">VIRAL INSTABILITY</p>
<p className="font-label text-xs tracking-widest uppercase opacity-60">PROGENITOR RESEARCH PHASE I</p>
</div>
</div>
</div>
</section>
{/*  Content Grid  */}
<section className="max-w-7xl mx-auto px-12 py-24 grid grid-cols-12 gap-16">
{/*  Sidebar: Technical Specs  */}

{/*  Main Body: Analysis  */}
<article className="col-span-12 lg:col-span-9">
<div className="max-w-3xl">
<p className="font-headline text-3xl font-light text-on-surface mb-12 leading-tight">
                        The recent structural overhaul of the Sector: Antarctic Base Construction represents a paradigm shift in pharmaceutical logistics. By implementing the <span className="text-primary-container font-bold">PROGENITOR protocol</span>, synthesis efficiency has surpassed all previous corporate benchmarks.
                    </p>
<div className="space-y-8 font-body text-on-surface opacity-80 leading-relaxed text-lg">
<p>
                            The Phase III expansion, completed in the second quarter of 2026, integrates advanced molecular filtration systems that operate at sub-zero temperatures. This clinical refinement has enabled the local team to achieve a staggering 98.4% synthesis efficiency, a result previously thought unattainable within standard manufacturing environments.
                        </p>
<div className="my-8 flex flex-col sm:flex-row gap-4">
    <Link href="/press/aeterna-pharma-expansion" className="bg-primary-container text-on-primary-container font-headline font-black text-xs uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-3 hover:bg-primary transition-colors hover:shadow-[0_0_20px_rgba(210,0,42,0.3)] duration-200">
        <span className="material-symbols-outlined">description</span> VIEW FULL REPORT
    </Link>
    <Link href="/press/industrial-machinery-modernization" className="bg-surface-container-high text-on-surface border border-outline-variant/30 font-headline font-black text-xs uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-3 hover:bg-surface-bright transition-colors duration-200">
        <span className="material-symbols-outlined text-primary-container">article</span> MACHINERY DETAILS
    </Link>
    <Link href="/press/new-tourism-initiative-in-arklay" className="bg-surface-container-high text-on-surface border border-outline-variant/30 font-headline font-black text-xs uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-3 hover:bg-surface-bright transition-colors duration-200">
        <span className="material-symbols-outlined text-primary-container">article</span> ARKLAY TOURISM
    </Link>
</div>
<div className="bg-surface-container-low p-8 border-y-4 border-surface-container-high relative my-12">
<span className="material-symbols-outlined absolute top-4 right-4 text-primary opacity-30 text-4xl">biotech</span>
<h4 className="font-headline font-black text-sm tracking-widest text-primary mb-4 uppercase">Direct Memo: Dr. Oswell E. Spencer</h4>
<p className="italic font-light">"The Antarctic Base Construction is not merely an expansion of production—it is the birth of a sovereign manufacturing entity. The precision of the new lines ensures that the Progenitor derivatives maintain absolute structural integrity throughout the rapid-cooling cycle."</p>
</div>
<p>
                            Infrastructure improvements include the high-capacity automated transport tubes and the centralized "Mother Brain" monitoring system. These components are designed to operate in total isolation from the public grid, ensuring Umbrella Pharmaceuticals remains the sole arbiter of its biological intellectual property.
                        </p>
</div>
{/*  Asymmetric Bento Grid for Data  */}
<div className="mt-16 grid grid-cols-2 gap-4">
<div className="col-span-2 md:col-span-1 bg-surface-container-high aspect-video p-6 flex flex-col justify-between">
<h5 className="font-headline font-bold text-xs tracking-widest uppercase opacity-40">System Uptime</h5>
<div className="flex items-end gap-2">
<span className="text-5xl font-headline font-black">99.98</span>
<span className="text-primary text-xl font-bold mb-1">%</span>
</div>
</div>
<div className="col-span-2 md:col-span-1 bg-primary-container aspect-video p-6 flex flex-col justify-between">
<h5 className="font-headline font-bold text-xs tracking-widest uppercase text-on-primary opacity-60">Status</h5>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-4xl text-on-primary">verified_user</span>
<span className="text-2xl font-headline font-black text-on-primary uppercase leading-none">SECURE ARCHIVE</span>
</div>
</div>
</div>
</div>
</article>
</section>
{/*  Redacted Data Table  */}
<section className="bg-surface-container-lowest py-24 px-12 border-t border-surface-container-high">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-headline font-black text-4xl tracking-tighter uppercase">SYNTHESIS LOG: BATCH-04-A</h2>
<p className="font-label text-xs opacity-50 tracking-widest mt-2 uppercase">Restricted access protocol enforced</p>
</div>
<div className="hidden md:block h-px flex-1 mx-12 bg-surface-container-high"></div>
<span className="font-headline font-bold text-primary tracking-tighter">[ REDACTED ]</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b-2 border-primary-container">
<th className="p-4 font-headline text-xs tracking-widest uppercase">Compound ID</th>
<th className="p-4 font-headline text-xs tracking-widest uppercase">Yield Rate</th>
<th className="p-4 font-headline text-xs tracking-widest uppercase">Stability Index</th>
<th className="p-4 font-headline text-xs tracking-widest uppercase">Operator</th>
</tr>
</thead>
<tbody className="font-label text-sm">
<tr className="border-b border-surface-container-high hover:bg-surface-container transition-colors">
<td className="p-4 font-bold">U-091-B</td>
<td className="p-4">98.4%</td>
<td className="p-4 text-primary">OPTIMAL</td>
<td className="p-4 opacity-50 uppercase">CLASSIFIED</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-container transition-colors">
<td className="p-4 font-bold">U-092-B</td>
<td className="p-4">97.9%</td>
<td className="p-4 text-primary">OPTIMAL</td>
<td className="p-4 opacity-50 uppercase">CLASSIFIED</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-container transition-colors">
<td className="p-4 font-bold">U-094-X</td>
<td className="p-4 text-error">ERROR</td>
<td className="p-4 text-error">UNSTABLE</td>
<td className="p-4 opacity-50 uppercase">CLASSIFIED</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="p-4 font-bold">U-100-ALPHA</td>
<td className="p-4">99.1%</td>
<td className="p-4 text-primary">ZENITH</td>
<td className="p-4 opacity-50 uppercase">CLASSIFIED</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
{/*  Footer  */}
<footer className="w-full px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0e0e0e] dark:bg-[#0e0e0e]">
<div className="text-sm font-black text-[#e5e2e1] font-headline tracking-tighter uppercase">
            UMBRELLA PHARMACEUTICALS
        </div>
<div className="font-['Inter'] text-[10px] tracking-widest uppercase font-bold text-[#e5e2e1] opacity-50 text-center max-w-md">
            © 2026 UMBRELLA PHARMACEUTICALS. ALL RIGHTS RESERVED. CONFIDENTIAL ARCHIVAL ACCESS ONLY.
        </div>
<div className="flex gap-6 font-['Inter'] text-[10px] tracking-widest uppercase font-bold">
<Link className="text-[#e5e2e1] opacity-50 hover:text-[#d2002a] underline transition-colors" href="#">LEGAL</Link>
<Link className="text-[#e5e2e1] opacity-50 hover:text-[#d2002a] underline transition-colors" href="/clearance/asset-containment">SECURITY PROTOCOLS</Link>
<Link className="text-[#e5e2e1] opacity-50 hover:text-[#d2002a] underline transition-colors" href="#">REDACTION POLICY</Link>
<Link className="text-[#e5e2e1] opacity-50 hover:text-[#d2002a] underline transition-colors" href="#">CONTACT</Link>
</div>
</footer>

    </div>
  );
}
