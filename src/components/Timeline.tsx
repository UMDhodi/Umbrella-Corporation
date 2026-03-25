'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { era: "1968", title: "Progenitor Discovery", desc: "Lord Spencer, Marcus, and Ashford discover the Progenitor Virus in West Africa." },
  { era: "1988", title: "Nemesis Alpha", desc: "Creation of the NE-α Type parasite, initiating the Nemesis Project." },
  { era: "1998", title: "Raccoon City Incident", desc: "T-Virus outbreak leads to the complete sterilization of Raccoon City." },
  { era: "2007", title: "Blue Umbrella", desc: "Corporate restructuring and public pledge to eradicate bio-weapons." },
  { era: "2015", title: "Umbrella Corps", desc: "Deployment of specialized mercenary units to secure remaining B.O.W. research." },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];
    
    // Animate the central line growing
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      animation: gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', transformOrigin: 'top center' }
      )
    });

    items.forEach((item, i) => {
      const dot = item.querySelector('.timeline-dot');
      const content = item.querySelector('.timeline-content');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(dot, 
        { scale: 0, opacity: 0, boxShadow: '0 0 0 rgba(255,26,26,0)' },
        { scale: 1, opacity: 1, boxShadow: '0 0 20px rgba(255,26,26,0.8)', duration: 0.4, ease: "back.out(1.7)" }
      )
      .fromTo(content,
        { x: i % 2 === 0 ? 50 : -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-center mb-24 opacity-80">
        Ownership <span className="text-bio-red">History</span>
      </h2>
      
      <div className="relative">
        <div 
          ref={lineRef} 
          className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bio-red/50 to-transparent -translate-x-1/2"
        />

        <div className="flex flex-col gap-16 md:gap-32 relative z-10">
          {timelineData.map((data, idx) => (
            <div key={data.era} className={`timeline-item flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12 hidden md:block" />
              
              <div className="relative flex items-center justify-center w-10 h-10 shrink-0 mx-auto md:mx-0">
                <div className="timeline-dot w-4 h-4 rounded-full bg-bio-red z-10" />
              </div>
              
              <div className={`w-full md:w-5/12 timeline-content ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'} px-6 md:px-0`}>
                <div className="font-mono text-bio-red tracking-widest mb-2 text-xl">{data.era}</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-3 text-umbrella-white">{data.title}</h3>
                <p className="text-white/50 leading-relaxed max-w-sm ml-0 md:ml-auto">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
