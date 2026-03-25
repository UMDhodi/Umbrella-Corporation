import NextImage from 'next/image';

export default function StitchLayout() {
  return (
    <>
      
{/* TopNavBar Shared Component Removed (Now Global) */}
<main className="pt-20">
{/* Hero Section */}
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 opacity-20 grayscale">
<NextImage 
  alt="Brutalist Architecture Interior" 
  className="w-full h-full object-cover" 
  src="/images/brutalist-architecture.jpg"
  fill
  priority
/>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-4">
<NextImage 
  alt="Umbrella Corporation Logo" 
  className="w-32 md:w-40 lg:w-48 mb-6 drop-shadow-lg opacity-90 h-auto" 
  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg" 
  width={192}
  height={192}
/>
<h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-on-surface mb-6 uppercase leading-[0.9]">
                    PRESERVING THE HEALTH <br/> <span className="text-primary-container">OF THE PEOPLE.</span>
</h1>
<div className="w-24 h-1 bg-primary-container mb-8"></div>
<p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 max-w-2xl">
                    ADVANCING HUMAN EVOLUTION THROUGH SUPERIOR PHARMACEUTICAL RESEARCH SINCE 1968
                </p>
</div>
<div className="absolute bottom-12 left-12">
<span className="font-label text-[10px] tracking-[0.5em] uppercase opacity-40">ESTABLISHED 1968 / RACCOON CITY FACILITY / S-LEVEL CLEARANCE</span>
</div>
</section>
{/* Corporate Overview */}
<section className="py-32 px-12 bg-surface">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-4">
<h2 className="font-headline text-xs font-black tracking-widest text-primary-container uppercase mb-4">Institutional Mandate</h2>
<h3 className="font-headline text-4xl font-bold tracking-tighter uppercase leading-none">The Sovereign <br/> Laboratory</h3>
</div>
<div className="lg:col-span-5 text-on-surface-variant leading-relaxed space-y-8">
<p className="text-lg">
                        Umbrella Corporation stands as the premier global titan in biotechnology. We operate not merely as a commercial entity, but as a guardian of the human genetic future. Our laboratories are the crucibles where the weaknesses of biology are refined into the strengths of the next era.
                    </p>
<p className="opacity-70">
                        From our clandestine research facilities to our global consumer logistics, every action taken by the Corporation is aligned with the singular goal of human optimization. We provide the tools for society to transcend its current limitations, ensuring security and health through absolute technological dominance.
                    </p>
<div className="pt-4">
<button className="border border-outline-variant px-8 py-3 font-label text-[10px] tracking-widest uppercase hover:bg-surface-container-high transition-all">
                            Review Executive Summary
                        </button>
</div>
</div>
<div className="lg:col-span-3">
<div className="bg-surface-container-high p-8 border-l-4 border-primary-container">
<span className="material-symbols-outlined text-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
<h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-2">Notice to Personnel</h4>
<p className="text-[11px] uppercase tracking-tighter opacity-50 leading-tight">
                            Strict adherence to security protocols is mandatory. Unauthorized dissemination of internal research data is a violation of the 1968 Corporate Governance Act. High-level containment procedures are in effect at all Arklay regional facilities.
                        </p>
</div>
</div>
</div>
</section>
{/* Divisions Section: Modular Bento Grid */}
<section className="py-24 bg-surface-container-lowest">
<div className="px-12 mb-16">
<h2 className="font-headline text-3xl font-black tracking-tighter uppercase">Global Divisions</h2>
<div className="w-16 h-1 bg-on-surface mt-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px] border-y border-outline-variant/10">
{/* Pharmaceuticals */}
<div className="relative group overflow-hidden border-r border-outline-variant/10 bg-surface h-full">
<div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<NextImage 
  alt="Lab Tech" 
  className="w-full h-full object-cover grayscale" 
  src="/images/lab-tech.jpg"
  fill
/>
</div>
<div className="relative p-12 flex flex-col h-full justify-between z-10">
<div>
<span className="text-xs font-label uppercase tracking-widest opacity-40">Division 01</span>
<h4 className="font-headline text-2xl font-bold uppercase mt-4 leading-tight">Pharmaceuticals &amp; Biotechnology</h4>
</div>
<div>
<p className="text-sm opacity-60 mb-8 leading-relaxed">Systemic viral therapy, genetic engineering, and advanced immunization protocols for global health security.</p>
<span className="material-symbols-outlined text-primary-container text-4xl">biotech</span>
</div>
</div>
</div>
{/* Cosmetics */}
<div className="relative group overflow-hidden border-r border-outline-variant/10 bg-surface-container h-full">
<div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<NextImage 
  alt="Cosmetic manufacturing" 
  className="w-full h-full object-cover grayscale" 
  src="/images/security-surveillance.jpg"
  fill
/>
</div>
<div className="relative p-12 flex flex-col h-full justify-between z-10">
<div>
<span className="text-xs font-label uppercase tracking-widest opacity-40">Division 02</span>
<h4 className="font-headline text-2xl font-bold uppercase mt-4 leading-tight">Cosmetics &amp; Consumer Products</h4>
</div>
<div>
<p className="text-sm opacity-60 mb-8 leading-relaxed">Biological enhancement through daily utility. Superior skincare and health supplements for the modern citizen.</p>
<span className="material-symbols-outlined text-primary-container text-4xl">sanitizer</span>
</div>
</div>
</div>
{/* Chemicals */}
<div className="relative group overflow-hidden border-r border-outline-variant/10 bg-surface h-full">
<div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<NextImage 
  alt="Industrial machinery" 
  className="w-full h-full object-cover grayscale" 
  src="/images/pharmaceutical-logistics.jpg"
  fill
/>
</div>
<div className="relative p-12 flex flex-col h-full justify-between z-10">
<div>
<span className="text-xs font-label uppercase tracking-widest opacity-40">Division 03</span>
<h4 className="font-headline text-2xl font-bold uppercase mt-4 leading-tight">Chemicals &amp; Industrial Machinery</h4>
</div>
<div>
<p className="text-sm opacity-60 mb-8 leading-relaxed">High-grade synthetic compounds and heavy-duty manufacturing equipment for large-scale infrastructure.</p>
<span className="material-symbols-outlined text-primary-container text-4xl">precision_manufacturing</span>
</div>
</div>
</div>
{/* Transportation */}
<div className="relative group overflow-hidden bg-surface-container h-full">
<div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<NextImage 
  alt="Cargo logistics" 
  className="w-full h-full object-cover grayscale" 
  src="/images/corporate-office.jpg"
  fill
/>
</div>
<div className="relative p-12 flex flex-col h-full justify-between z-10">
<div>
<span className="text-xs font-label uppercase tracking-widest opacity-40">Division 04</span>
<h4 className="font-headline text-2xl font-bold uppercase mt-4 leading-tight">Transportation &amp; Tourism</h4>
</div>
<div>
<p className="text-sm opacity-60 mb-8 leading-relaxed">Seamless global logistics and exclusive corporate retreats in secure, managed environments.</p>
<span className="material-symbols-outlined text-primary-container text-4xl">departure_board</span>
</div>
</div>
</div>
</div>
</section>
{/* Asymmetric Mission Block */}
<section className="bg-surface relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="bg-surface-container-high p-24">
<h2 className="font-headline text-6xl font-black uppercase mb-12 leading-none">The <br/> Future is <br/> Modular.</h2>
<p className="font-body text-xl opacity-80 leading-relaxed mb-8">
                        Our contribution to human evolution is not accidental. It is engineered. 
                    </p>
<div className="flex gap-4">
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container">science</span>
</div>
<div className="w-12 h-12 bg-surface flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined">shield</span>
</div>
<div className="w-12 h-12 bg-surface flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined">database</span>
</div>
</div>
</div>
<div className="relative bg-black">
<NextImage 
  alt="Clinical Environment" 
  className="w-full h-full object-cover opacity-50 grayscale" 
  src="/images/clinical-environment.jpg"
  fill
/>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="glass-overlay p-12 border border-white/5 w-full max-w-md">
<h5 className="font-headline text-xs font-bold tracking-widest uppercase mb-4 text-primary">Status: Operational</h5>
<p className="text-sm tracking-tight leading-relaxed opacity-90 italic">
                                "The biological limitations of the previous century are being systematically dismantled. Through rigorous trial and total corporate dedication, Umbrella ensures a more resilient species."
                            </p>
<p className="mt-6 font-label text-[10px] tracking-widest uppercase">— SPENCER RESEARCH MEMORANDUM</p>
</div>
</div>
</div>
</div>
</section>
</main>
{/* Footer Shared Component Removed (Now Global) */}

    </>
  );
}
