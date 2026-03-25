import React from 'react';

export default function AboutLayout() {
  return (
    <>

      {/* TopNavBar Removed (Now Global) */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-end px-12 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <img className="w-full h-full object-cover grayscale brightness-50 opacity-40" data-alt="Brutalist concrete skyscraper against a dark sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuI02KD1m3UliikLeZlgfuG5VIbaPzMfxPy1X9DD647J-K8ret1dMS8Q-2yn04zWSuhWfV1kb4vH6X7IoQKbIPPcQHQbSFtll1eMk_SRepVopHEJVBxBsZVlmEdfdjrD4S9_zzbYNPnUStjtwVmssqaJfzGQmtQF27jI75fZs12VHCuud-zig8aL1caYL6PBhhqf_4GJ7zAyNz_WWcI9SP2YX8drK3vV5YzW-LmjidDLRST_Rhh5avUh1AgFb2EYGEZYDbFz9FFns" />
          </div>
          <div className="relative z-20 max-w-4xl">
            <p className="font-headline text-primary-container text-xs tracking-[0.4em] uppercase mb-4">ESTABLISHED 1968 | United States • LONDON • PARIS • TOKYO</p>
            <h1 className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter leading-none mb-8">
              NEST <br />
              <span className="text-primary-container">UNDERGROUND RESEARCH FACILITY.</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-on-surface-variant max-w-2xl leading-relaxed">
              Protecting the health of the people. Building a stronger tomorrow through biological precision and industrial dominance.
            </p>
          </div>
        </section>
        {/* Corporate History */}
        <section className="py-32 px-12 bg-surface-container-lowest">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="font-headline text-xs tracking-[0.5em] uppercase text-primary-container mb-8">ORIGIN DECREE</h2>
              <p className="text-5xl font-headline font-bold tracking-tighter leading-tight">Founded 1968. <br />The Birth of Order.</p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg">
                <p>Established in 1968 by Oswell E. Spencer, Edward Ashford, and James Marcus, the Umbrella Corporation operated publicly as a pharmaceutical enterprise while secretly conducting advanced research in genetic engineering and viral weaponization.</p>
                <p>Over time, the corporation expanded internationally, establishing multiple research facilities and divisions dedicated to bioweapon development and experimental virology under centralized corporate control.</p>
                <div className="p-8 bg-surface-container-high border-l-4 border-primary-container">
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="shield_person">shield_person</span>
                  <p className="font-headline text-sm uppercase tracking-widest text-on-surface mb-2">Security Protocol 69-A</p>
                  <p className="text-xs font-mono opacity-60">All historical archives are strictly classified. Clearance Level 4 required for deep-access retrieval.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Vision (Human Evolution) */}
        <section className="py-32 px-12 bg-surface">
          <div className="asymmetric-grid gap-24">
            <div className="hidden md:block">
              <img className="w-full h-auto grayscale border-r-8 border-primary-container" data-alt="Microscopic view of cellular structures in high contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPmHbN5oChvia5GpiVH1LEJdsy5h9IlQYf9GH88QI45xO_Ij_K7_sMXSgo_M5zQCMK0mOGvJG8s8Zs6iT-5VyYyucw4otKWhVz_Xv8k-T_CBTYB2v1aidJ6Wl-uc5SxiZW0SWwo-6wyfrL9OHk7nzWcXZzS9HiEnpAXreZXDtzeA-gODURnx3S_npgITobSv2Nhn18JRhcRMDTFUxLo0q1v5uVKvdYzUYwnU1oTmsS0N0qeSSJhDjajYqk7Npzct1raw4RvOIRrT0" />
            </div>
            <div>
              <h2 className="font-headline text-xs tracking-[0.5em] uppercase text-primary-container mb-12">THE VISION</h2>
              <h3 className="font-headline text-6xl font-bold tracking-tighter mb-8 italic">Human Evolution <br />is not a matter of chance.</h3>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-12">
                Under the direction of Oswell E. Spencer, Umbrella pursues the deliberate advancement of the species through controlled viral research and selective enhancement. Natural limitations are to be overcome. Only those capable of adaptation will define the next stage of humanity.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-outline-variant pt-12">
                <div>
                  <p className="font-headline text-3xl font-bold">99.8%</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Purity Standard</p>
                </div>
                <div>
                  <p className="font-headline text-3xl font-bold">14+</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Global Facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Contributions - Bento Grid */}
        <section className="py-32 px-12 bg-surface-container-low">
          <h2 className="font-headline text-xs tracking-[0.5em] uppercase text-primary-container mb-16 text-center">DOMAINS OF INFLUENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
            <div className="bg-surface-container-high p-8 flex flex-col justify-between group hover:bg-primary-container transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4 text-primary-container group-hover:text-on-primary-container" data-icon="science">science</span>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter group-hover:text-on-primary-container">Chemicals</h4>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60 group-hover:text-on-primary-container">Industrial Grade Solutions</p>
            </div>
            <div className="md:col-span-2 bg-surface-container-highest p-8 relative overflow-hidden flex flex-col justify-end group">
              <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity" data-alt="Abstract image of pharmaceutical production lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxdoTjbIQh2Kke5iULSAM0JYj1Ig7UqYYLwnN0Wk6aym5hfYS951Jw0H2jtMYZw-25Ju_2Ce3qboVnO5BKylSxS77FoRrLoAW7luhL5Ve56oJJt_hULf2kPreg8blhfOgjLdJaYy-n15kPnk1uZ1zB_sRqeKNYu8MxHwR3vHyHWSfy9vq7wewJUTSr1FmHrJyU3ZU16oRJIiarQHJxl3vHQqHdQPrFRMlAEmoH0GjCG9hsMNxvPu7VsVzlpM0wqNAOrgeKXLuqETI" />
              <div className="relative z-10">
                <h4 className="font-headline font-black text-4xl uppercase tracking-tighter">Pharmaceuticals</h4>
                <p className="text-sm mt-2 opacity-80 max-w-xs">Our core heritage. Eradicating disease through aggressive molecular management.</p>
              </div>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-between hover:bg-primary-container group transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4 text-primary-container group-hover:text-on-primary-container" data-icon="face_retouching_natural">face_retouching_natural</span>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter group-hover:text-on-primary-container">Cosmetics</h4>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60 group-hover:text-on-primary-container">Surface Perfection</p>
            </div>
            <div className="bg-surface-container-highest p-8 flex flex-col justify-between border-t-4 border-primary-container">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4 text-primary-container" data-icon="precision_manufacturing">precision_manufacturing</span>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter">Industrial Machinery</h4>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60">Sovereign Heavy Industries</p>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-between hover:bg-primary-container group transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4 text-primary-container group-hover:text-on-primary-container" data-icon="nutrition">nutrition</span>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter group-hover:text-on-primary-container">Health Foods</h4>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60 group-hover:text-on-primary-container">Biological Optimization</p>
            </div>
            <div className="bg-surface-container-highest p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4 text-primary-container" data-icon="flight">flight</span>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter">Transportation</h4>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60">Global Reach</p>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-between hover:bg-primary-container group transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4 text-primary-container group-hover:text-on-primary-container" data-icon="beach_access">beach_access</span>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter group-hover:text-on-primary-container">Tourism</h4>
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60 group-hover:text-on-primary-container">Controlled Leisure</p>
            </div>
          </div>
        </section>
        {/* The Sovereign Mandate */}
        <section className="py-48 px-12 text-center bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container opacity-[0.03] blur-[100px] rounded-full"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-xs tracking-[0.8em] uppercase text-primary-container mb-12">THE SOVEREIGN MANDATE</h2>
            <p className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
              Our Business is Life Itself.
            </p>
            <div className="h-1 w-24 bg-primary-container mx-auto mb-12"></div>
            <p className="text-lg text-on-surface-variant leading-loose">
              The Umbrella Corporation exists to bridge the gap between human frailty and biological superiority. We do not merely manufacture products; we synthesize the conditions for a superior existence. Through our diverse subsidiaries, we provide the infrastructure for a society that is clean, efficient, and healthy.
            </p>
          </div>
        </section>
        {/* Subsidiary Logo Cloud (Minimalist) */}
        <section className="py-24 px-12 border-t border-outline-variant bg-surface">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale contrast-125">
            <span className="font-headline font-bold text-2xl tracking-tighter">PHARMACEUTICALS</span>
            <span className="font-headline font-bold text-2xl tracking-tighter">HEAVY INDUSTRIES</span>
            <span className="font-headline font-bold text-2xl tracking-tighter">LOGISTICS</span>
            <span className="font-headline font-bold text-2xl tracking-tighter">AEROSPACE</span>
            <span className="font-headline font-bold text-2xl tracking-tighter">SECURITY</span>
          </div>
        </section>
      </main>
      {/* Footer Removed (Now Global) */}

    </>
  );
}
