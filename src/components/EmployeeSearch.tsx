'use client';

import { useState } from 'react';
import { Employee } from '@/data/employees';

const locationGroups = [
  "All",
  "Umbrella Headquarters",
  "Arklay Laboratory",
  "NEST",
  "Umbrella R&D Center",
  "Paris Laboratory",
  "Umbrella Intelligence Division",
  "Antarctic Research Division",
  "Rockfort Island Command",
  "Other",
];

export default function EmployeeSearch({ employees }: { employees: Employee[] }) {
  const [query, setQuery] = useState('');
  const [activeLocation, setActiveLocation] = useState('All');

  const filtered = employees.filter((e) => {
    const matchName = e.name.toLowerCase().includes(query.toLowerCase()) ||
      (e.position || '').toLowerCase().includes(query.toLowerCase());
    const matchLocation =
      activeLocation === 'All' ? true :
        activeLocation === 'Other'
          ? !locationGroups.slice(1, -1).some(loc => (e.location || '').includes(loc) || (e.branch || '').includes(loc))
          : (e.location || '').includes(activeLocation) || (e.branch || '').includes(activeLocation);
    return matchName && matchLocation;
  });

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="relative mb-6">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#d2002a] opacity-60 text-sm">search</span>
        <input
          type="text"
          placeholder="SEARCH PERSONNEL..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md bg-[#1a1a1a] border border-surface-container-high pl-10 pr-4 py-3 font-['Space_Grotesk'] text-xs uppercase tracking-widest text-on-surface placeholder-on-surface/30 focus:outline-none focus:border-[#d2002a] transition-colors"
        />
      </div>

      {/* Location Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {locationGroups.map((loc) => (
          <button
            key={loc}
            onClick={() => setActiveLocation(loc)}
            className={`px-4 py-1.5 font-headline text-[10px] uppercase tracking-widest transition-all duration-150 border ${activeLocation === loc
              ? 'bg-primary-container text-on-primary-container border-primary-container'
              : 'border-surface-container-high text-on-surface/50 hover:border-[#d2002a] hover:text-[#d2002a]'
              }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-4 font-headline text-[10px] uppercase tracking-widest text-on-surface/40">
        {filtered.length} EMPLOYEE RECORDS
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-surface-container-high">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container border-b border-surface-container-high">
              <th className="px-6 py-4 font-headline text-[10px] uppercase tracking-widest text-primary-container">Name</th>
              <th className="px-6 py-4 font-headline text-[10px] uppercase tracking-widest text-on-surface/50 hidden md:table-cell">Position</th>
              <th className="px-6 py-4 font-headline text-[10px] uppercase tracking-widest text-on-surface/50 hidden lg:table-cell">Branch</th>
              <th className="px-6 py-4 font-headline text-[10px] uppercase tracking-widest text-on-surface/50">Facility</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center font-headline text-[10px] uppercase tracking-widest text-on-surface/30">
                  — NO RECORDS MATCH THIS QUERY —
                </td>
              </tr>
            ) : (
              filtered.map((emp, i) => (
                <tr
                  key={i}
                  className={`border-b border-surface-container-high/50 transition-colors ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-container-lowest'
                    } hover:bg-surface-container-high group`}
                >
                  <td className="px-6 py-4">
                    <span className="font-headline text-sm font-bold uppercase tracking-tight text-on-surface group-hover:text-[#d2002a] transition-colors">
                      {emp.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="font-['Inter'] text-[11px] text-on-surface/60 uppercase tracking-wide">
                      {emp.position || <span className="opacity-30">—</span>}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="font-['Inter'] text-[11px] text-on-surface/60 uppercase tracking-wide">
                      {emp.branch || <span className="opacity-30">—</span>}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {emp.location ? (
                      <span className="inline-block font-headline text-[9px] uppercase tracking-widest px-2 py-1 bg-surface-container border border-primary-container/30 text-primary-container">
                        {emp.location}
                      </span>
                    ) : (
                      <span className="text-on-surface/20 font-headline text-[10px]">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
