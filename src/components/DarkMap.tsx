'use client';

import { useEffect, useRef } from 'react';

const locations = [
  { name: 'Midwest, USA', lat: 41.83, lng: -87.83, label: 'MIDWEST SECTOR' },
  { name: 'Missouri, USA', lat: 38.57, lng: -92.17, label: 'MISSOURI FACILITY' },
  { name: 'Paris, France', lat: 48.86, lng: 2.35, label: 'PARIS LABORATORY' },
];

export default function DarkMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || !mapRef.current) return;
    initRef.current = true;

    (async () => {
      const L = (await import('leaflet')).default;


      const map = L.map(mapRef.current!, {
        center: [30, -10],
        zoom: 2,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
      });

      // Dark CartoDB tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Custom red dot icon
      const redIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 12px; height: 12px;
          background: #d2002a;
          border-radius: 50%;
          border: 2px solid #ff4444;
          box-shadow: 0 0 8px #d2002a, 0 0 20px rgba(210,0,42,0.5);
          animation: pulse 2s infinite;
        "></div>
        <style>
          @keyframes pulse {
            0% { box-shadow: 0 0 6px #d2002a, 0 0 12px rgba(210,0,42,0.4); }
            50% { box-shadow: 0 0 14px #d2002a, 0 0 28px rgba(210,0,42,0.7); }
            100% { box-shadow: 0 0 6px #d2002a, 0 0 12px rgba(210,0,42,0.4); }
          }
        </style>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      locations.forEach(({ lat, lng, label }) => {
        L.marker([lat, lng], { icon: redIcon })
          .addTo(map)
          .bindTooltip(`<span style="font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:#d2002a;background:#0e0e0e;border:1px solid #d2002a;padding:4px 8px;">${label}</span>`, {
            permanent: false,
            direction: 'top',
            className: 'umbrella-tooltip',
            offset: [0, -10],
          });
      });
    })();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100%', background: '#0e0e0e' }}
    />
  );
}
