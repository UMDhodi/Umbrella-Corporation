import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { pressReleases } from '@/data/press-releases';

export default function PressLayout() {
  return (
    <>
      {/* Global Nav injected via App Layout */}

      <main className="pt-20">

        {/* HERO SECTION */}
        <header className="relative w-full h-[614px] flex items-end px-12 pb-24 bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
            <NextImage
              alt="Brutalist concrete corporate headquarters"
              className="w-full h-full object-cover"
              src="/images/press_hero.png"
              fill
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0 relative w-12 h-12">
                <NextImage
                  src="/images/umbrella-logo.svg"
                  alt="Umbrella Logo"
                  fill
                  className="object-contain brightness-0 invert opacity-40"
                />
              </div>
              <div className="h-[2px] w-12 bg-primary-container"></div>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-primary-container font-bold">Internal Protocol 1969-A</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              ARCHIVAL <br />ANNOUNCEMENTS // <span className="text-primary-container">PRESS RELATIONS</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Official dissemination of corporate progress and regulatory compliance. All communications are subject to Level 4 security review.
            </p>
          </div>
        </header>

        {/* CONTENT GRID */}
        <section className="min-h-screen" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 350px' }}>

          {/* NEWS FEED */}
          <div className="px-12 py-24 space-y-32">

            {Object.values(pressReleases).map((release, index) => (
              <article key={release.id} className="group relative">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-48 shrink-0">
                    <span className="font-headline text-2xl font-bold text-outline uppercase tracking-widest">{release.date}</span>
                    <div className="mt-4 h-[1px] w-full bg-surface-container-highest"></div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 group-hover:text-primary transition-colors">
                      {release.title}
                    </h2>
                    {release.imageUrl && release.imageUrl.trim() !== "" && (
                      <div className="mb-10 relative overflow-hidden aspect-[21/9]">
                        <NextImage
                          alt={release.subtitle}
                          className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                          src={release.imageUrl}
                          fill
                        />
                      </div>
                    )}
                    <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10 max-w-3xl">
                      <span className="font-bold block mb-2">{release.subtitle}</span>
                      {release.content[0]}
                    </p>
                    <Link href={`/press/${release.id}`} className={`inline-flex items-center space-x-4 px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm transition-all duration-150 group/btn ${index % 2 === 0 ? 'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary' : 'bg-surface-container-highest text-on-surface border border-outline-variant/30 hover:bg-surface-bright hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}>
                      <span>View Full Report</span>
                      <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

          </div>

          {/* SIDEBAR */}
          <aside className="relative">
            <div
              className="sticky top-20 p-12 border-l space-y-16"
              style={{
                height: 'calc(100vh - 80px)',
                background: 'rgba(57,57,57,0.15)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(255,255,255,0.05)',
              }}
            >
              {/* Media Relations */}
              <div className="space-y-6">
                <h3 className="font-headline text-xs font-black tracking-[0.4em] uppercase text-primary-container">Media Relations</h3>
                <div className="space-y-4 font-body">
                  <p className="text-sm text-secondary uppercase font-semibold">Inquiry Protocol:</p>
                  <p className="text-2xl font-bold text-on-surface leading-tight">OFFICE OF EXTERNAL <br />AFFAIRS</p>
                  <p className="text-sm text-outline-variant font-mono">ENCRYPTED: 0-442-UM-REL-PR</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Journalists and regulatory bodies must submit security clearance Level 3 for interview requests with high-tier researchers.
                  </p>
                </div>
              </div>

              {/* Resource Archive */}
              <div className="space-y-6">
                <h3 className="font-headline text-xs font-black tracking-[0.4em] uppercase text-primary-container">Resource Archive</h3>
                <ul className="space-y-4">
                  {['Corporate Seals', 'Photo Assets', 'Executive Portraits', 'Boilerplate Text'].map((item) => (
                    <li key={item}>
                      <Link 
                        className="group flex items-center justify-between py-3 border-b border-surface-container-highest hover:border-primary-container transition-all" 
                        href={item === "Corporate Seals" ? "/press/corporate-seals" : item === "Photo Assets" ? "/press/photo-assets" : item === "Executive Portraits" ? "/press/executive-portraits" : item === "Boilerplate Text" ? "/press/boilerplate-text" : "#"}
                      >
                        <span className="font-headline text-sm uppercase tracking-widest">{item}</span>
                        <span className="material-symbols-outlined text-outline group-hover:text-primary-container">download</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notice */}
              <div className="bg-surface-container-lowest p-6 border-l-4 border-primary-container">
                <p className="font-headline text-xs font-bold tracking-widest text-primary mb-2">NOTICE</p>
                <p className="text-[10px] uppercase tracking-wider text-outline leading-normal">
                  Unauthorized reproduction of any corporate asset will result in immediate termination of press credentials and legal prosecution.
                </p>
              </div>
            </div>
          </aside>

        </section>
      </main>

      {/* Global Footer injected via App Layout */}
    </>
  );
}
