'use client';

import React, { useState, useEffect, useRef } from 'react';
import RotatingGLBBackground from '@/components/RotatingGLBBackground';
import { ScrollArea } from '@/components/ui/scroll-area';

const getInitLogs = () => {
  let currentUser = "O_SPENCER";
  if (typeof window !== 'undefined') {
    currentUser = sessionStorage.getItem('umbrella_user') || currentUser;
  }
  return [
    "[ LOGIN SUCCESSFUL: ACCESS LEVEL 8 ]",
    "------------------------------------------------------------------",
    `USER: ${currentUser}_ADMIN | TERMINAL: NEST-04-ARKLAY`,
    "------------------------------------------------------------------",
    "",
    "[ TYPE 'HELP' FOR COMMAND LIST ]"
  ];
};

export default function ClearanceTerminal({ onClose }: { onClose: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    const initLogs = getInitLogs();
    let currentIndex = 0;
    
    const typeLine = (text: string, cb: () => void) => {
        let i = 0;
        setLogs(prev => [...prev, ""]);
        const typer = setInterval(() => {
            if (!active) {
                clearInterval(typer);
                return;
            }
            if (i < text.length) {
                setLogs(prev => {
                    const newLogs = [...prev];
                    newLogs[newLogs.length - 1] = text.substring(0, i + 1);
                    return newLogs;
                });
                i++;
            } else {
                clearInterval(typer);
                if (active) cb();
            }
        }, 5);
    };

    const runInit = () => {
        if (!active) return;
        if (currentIndex < initLogs.length) {
            typeLine(initLogs[currentIndex], () => {
                currentIndex++;
                setTimeout(runInit, 30);
            });
        }
    };
    
    runInit();

    return () => { active = false; };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    setLogs(prev => [...prev, `root@umbrella_nest_server: ~$ ${input}`]);
    setInput("");

    setTimeout(() => {
      let response = "COMMAND NOT RECOGNIZED. TYPE '/help' FOR AVAILABLE COMMANDS.";
      if (cmd === 'version') response = "RED QUEEN KERNEL V6.9.2\nBLUE UMBRELLA SECURE SYSTEMS";
      else if (cmd === 'security status' || cmd === 'security') response = "GLOBAL THREAT LEVEL: E-SERIES MOLD \nSECTOR ROMANIA: EXCLUSION ZONE\nFACILITIES ONLINE: 12";
      else if (cmd.includes('virus info') || cmd.includes('virus information')) response = "CLASSIFIED DATA: The Megamycete is a fungal superorganism capable of assimilating consciousness and mutating host DNA.\nDiscovered in Eastern Europe.\nEveline E-Series was the primary bioweapon application.";
      else if (cmd.includes('virus name') || cmd.includes('viruses')) response = "RECOGNIZED PATHOGENS:\n- PROGENITOR VIRUS\n- T-VIRUS (TYRANT)\n- G-VIRUS (GOLGOTHA)\n- T-VERONICA VIRUS\n- UROBOROS\n- C-VIRUS\n- MEGAMYCETE (MOLD) / CADOU\n- PLAGAS";
      else if (cmd.includes('location') || cmd.includes('lab') || cmd.includes('facilities')) response = "UMBRELLA / BSAA FACILITIES:\n1. ARKLAY MOUNTAINS (USA) - DESTROYED\n2. NEST / NEST2 (RACCOON CITY) - CONTAINED\n3. PARIS LABS (FRANCE) - INACTIVE\n4. ROCKFORT ISLAND (SOUTHERN OCEAN) - DESTROYED\n5. SPENCER ESTATE (EUROPE) - SANITIZED\n6. VILLAGE RESERVOIR (ROMANIA) - EXCLUSION ZONE";
      else if (cmd.includes('research')) response = "ACTIVE RESEARCH: [CADOU PARASITE INTEGRATION]\nAIM: Bio-Organic weapons capable of blending into civilian populations.\nPROJECT Lead: MOTHER MIRANDA -> DATA RECLAIMED BY BLUE UMBRELLA.";
      else if (cmd === 'alerts' || cmd === 'recent system alerts') response = "[[ RECENT SYSTEM ALERTS ]]\n> 04:12 - Minor coolant leak reported in Arklay B3.\n> 09:45 - Security sweep complete. No unauthorized entry detected.\n> 13:02 - [URGENT] Dr. Birkin requesting additional G-samples.";
      else if (cmd === 'help' || cmd === '/help') response = "[[ NAVIGATION MENU ]]\n1. VERSION .............................. [ RED QUEEN KERNEL ]\n2. SECURITY ............................. [ THREAT LEVEL ]\n3. VIRUS INFO ........................... [ CLASSIFIED PATHOGENS ]\n4. LABS ................................. [ FACILITY LOCATIONS ]\n5. RESEARCH ............................. [ ACTIVE PROJECTS ]\n6. ALERTS ............................... [ RECENT SYSTEM LOGS ]\n7. CLEAR ................................ [ WIPE TERMINAL MEMORY ]\n8. EXIT ................................. [ TERMINATE SESSION ]";
      else if (cmd === 'exit') {
        onClose();
        return;
      }
      else if (cmd === 'clear') {
        setLogs([]);
        return;
      }
      setLogs(prev => [...prev, response]);
    }, 400);
  };

  return (
    <div className="fixed bottom-0 left-0 md:left-64 right-0 h-80 bg-[#0a0a0a]/95 border-t-2 border-[#d2002a] z-50 flex flex-col font-mono text-xs text-[#e5e2e1] uppercase shadow-[0_-10px_50px_rgba(210,0,42,0.15)] backdrop-blur-xl">
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <RotatingGLBBackground />
      </div>
      
      <div className="flex justify-between items-center bg-[#131313]/80 p-3 border-b border-surface-container-highest relative z-10">
        <div className="flex items-center text-[#d2002a] font-bold tracking-widest text-[10px]">
           <span className="material-symbols-outlined text-sm mr-2">terminal</span>
           RED QUEEN SECURE SHELL
        </div>
        <button onClick={onClose} className="hover:text-[#d2002a] transition-colors"><span className="material-symbols-outlined text-sm">close</span></button>
      </div>

      <ScrollArea className="flex-1 relative z-10 w-full">
        <div className="p-6 font-bold whitespace-pre-wrap leading-loose">
          {logs.map((log, i) => (
            <div key={i} className={log.startsWith('root@') ? 'text-[#d2002a] mt-2' : 'opacity-80 text-[#ffb3b0] tracking-widest'}>{log}</div>
          ))}
          <div ref={endRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleCommand} className="p-4 border-t border-surface-container-highest flex items-center bg-[#131313]/90 relative z-10 w-full">
        <span className="text-[#d2002a] mr-4 font-black whitespace-nowrap">{'root@umbrella_nest_server: ~$'}</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 uppercase text-white font-mono tracking-widest placeholder-white/20"
          autoFocus
          placeholder="ENTER COMMAND..."
          spellCheck={false}
        />
      </form>
    </div>
  );
}
