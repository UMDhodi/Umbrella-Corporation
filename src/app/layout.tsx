import type { Metadata } from "next";
import { Inter, Share_Tech_Mono, Space_Grotesk, Michroma } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GlobalPreloader from '@/components/GlobalPreloader';
import { ScrollArea } from '@/components/ui/scroll-area';
import ScreensaverLoader from '@/components/ScreensaverLoader';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umbrella Corporation",
  description: "The Umbrella Corporation was perceived as a titan of modern industry, a benevolent, high-tech pharmaceutical giant that preserved the health of the people. It was a household name, providing essential consumer products, medical supplies, and employment, operating with a largely positive public image, particularly in its hometown of Raccoon City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.cdnfonts.com/css/eurostile" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${shareTechMono.variable} ${spaceGrotesk.variable} ${michroma.variable} font-sans antialiased bg-background text-on-background selection:bg-primary-container/40 selection:text-white`}
      >
        <ScrollArea className="h-screen w-full">
          <GlobalPreloader>
            <Navigation />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </GlobalPreloader>
        </ScrollArea>
        <ScreensaverLoader />
      </body>
    </html>
  );
}
