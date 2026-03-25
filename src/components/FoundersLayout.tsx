'use client';
import React from 'react';
import { employees } from '@/data/employees';
import EmployeeSearch from '@/components/EmployeeSearch';

export default function FoundersLayout() {
  return (
    <>

      {/* TopNavBar Removed (Now Global) */}
      <main className="pt-20 pb-24 px-8 md:px-24">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-8">
              The Pillars <br /> <span className="text-primary-container">of Authority.</span>
            </h1>
            <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed opacity-80">
              Founded in 1968 by Oswell E. Spencer, Edward Ashford, and James Marcus, the Umbrella Corporation was built on the pursuit of controlled human evolution through viral research. While their work established the foundation, its direction was ultimately defined by Spencer’s vision of selective advancement.
            </p>
          </div>
        </section>
        {/* Vertical Founders Gallery */}
        <section className="flex flex-col gap-1 mb-32">
          {/* Founder 01: Oswell E. Spencer */}
          <div className="group">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-low min-h-[500px]">
              <div className="relative overflow-hidden bg-surface-container-highest h-[400px] md:h-auto">
                <img alt="Oswell E. Spencer" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700" src="/images/Spencer.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden"></div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="font-headline text-primary-container font-bold tracking-widest text-xs uppercase mb-4">Chief Executive / Co-Founder</span>
                <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-6">Oswell E. Spencer</h2>
                <p className="font-body text-sm leading-relaxed text-on-surface/70 mb-8">
                  A British aristocrat and the primary financier of the Umbrella project. Lord Spencer's fascination with eugenics and human potential led to the discovery of the Progenitor virus in West Africa. His vision was never mere profit, but the total reconstruction of the human condition.
                </p>
                <div className="pt-6 border-t border-outline-variant/20 flex flex-col gap-4">
                  <div>
                    <span className="block font-headline text-[10px] uppercase tracking-widest text-primary mb-2">Contribution</span>
                    <p className="font-body text-xs italic text-secondary">"The architect of corporate sovereignty and global bio-infrastructure."</p>
                  </div>
                  <div>
                    <span className="font-headline text-[10px] uppercase tracking-widest text-primary-container">1923 - 2006</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Founder 02: Edward Ashford */}
          <div className="group">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-low min-h-[500px]">
              <div className="relative overflow-hidden bg-surface-container-highest h-[400px] md:h-auto order-1 md:order-2">
                <img alt="Edward Ashford" className="w-full h-full object-cover grayscale contrast-150 brightness-50 group-hover:scale-105 transition-transform duration-700" src="/images/Ashford.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden"></div>
              </div>
              <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                <span className="font-headline text-primary-container font-bold tracking-widest text-xs uppercase mb-4">Scientific Director / Co-Founder</span>
                <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-6">Edward Ashford</h2>
                <p className="font-body text-sm leading-relaxed text-on-surface/70 mb-8">
                  A genius of virology from the noble Ashford line. Edward provided the scientific legitimacy required to weaponize the Progenitor strain. His work emphasized the delicate balance between biological lethality and controlled mutation, establishing the foundation of viral genetics.
                </p>
                <div className="pt-6 border-t border-outline-variant/20 flex flex-col gap-4">
                  <div>
                    <span className="block font-headline text-[10px] uppercase tracking-widest text-primary mb-2">Contribution</span>
                    <p className="font-body text-xs italic text-secondary">"The pioneer of Progenitor-based bio-weaponry and genetic stabilization."</p>
                  </div>
                  <div>
                    <span className="font-headline text-[10px] uppercase tracking-widest text-primary-container font-bold">Date of death 1968</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Founder 03: James Marcus */}
          <div className="group">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-low min-h-[500px]">
              <div className="relative overflow-hidden bg-surface-container-highest h-[400px] md:h-auto">
                <img alt="James Marcus" className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000" src="/images/Marcus.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden"></div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="font-headline text-primary-container font-bold tracking-widest text-xs uppercase mb-4">Director of Research / Co-Founder</span>
                <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-6">Dr. James Marcus</h2>
                <p className="font-body text-sm leading-relaxed text-on-surface/70 mb-8">
                  The first Director of the Executive Training Center. Dr. Marcus was instrumental in the creation of the T-Virus, merging the Progenitor strain with leech DNA to achieve unprecedented cellular regeneration. His methodology was cold, clinical, and absolute.
                </p>
                <div className="pt-6 border-t border-outline-variant/20 flex flex-col gap-4">
                  <div>
                    <span className="block font-headline text-[10px] uppercase tracking-widest text-primary mb-2">Contribution</span>
                    <p className="font-body text-xs italic text-secondary">"The father of the Tyrant Virus and regenerative biological warfare."</p>
                  </div>
                  <div>
                    <span className="font-headline text-[10px] uppercase tracking-widest text-primary-container font-bold">1918 - 1988</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Institutional Quote Section */}
        <section className="max-w-5xl mx-auto text-center py-24 border-y border-outline-variant/15">
          <span className="material-symbols-outlined text-primary-container text-4xl mb-8" data-weight="fill">shield_with_heart</span>
          <blockquote className="font-headline text-3xl md:text-5xl font-light italic leading-tight mb-12">
            "Obedience breeds discipline. Discipline breeds unity. <br className="hidden md:block" /> Unity breeds power. Power is life."
          </blockquote>
          <p className="font-headline text-xs tracking-[0.3em] uppercase opacity-50">Oswell E. Spencer</p>
        </section>

        {/* Employee Registry Section */}
        <section className="py-24">
          <div className="mb-12">
            <h2 className="font-headline text-4xl font-black tracking-tighter uppercase mt-4 mb-2">Employee Details</h2>
            <div className="w-16 h-px bg-primary-container mt-4" />
          </div>

          {/* Employee Search + Table */}
          <EmployeeSearch employees={employees} />
        </section>
      </main>
      {/* Footer Removed (Now Global) */}

    </>
  );
}
