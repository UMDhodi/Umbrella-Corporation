import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pressReleases } from '@/data/press-releases';

export default async function PressReleasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = pressReleases[id];
  
  if (!data) return notFound();

  const resolvedImageUrl = data.imageUrl?.startsWith('.') ? data.imageUrl.substring(1) : data.imageUrl;

  return (
    <div className="flex-1 overflow-x-hidden p-6 md:p-12 selection:bg-primary-container selection:text-on-primary-container">
      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
              <p className="font-headline text-primary-container font-bold tracking-widest text-sm mb-4 uppercase">
                CLASSIFICATION: LEVEL 5 CLEARANCE REQUIRED
              </p>
              <h1 className="font-headline text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase text-on-background">
                {data.title}
              </h1>
              <p className="font-headline text-2xl text-primary opacity-80 mt-4 tracking-tighter">
                {data.subtitle}
              </p>
            </div>
            <div className="text-right hidden md:block border-l-2 border-primary-container pl-6">
              <p className="font-headline text-xs opacity-50 uppercase tracking-widest">Document Ref:</p>
              <p className="font-headline text-lg font-bold text-on-background">UC-{data.date.split(',')[1]?.trim() || '2026'}-RPT-{Math.floor(Math.random() * 99)}</p>
              <p className="font-headline text-xs opacity-50 uppercase tracking-widest mt-2">Publish Date:</p>
              <p className="font-headline text-sm font-bold text-primary">{data.date}</p>
            </div>
          </div>
          <div className="w-full h-px bg-surface-container-highest mt-8"></div>
        </header>

        {/* Hero Image Component */}
        {data.imageUrl && (
          <section className="mb-20">
            <div className="relative w-full aspect-[21/9] bg-surface-container-low overflow-hidden group">
              <img 
                alt={data.title} 
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-1000" 
                src={resolvedImageUrl} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-2 h-12 bg-primary-container"></div>
                <div>
                  <p className="font-headline font-bold text-xl uppercase tracking-tighter text-on-background">{data.author || "Umbrella Corp"}</p>
                  <p className="font-body text-xs opacity-60 uppercase tracking-[0.2em] text-on-surface">External Perimeter View</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Report Content Panel */}
        <div className="flex justify-center mt-12">
          {/* Main Content Body */}
          <article className="w-full max-w-4xl">
            <div className="space-y-12">
              {data.content.map((paragraph, idx) => (
                <section key={idx} className="border-l-4 border-primary-container pl-8 pb-4">
                  {idx === 0 && <h2 className="font-headline text-3xl font-extrabold uppercase mb-6 tracking-tighter text-on-background">Official Briefing</h2>}
                  <p className="font-body text-lg leading-relaxed opacity-90 text-on-surface">
                    {paragraph}
                  </p>
                </section>
              ))}

              {/* Action Blocks */}
              <div className="flex flex-col sm:flex-row gap-6 pt-12">
                {data.pdfUrl && (
                  <a href={data.pdfUrl} target="_blank" rel="noreferrer" download className="bg-primary-container text-on-primary-container font-headline font-black text-sm uppercase tracking-widest px-10 py-5 flex items-center justify-center gap-3 hover:bg-primary transition-colors active:scale-95 duration-75 group shadow-[0_0_20px_rgba(210,0,42,0.2)]">
                    <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
                    DOWNLOAD PDF
                  </a>
                )}
                <Link href="/press" className="bg-surface-container-highest text-on-surface font-headline font-black text-sm uppercase tracking-widest px-10 py-5 flex items-center justify-center gap-3 hover:bg-surface-bright transition-colors active:scale-95 duration-75 group">
                  <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  BACK TO PRESS
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
