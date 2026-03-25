'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ExecutiveTrainingPage() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (submitState !== 'idle') return;

    setSubmitState('loading');
    
    // Simulate secure transmission delay
    setTimeout(() => {
      setSubmitState('success');
    }, 2500);
  };
  return (
    <div className="min-h-screen w-screen bg-[#0e0e0e] text-[#e5e2e1] font-body selection:bg-[#d2002a] selection:text-[#ffe1e0] relative flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 grayscale contrast-125 brightness-[0.2] z-0">
        <img alt="Facility Core" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdO0fiP0KXNozgUnGRAM0evNW8ENjtfeP9dwQSyKVBEQiHX3yskMaKXxbXpdlgRPGk-8h0eilD_yH9mclF3-oLCJ2DozC9kqi_ual0LjdrBiQX_0sALwqQvybGg93bkH9jsfRePx9J0PSPX0wfF6JWCsgiaD4TOyOCWca3xQRQsj2GQCM2O0ZQe0-FlolgItykNw4Vxz4MqQHPFdVu90SVvH1__FWBUnX37-0f66rgmBbvEWWDnhZ_hizsHVmP99FyxwjXYJqTpX0"/>
      </div>
      
      {/* Static Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0" style={{ backgroundImage: "radial-gradient(#e5e2e1 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

      {/* Main Terminal Card Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col">
        
        {/* Top Floating Header */}
        <div className="flex justify-between items-end mb-4 px-2">
          <Link href="/press/executive-portraits" className="flex items-center gap-2 text-[#d2002a] hover:opacity-80 transition-opacity group">
            <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">arrow_back</span>
            <span className="font-['Space_Grotesk'] text-xs tracking-[0.2em] font-bold uppercase hidden sm:block">Abort & Return</span>
          </Link>
          <div className="text-right">
            <h1 className="font-['Space_Grotesk'] font-bold text-lg md:text-2xl tracking-tighter uppercase">Executive Training <span className="text-[#d2002a]">Application</span></h1>
            <p className="font-mono text-[10px] tracking-widest text-[#393939] uppercase mt-1">SOVEREIGN CORE // CLEARANCE LEVEL 4</p>
          </div>
        </div>

        {/* The Glass Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#131313]/90 backdrop-blur-xl border border-[#2a2a2a] shadow-2xl overflow-hidden shadow-[#d2002a]/5">
          
          {/* Form Side - Span 7 */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
            
            <p className="font-body text-[#b6b5b5] text-xs sm:text-sm leading-relaxed mb-6">
              Candidate identification and clearance verification protocol. Ensure all fields are populated with verified corporate credentials. Discrepancies will result in immediate termination.
            </p>
            
            <form className="space-y-6">
              <div className="group">
                <label className="block font-['Space_Grotesk'] text-[10px] tracking-[0.2em] text-[#d2002a] uppercase mb-2">01. FULL CANDIDATE NAME</label>
                <input className="w-full bg-[#1c1b1b] border border-transparent text-[#e5e2e1] py-3 px-4 focus:ring-0 focus:outline-none focus:border-[#d2002a] transition-all placeholder:text-[#393939] font-['Space_Grotesk'] uppercase text-sm" placeholder="SURNAME, GIVEN NAME" type="text"/>
              </div>

              <div className="group">
                <label className="block font-['Space_Grotesk'] text-[10px] tracking-[0.2em] text-[#d2002a] uppercase mb-2">02. OFFICIAL CORPORATE DOMAIN</label>
                <input className="w-full bg-[#1c1b1b] border border-transparent text-[#e5e2e1] py-3 px-4 focus:ring-0 focus:outline-none focus:border-[#d2002a] transition-all placeholder:text-[#393939] font-['Space_Grotesk'] uppercase text-sm" placeholder="ID_NUMBER@UMBRELLA.CORP" type="email"/>
              </div>



              <div className="flex items-start gap-4 p-4 bg-[#1c1b1b] border-l-2 border-[#d2002a]">
                <input className="mt-1 bg-[#2a2a2a] border-none text-[#d2002a] focus:ring-0 cursor-pointer" type="checkbox" id="certify"/>
                <label htmlFor="certify" className="text-[9px] font-['Inter'] uppercase leading-relaxed text-[#b6b5b5] cursor-pointer tracking-wider">
                  I HEREBY CERTIFY THAT THE INFORMATION PROVIDED IS ACCURATE. I ACKNOWLEDGE THAT ENROLLMENT IN THE EXECUTIVE TRAINING PROGRAM INCLUDES NON-DISCLOSURE AGREEMENTS REGARDING LEVEL 4 BIOLOGICAL RESEARCH.
                </label>
              </div>

              <button 
                className={`w-full font-['Space_Grotesk'] font-bold text-xs tracking-[0.2em] py-4 transition-all duration-300 flex items-center justify-center gap-3 ${
                  submitState === 'idle' 
                    ? 'bg-[#d2002a] hover:bg-[#ffb3b0] text-[#ffe1e0] hover:text-[#0e0e0e] active:scale-[0.99] cursor-pointer' 
                    : submitState === 'loading'
                    ? 'bg-[#d2002a]/40 text-[#ffe1e0]/80 cursor-wait shadow-inner'
                    : 'bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/40 cursor-default'
                }`} 
                type="button" 
                onClick={handleSubmit}
                disabled={submitState !== 'idle'}
              >
                {submitState === 'idle' && (
                  <>
                    INITIATE APPLICATION TRANSMISSION
                    <span className="material-symbols-outlined text-sm">enhanced_encryption</span>
                  </>
                )}
                {submitState === 'loading' && (
                  <>
                    TRANSMITTING TO HUB...
                    <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                  </>
                )}
                {submitState === 'success' && (
                  <>
                    TRANSMISSION SUCCESSFUL
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Branding Side - Span 5 */}
          <div className="lg:col-span-5 p-10 flex flex-col justify-center items-center relative bg-gradient-to-br from-[#131313] to-[#0a0a0a]">
            
            {/* Logo Wrapper */}
            <div className="mb-6 relative z-10 p-6 border border-[#2a2a2a] bg-[#1c1b1b]/50 shadow-[0_0_30px_rgba(210,0,42,0.1)]">
              <img alt="Umbrella Corporation Logo" className="w-32 h-32 md:w-48 md:h-48 opacity-90 drop-shadow-[0_0_15px_rgba(210,0,42,0.5)]" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Umbrella_Corporation_logo.svg"/>
            </div>
            
            <div className="text-center mb-10 xl:mb-16 relative z-10">
              <h3 className="font-['Space_Grotesk'] font-black text-3xl tracking-[0.3em] uppercase text-[#e5e2e1]">UMBRELLA</h3>
              <p className="font-['Space_Grotesk'] text-[9px] tracking-[0.4em] text-[#d2002a] mt-2">PHARMACEUTICALS // 1968</p>
            </div>
            
            <div className="w-full space-y-4 relative z-10 border-t border-[#d2002a]/20 pt-6 px-4">
              <div>
                <div className="font-['Space_Grotesk'] text-[9px] text-[#d2002a] tracking-[0.2em] mb-1">FACILITY LOCATION</div>
                <div className="font-['Space_Grotesk'] text-lg text-[#e5e2e1] font-bold tracking-tighter">NEST-4 / ARC-SURFACE</div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d2002a]/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>
          
        </div>

        {/* Bottom Footer Details linked to the card */}
        <div className="flex justify-between items-center mt-4 px-2">
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#393939] flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-[#d2002a] animate-pulse inline-block"></span>
             ALL DATA SUBJECT TO BOARD REVIEW
           </span>
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#393939] hidden sm:block">
             REF_NO: UC-EXEC-TP-8812
           </span>
        </div>

      </div>
    </div>
  );
}
