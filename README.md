# Umbrella Corporation | Corporate Press Portal & Archival Vaults

**Clearance Level:** 4-S (SOVEREIGN CORE)  
**System ID:** NEST-04-ARKLAY  
**Status:** ALL SYSTEMS NOMINAL

Welcome to the internal archival and press dissemination portal for the Umbrella Corporation. This platform serves as the central hub for verified corporate imagery, legal boilerplate, and executive training protocols.

---

## 🏛 Project Architecture

This application is built using **Next.js 15** with the **App Router**, leveraging a dual-layer interface architecture:

### 1. The Public Shell
Common, surface-level pages aimed at external shareholders and public relations.
- **Route:** `/` (Home), `/about`, `/contact`, `/press`
- **Components:** Standard `Navigation` and `Footer` elements.

### 2. The Restricted Dashboard (`/press/*`)
Immersive, full-screen archival vaults that bypass the public shell to maintain maximum administrative secrecy.
- **Route Prefix:** `/press/corporate-seals`, `/press/photo-assets`, `/press/executive-portraits`, `/press/boilerplate-text`, `/press/executive-training`
- **Security Logic:** These routes automatically suppress the global Navigation and Footer components (via `usePathname` hooks) to provide a 100% immersive, edge-to-edge dashboard experience.

---

## 🧬 Core Components

### 🖥 The Red Queen Terminal (`ClearanceTerminal.tsx`)
An interactive CLI (Command Line Interface) accessible from the portal base. 
- **Features:** 3D GLB background, pulsing typewriter text, and administrative command support.
- **Commands:** `help`, `alerts`, `security`, `virus info`, `labs`, `version`.

### 🛡 NEST-04 Screensaver (`UmbrellaScreensaver.tsx`)
A global idle-state security layer.
- **Activation:** Triggers automatically after 2 minutes of zero user interaction.
- **Visuals:** Features a 3D Three.js canvas with the Umbrella brand mark rotating clockwise on the Z-axis.
- **Dismisssal:** Instantly fades out upon mouse movement, clicks, or keypresses.

### 📜 Archival Vaults
- **Photo Assets:** Dynamic grid of high-resolution facility and research imagery.
- **Boilerplate:** A rigid, austere document viewer for official corporate mandates.
- **Executive Training:** A mission-critical application form with simulated secure-transmission feedback.

---

## ⚙️ Development & Deployment

### Environment Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`.

### Production Build
To compile the final optimized Sovereign Core bundle:
```bash
npm run build
```

---
**NOTICE:** All access is monitored. Any unauthorized dissemination of the information contained within this portal is punishable by termination of employment and immediate prosecution under the Global Security Protocol Act.

*Protecting the Health of the People.*
