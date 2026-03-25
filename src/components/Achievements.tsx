export default function Achievements() {
  const successes = [
    { code: "PRJ-T", name: "T-Virus", status: "SYNTHESIZED", desc: "Base mutation agent for enhanced combat stamina." },
    { code: "PRJ-G", name: "G-Virus", status: "UNSTABLE", desc: "Extreme accelerated cellular replication. Unpredictable." },
    { code: "NE-A", name: "Nemesis Alpha", status: "DEPLOYED", desc: "Parasite granting cognitive control to B.O.W. hosts." },
    { code: "T-P", name: "T-Phobos", status: "ACTIVE", desc: "Fear-triggered mutation sequence. Optimal for psychological warfare." },
  ];

  return (
    <section className="py-32 px-4 w-full max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
          Notable <span className="text-bio-red">Successes</span>
        </h2>
        <div className="h-1 w-32 bg-bio-red mt-6 box-glow-red" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {successes.map((item, idx) => (
          <div 
            key={item.code} 
            className="group border border-white/20 bg-black/50 backdrop-blur-md p-6 relative overflow-hidden transition-all duration-300 hover:border-bio-red hover:bg-bio-red/10"
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/50 group-hover:border-bio-red transition-colors" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/50 group-hover:border-bio-red transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/50 group-hover:border-bio-red transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/50 group-hover:border-bio-red transition-colors" />

            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-xs text-white/50 group-hover:text-bio-red transition-colors">{item.code}</span>
              <span className={`font-mono text-[10px] px-2 py-1 uppercase tracking-wider ${item.status === 'ACTIVE' || item.status === 'DEPLOYED' ? 'bg-bio-red/20 text-bio-red' : 'bg-white/10 text-white/70'}`}>
                {item.status}
              </span>
            </div>

            <h4 className="text-2xl font-bold uppercase tracking-widest mb-4 group-hover:text-glow-red transition-all">
              {item.name}
            </h4>
            
            <p className="text-sm text-white/60 leading-relaxed">
              {item.desc}
            </p>
            
            {/* Subdermal UI scanline */}
            <div className="absolute left-0 right-0 h-px bg-bio-red/50 top-0 -translate-y-full group-hover:animate-scanline" />
          </div>
        ))}
      </div>
    </section>
  );
}
