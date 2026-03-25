'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';

const DarkMap = dynamic(() => import('./DarkMap'), { ssr: false });

export default function ResearchLayout() {
    return (
        <>

            {/* Main Content Canvas */}
            <main className="pt-20 min-h-screen relative">
                {/* Global Top Nav injected via App Layout */}
                {/* Hero Section */}
                <section className="px-12 py-24 bg-surface-container-lowest relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 scanline pointer-events-none"></div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 lg:col-span-8">
                                <span className="inline-block text-primary-container font-headline font-bold tracking-[0.5em] text-xs mb-6 uppercase">Institutional Archive | RD-69021</span>
                                <h1 className="text-7xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-12">
                                    THE <span className="text-primary-container">ADVANCEMENT</span> OF HUMAN EVOLUTION.
                                </h1>
                                <p className="text-xl font-body text-on-surface leading-relaxed max-w-2xl opacity-80 border-l-4 border-primary-container pl-8">
                                    Under the direction of Oswell E. Spencer, the Umbrella Corporation conducts controlled viral research to overcome biological limitations and identify subjects capable of surviving transformation.
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex items-end justify-center">
                                <NextImage
                                    src="/images/umbrella-logo.svg"
                                    alt="Umbrella Logo"
                                    width={256}
                                    height={256}
                                    className="w-64 h-64 opacity-20 invert"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Research Grid (Bento Style) */}
                <section className="px-12 py-24 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                            {/* Virology */}
                            <div className="bg-surface-container-low p-10 flex flex-col justify-between group">
                                <div>
                                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="biotech">biotech</span>
                                    <h3 className="text-3xl font-headline font-bold tracking-tight mb-4 uppercase">VIROLOGY<br />(PRIMARY STRAIN)</h3>
                                    <p className="text-sm font-body leading-relaxed opacity-60 mb-8">
                                        Experimental viral development targeting enhanced subject viability and controlled mutation. Neural response patterns and systemic adaptation under continuous observation.
                                    </p>
                                </div>
                                <div className="w-full aspect-video relative overflow-hidden mb-6">
                                    <NextImage
                                        alt="Viral structures"
                                        src="/images/virus.png"
                                        fill
                                        className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <a className="text-[10px] font-headline font-bold tracking-[0.3em] uppercase text-primary hover:text-white transition-colors" href="#">Review Data Logs -&gt;</a>
                            </div>
                            {/* B.O.W. */}
                            <div className="bg-surface-container-high p-10 flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-error-container text-on-error-container text-[8px] font-bold px-2 py-1 uppercase tracking-tighter">Classified</span>
                                </div>
                                <div>
                                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="psychology_alt">psychology_alt</span>
                                    <h3 className="text-3xl font-headline font-bold tracking-tight mb-4 uppercase">BIO-ORGANIC<br />RESEARCH</h3>
                                    <p className="text-sm font-body leading-relaxed opacity-60 mb-8">
                                        Controlled development of enhanced organic subjects through viral integration and adaptive conditioning. High-variance specimens are maintained under maximum containment protocols.
                                    </p>
                                </div>
                                <div className="w-full aspect-video relative overflow-hidden mb-6">
                                    <NextImage
                                        src="/images/specimen-profile.jpg"
                                        alt="Specimen Profile"
                                        fill
                                        className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <a className="text-[10px] font-headline font-bold tracking-[0.3em] uppercase text-primary-container hover:text-primary transition-colors" href="#">Tactical Assessment -&gt;</a>
                            </div>
                            {/* Pharmaceutical */}
                            <div className="bg-surface-container-lowest p-10 flex flex-col justify-between border border-surface-container-high">
                                <div>
                                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="medication">medication</span>
                                    <h3 className="text-3xl font-headline font-bold tracking-tight mb-4 uppercase">PHARMA<br />ENGINEERING</h3>
                                    <p className="text-sm font-body leading-relaxed opacity-60 mb-8">
                                        Prototype viral compounds utilized in extended cellular lifespan research. Subject response and regenerative consistency under continuous observation.
                                    </p>
                                </div>
                                <div className="bg-surface p-4 border-l-2 border-primary-container mt-auto">
                                    <div className="text-[10px] text-primary font-bold uppercase mb-2">Serum Stability Index</div>
                                    <div className="h-1 bg-surface-container-highest w-full mb-1">
                                        <div className="h-full bg-primary-container w-[82%]"></div>
                                    </div>
                                    <div className="flex justify-between text-[8px] opacity-40 uppercase">
                                        <span>Batch 09</span>
                                        <span>82.4%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Facilities Map */}
                <section className="px-12 py-24 bg-surface-container-lowest">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full md:w-1/3">
                                <h2 className="text-4xl font-headline font-extrabold tracking-tighter uppercase mb-6">GLOBAL<br />ACTIVE<br />FACILITIES</h2>
                                <p className="text-sm opacity-60 mb-12">Deployment of Sovereign Laboratories across key strategic geological sectors.</p>
                                <div className="space-y-4">
                                    <div className="p-4 bg-surface-container-high border-l-4 border-primary-container">
                                        <div className="text-[10px] font-bold text-primary-container uppercase tracking-widest mb-1">Sector 01-A</div>
                                        <div className="text-lg font-headline font-bold uppercase">ARKLAY MOUNTAINS</div>
                                        <div className="text-[10px] opacity-40 uppercase">Status: Operational | Level 4</div>
                                    </div>
                                    <div className="p-4 bg-surface-container border-l-4 border-surface-container-highest">
                                        <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Sector 02-B</div>
                                        <div className="text-lg font-headline font-bold uppercase">RACCOON CITY</div>
                                        <div className="text-[10px] opacity-40 uppercase">Status: Sub-Surface Expansion</div>
                                    </div>
                                    <div className="p-4 bg-surface-container border-l-4 border-surface-container-highest">
                                        <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Sector 04-F</div>
                                        <div className="text-lg font-headline font-bold uppercase">PARIS LABORATORY</div>
                                        <div className="text-[10px] opacity-40 uppercase">Status: Research Only</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 h-[500px] relative overflow-hidden border border-surface-container-high">
                                <DarkMap />
                                <div className="absolute bottom-4 right-4 bg-[#0e0e0e]/90 border border-[#d2002a]/40 p-3 text-[10px] font-headline uppercase tracking-widest text-[#d2002a] pointer-events-none z-10">
                                    UMBRELLA CORP ACTIVE SECTORS
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Footer injected via App Layout */}
            </main>
        </>
    );
}

