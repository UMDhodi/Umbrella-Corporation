export default function Motives() {
  const motives = [
    {
      title: "PROGENITOR STABILIZATION",
      desc: "Perfecting the foundational RNA sequences to create cellular immortality and robust bio-organic weaponry."
    },
    {
      title: "GLOBAL B.O.W. MONOPOLY",
      desc: "Supplying top-tier governments with engineered combat solutions, overriding conventional military forces."
    },
    {
      title: "EUGENICS DIRECTIVE",
      desc: "Accelerating human evolution through viral integration. Project W details classified."
    }
  ];

  return (
    <section className="py-24 px-4 w-full max-w-7xl mx-auto relative z-10">
      <div className="mb-16 border-l-4 border-bio-red pl-6">
        <h2 className="font-mono text-bio-red tracking-[0.2em] mb-2 uppercase opacity-80">Directive 01</h2>
        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Current Motives</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {motives.map((motive, idx) => (
          <div 
            key={idx}
            className="group relative bg-glass p-8 hover:bg-white/10 transition-colors duration-500 overflow-hidden"
          >
            {/* Background scanner line effect on hover */}
            <div className="absolute inset-0 bg-bio-red/5 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 ease-out z-0" />
            
            <div className="relative z-10">
              <div className="font-mono text-5xl text-white/10 font-bold mb-4">0{idx + 1}</div>
              <h4 className="text-xl font-bold tracking-widest text-umbrella-white mb-4 group-hover:text-glow-red transition-all">
                {motive.title}
              </h4>
              <p className="text-white/60 text-sm leading-loose">
                {motive.desc}
              </p>
            </div>
            
            {/* Corner decals */}
            <svg className="absolute top-2 right-2 w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:text-bio-red transition-all" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0 0h100v20H20v80H0z" />
            </svg>
            <svg className="absolute bottom-2 right-2 w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:text-bio-red transition-all" viewBox="0 0 100 100" fill="currentColor">
              <path d="M100 100H0v-20h80V0h20z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
