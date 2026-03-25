'use client';
import React from 'react';
import dynamic from 'next/dynamic';

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
                                <img alt="Umbrella Logo" className="w-64 h-64 opacity-20 invert" data-alt="The central Umbrella Corporation hexagonal logo in red and white" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg" />
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
                                <div className="w-full aspect-video overflow-hidden mb-6">
                                    <img className="w-full h-full object-cover grayscale contrast-125" data-alt="High-contrast black and white microscopic image of viral structures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn9or-oRFbIGTguiJEKEUyF0h4C5FV_Z47guLb27ytk9pw4J-9r_PuHgJCRD2zNvLm4QC5RIL_4Z0E6TlIKPUttU_f_bfy7kzFRrwkoCKV2HZb4xsaMvkmivR0By-iMUwff35QjycoWF9wUMDJ4Nb4OLBYmhiGojSirN1W4JTVOPFpeb89Rew0HIeorieSCnP14uJgktg8s6uXu77HQVG4lHW4G5kIiEVpfmsouxEgyhvGV7E_B80Lfb7BqFTPzSpIiYUw7NMcXOs" />
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
                                <div className="w-full aspect-video overflow-hidden mb-6">
                                    <img className="w-full h-full object-cover grayscale opacity-50" data-alt="A clinical profile silhouette of an experimental biological subject" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mZtf6LVo8V7kd5NfV18kQHO2tbO2fv378Y1vI8VaE0xV5ISeI69MAywKdvNKJzUN8x8HODjukiDCxNykDxbHtygML0MkoRGPqz-5WWfDPGa4Os_BHwSehA8D2IECdQu6F8Kt_h5Lq-qd8efYxXeQJcdE57v36jR6yKjOpLUBnPiHZ3CgMLeZe_SS8oxzwjadN0x3ztRvDKLGUMLVjAEpig8hrWoaOJhc-17QZ5-L_5Bnl1KmfLlqKeSbX7E8yc1yUxJ6LgKdlxQ" />
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

