import React from 'react';
import Link from 'next/link';

export default function BoilerplateTextPage() {
  return (
    <div className="flex-1 w-full bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      
      {/* Back Button */}
      <div className="absolute top-12 left-8 md:left-24 z-50">
          <Link href="/press" className="inline-flex items-center gap-2 text-sm font-headline tracking-widest text-on-surface hover:text-primary transition-colors uppercase">
              <span className="material-symbols-outlined text-[1rem]">arrow_back</span>
              Back to Press
          </Link>
      </div>

      {/* HERO HEADER */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover filter brightness-[0.3] contrast-125 blur-[2px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUZIM_mU0GKpSNcPS6PJAUz6hf6BHaFBTL6zjm2p8Wd-HFEky8_Pkv4Fzwlxi61mnOPdu_DSNx3VBAj6gkmiSi_DtzVRjsAmrnbttTWjgYhSjhaAzfE4ZO7Q1ya5g14MYUIWW911mqLFt7s6uy1bnIKxg8sWUSI0teUwGyTfSPHnIM5m-BU9xwomNvPDYFNoXS7HSk3H4kpcFfkR5Eyy3wa3h_aS71QeGc_Bt1vBZPHnAqKxVFVNky5Ass4oH87-wtGlUBhAiZ4N8"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 p-8 md:p-24 max-w-7xl w-full mx-auto">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary-container"></div>
            <span className="font-headline font-bold text-primary-container tracking-[0.3em] text-xs uppercase">Authorization Required</span>
          </div>
          <h1 className="font-headline font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-6 max-w-4xl uppercase">
                          A NEW CHAPTER FOR <br/>
            <span className="text-primary-container">GLOBAL HEALTH</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="font-headline font-medium text-xl md:text-2xl text-on-surface-variant leading-tight">
                Following a decisive vote by the Board of Directors, Umbrella Co. will announce our new Executive Leadership on April 1, 2026.
              </p>
              <div className="w-24 h-[1px] bg-outline-variant"></div>
              <p className="text-on-secondary-container leading-relaxed max-w-md">
                Since the passing of our former founders and the restructuring of the 2000s, we have focused on atonement. Today, we stand ready to lead the world into a future free of biological threats. Our new Executive embodies our commitment to 'Blue'—purity, transparency, and the preservation of life.
              </p>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end">
              <div className="p-6 border-l-2 border-primary-container bg-surface-container-high/50 backdrop-blur-md max-w-sm">
                <span className="font-headline text-xs font-bold tracking-widest text-primary mb-2 block uppercase">Transition Protocol</span>
                <p className="text-xs text-on-surface-variant font-mono">ENCRYPTED // B-U_TRANS_2026_04_01</p>
                <p className="text-xs text-on-secondary-container mt-4 leading-relaxed">
                   Full leadership credentials pending verification. Security clearance level 7 required for early access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE QUOTE */}
      <section className="bg-surface-container-low py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container opacity-50 transform skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-8 md:px-24 relative z-10">
          <div className="max-w-4xl">
            <span className="material-symbols-outlined text-primary-container text-6xl mb-8">format_quote</span>
            <blockquote className="font-headline text-3xl md:text-5xl font-light leading-tight text-on-surface italic mb-12">
              "We understand the weight of our name. By appointing a leader with unparalleled expertise in virology and counter-bioterrorism, we are ensuring that the mistakes of the past remain <span className="text-primary-container not-italic font-bold">buried in the ruins</span> of Raccoon City."
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              </div>
              <div>
                <p className="font-headline font-bold text-lg tracking-tight uppercase">The Board of Trustees</p>
                <p className="text-primary-container font-mono text-xs uppercase tracking-widest">Umbrella Co. Global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DETAILS (SURFACE VS LORE) */}
      <section className="bg-surface py-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="font-headline font-bold text-4xl tracking-tighter uppercase mb-4">Operational Architecture</h2>
              <p className="text-on-secondary-container max-w-lg">Full transparency across our decentralized divisions. Our public mandate is mirrored by our internal operational security.</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-primary bg-primary-container/10 px-3 py-1">CLASSIFICATION: TOP SECRET</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {/* Remediation */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-surface-variant/30 group hover:border-primary-container/50 transition-colors duration-300">
              <h3 className="font-headline text-2xl font-bold mb-4">Remediation Team</h3>
              <p className="text-on-secondary-container leading-relaxed">Systematic cleanup of hazardous waste sites globally, restoring ecological balance to industrial wastelands.</p>
            </div>
            
            {/* Ethics */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-surface-variant/30 group hover:border-primary-container/50 transition-colors duration-300">
              <h3 className="font-headline text-2xl font-bold mb-4">Ethics Committee</h3>
              <p className="text-on-secondary-container leading-relaxed">Rigorous oversight of all genetic research protocols to ensure maximum safety and regulatory compliance.</p>
            </div>
            
            {/* Security */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-surface-variant/30 group hover:border-primary-container/50 transition-colors duration-300">
              <h3 className="font-headline text-2xl font-bold mb-4">Vanguard Security</h3>
              <p className="text-on-secondary-container leading-relaxed">Providing high-tier protection for civilian medical personnel operating in unstable global hot-zones.</p>
            </div>
            
            {/* Bio-Regen */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-surface-variant/30 group hover:border-primary-container/50 transition-colors duration-300">
              <h3 className="font-headline text-2xl font-bold mb-4">Bio-Regen Lab</h3>
              <p className="text-on-secondary-container leading-relaxed">Innovating advanced pharmaceutical solutions for rare and previously incurable degenerative cellular diseases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE "ATONE" WIDGET */}
      <section className="bg-surface-container-lowest py-24 px-8 md:px-24 border-t border-surface-variant/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="font-headline font-bold text-4xl tracking-tighter uppercase mb-4">The Atone Initiative</h2>
              <p className="text-on-secondary-container leading-relaxed">Our real-time global map tracks "Clean Zones"—areas formerly compromised by biological incidents that have been neutralized by Blue Umbrella's rapid response teams.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="uppercase">Bio-Hazard Suppression Rate</span>
                <span className="text-primary-container">98.4%</span>
              </div>
              <div className="w-full bg-surface-container h-2">
                <div className="bg-primary-container h-full w-[98.4%]"></div>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="uppercase">Personnel Readiness</span>
                <span className="text-primary">OPTIMAL</span>
              </div>
            </div>
            <div className="pt-8">
              <Link href="/press/executive-training" className="w-full bg-primary-container text-on-primary-container font-headline font-bold py-5 px-8 flex items-center justify-between hover:bg-primary transition-colors group">
                <span>APPLY FOR EXECUTIVE TRAINING</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
              <p className="text-[10px] text-on-tertiary-fixed-variant mt-4 uppercase tracking-[0.2em] text-center">Background check and psychological evaluation mandatory.</p>
            </div>
          </div>
          <div className="lg:col-span-8 relative aspect-video bg-surface-container overflow-hidden border border-surface-variant/30 flex items-center justify-center">
            <img className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3LLXkP1S6khVUbMeACGhxnm4eS4kYrhGVlZiBHifRzh_ghBaews6wUJcnx5n3d4Vkv9PCDOKhxqX03DdL_UZE2kwKQbFsdNJkYtsyOUWO9Bd5EJTlUfhiznx8dD4W_Wdic5P3NP6gz9g-2GtK7dYm5AYpFnuJ0xal3FTveKIRWvqXM1ujOXT9o372756wA4GpeXuFDMSRGlYYZOpYyMAwol7xdUloBXHbt7hn9RTbHUEcBHVGiG91kKSqOgv993KAw4jpf6mz5PM" alt="Static Global Operations Map"/>
          </div>
        </div>
      </section>


    </div>
  );
}
