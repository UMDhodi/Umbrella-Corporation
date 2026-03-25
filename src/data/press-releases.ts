export interface PressRelease {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  content: string[];
  imageUrl?: string;
  author?: string;
  pdfUrl?: string;
}

export const pressReleases: Record<string, PressRelease> = {
  /* --- LATEST: 2026 ERA (BLUE UMBRELLA / BSAA) --- */
  "blue-umbrella-reconciliation-act": {
    id: "blue-umbrella-reconciliation-act",
    title: "BLUE UMBRELLA RECONCILIATION ACT",
    date: "JANUARY 15, 2026",
    subtitle: "Redefining the Legacy of a Name",
    content: [
      "Umbrella Co. (Blue) officially reaffirms its unwavering commitment to the total eradication of Bio-Organic Weapons (B.O.W.s) on a worldwide scale. By pivoting from its origins toward a mission of global safety, the company is dedicating its vast technical resources to neutralizing biological hazards and restoring international stability.",
      "In a significant partnership with the B.S.A.A. (Bioterrorism Security Assessment Alliance), Blue Umbrella is pleased to announce that its newest 'Awakening' series of anti-viral agents has successfully transitioned into mass production. This next generation of medical countermeasures is designed to provide rapid response and protection against emerging biological contingencies.",
      "With these advanced assets now operational, Blue Umbrella is positioned to lead the global defense against bioterrorism. Our mission has evolved: our business is no longer merely the creation of life, but the absolute preservation of it."
    ],
    imageUrl: "/images/blue-umbrella.png",
    author: "Umbrella Public Relations Division",
    pdfUrl: "/doc/BLUE UMBRELLA.pdf"
  },
  "raccoon-city-sterilization-incident-response": {
    id: "raccoon-city-sterilization-incident-response",
    title: "EMERGENCY INCIDENT RESPONSE: RACCOON CITY",
    date: "October 2, 1998",
    subtitle: "Statement on the Industrial Tragedy and Federal Sterilization",
    content: [
      "Umbrella Corporation expresses its deepest condolences to the families affected by the catastrophic industrial failure within Raccoon City. Following the tragic breach of local municipal infrastructure on October 1, the corporation supports the difficult decision made by the federal government to execute the 'Sterilization Operation' to prevent further chemical contamination.",
      "Initial internal audits suggest that the localized crisis was exacerbated by the gross negligence of the Raccoon City Police Department and the late Mayor Michael Warren. Umbrella Corporation maintains that its facilities were operating within safety parameters until compromised by civil unrest and the subsequent failure of city-managed utility grids.",
      "As of October 2, Umbrella is fully cooperating with a congressional inquiry. We have deployed specialized Bio-Hazard Countermeasure Service (U.B.C.S.) personnel to the perimeter to assist in environmental monitoring. Any rumors regarding experimental biological agents are categorized as malicious misinformation; the corporation remains committed to its motto: 'Protecting the Health of the People.'"
    ],
    imageUrl: "/images/raccoon_city.png",
    author: "Umbrella Public Relations Division",
    pdfUrl: "/doc/EMERGENCY.pdf"
  },
  "arklay-mountain-safety-advisory": {
    id: "arklay-mountain-safety-advisory",
    title: "ARKLAY MOUNTAIN SAFETY ADVISORY",
    date: "MAY 24, 1998",
    subtitle: "Addressing Recent Wildlife Disturbance Reports",
    content: [
      "Umbrella Corporation is working in close coordination with the Raccoon City Police Department to investigate these wildlife disturbances. Preliminary findings from our internal teams suggest the behavioral changes may be linked to a minor chemical runoff resulting from a localized storage leak.",
      "The corporation confirms that the source of the leak has been fully contained. To ensure the continued well-being of the community and the integrity of the local ecosystem, a specialized sanitization sweep is currently in progress.",
      "While these containment efforts are completed, Umbrella Corporation strongly urges all hikers, campers, and local residents to remain strictly on marked trails within the Arklay forest. Adherence to these boundaries is essential until the biotech teams have concluded their final safety protocols."
    ],
    imageUrl: "/images/arklay_mountain.png",
    author: "Regional Security Command",
    pdfUrl: "/doc/ARKLAY.pdf"
  },
  "new-tourism-initiative-in-arklay": {
    id: "new-tourism-initiative-in-arklay",
    title: "NEW TOURISM INITIATIVE IN ARKLAY",
    date: "JULY 19, 1993",
    subtitle: "Bringing Prosperity to the Raccoon Region",
    content: [
      "Umbrella Corporation is proud to sponsor the new Raccoon City Arklay Mountains Tourism Board.",
      "By opening up the scenic mountain trails, we hope to invite thousands of new visitors to experience the beauty of the midwest.",
      "Safety and community growth remain our highest priorities as we continue to invest locally."
    ],
    author: "Community Outreach",
    pdfUrl: "/doc/TOURISM.pdf"
  },

  /* --- LEGACY: 1960s-70s (THE FOUNDING) --- */
  "industrial-machinery-modernization": {
    id: "industrial-machinery-modernization",
    title: "INDUSTRIAL MACHINERY MODERNIZATION",
    date: "APRIL 02, 1974",
    subtitle: "Upgrading the Foundational Architecture",
    content: [
      "In our continuous pursuit of excellence, Umbrella Inc. is updating all heavy machinery across our global manufacturing sectors.",
      "New automated assembly lines will minimize human risk and maximize output speeds.",
      "This initiative proves once again that our core foundation is built on absolute reliability."
    ],
    author: "Operations Command",
    pdfUrl: "/doc/INDUSTRIAL.pdf"
  },
  "aeterna-pharma-expansion": {
    id: "aeterna-pharma-expansion",
    title: "AETERNA PHARMA EXPANSION",
    date: "OCTOBER 14, 1969",
    subtitle: "Scaling Medical Frontiers in the Antarctic",
    content: [
      "Umbrella Pharmaceuticals has officially broken ground on the new Aeterna expansion protocol.",
      "This facility represents a multi-billion dollar investment into the future of biological sciences and corporate sovereignty.",
      "The board expects operations to commence early next year, driving unparalleled growth in the consumer medical division."
    ],
    imageUrl: "/images/archival-hero.jpg",
    author: "Public Relations Dept.",
    pdfUrl: "/doc/EXPENSION.pdf"
  }
};
