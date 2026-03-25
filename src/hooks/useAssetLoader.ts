'use client';

import { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

const CRITICAL_IMAGES = [
  '/images/umbrella-logo.svg',
  '/images/brutalist-architecture.jpg',
  '/images/lab-tech.jpg',
  '/images/clinical-environment.jpg'
];

const CRITICAL_AUDIO = [
  '/audio/granted.mp3',
  '/audio/denied.mp3',
];

export function useAssetLoader() {
  const { progress: threeProgress, active: threeActive } = useProgress();
  const [imageProgress, setImageProgress] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedAssets = new Set<string>();
    const totalImages = CRITICAL_IMAGES.length;
    const totalAudios = CRITICAL_AUDIO.length;

    const updateProgress = (src: string, category: 'image' | 'audio') => {
      if (loadedAssets.has(src)) return;
      loadedAssets.add(src);
      
      if (category === 'image') {
        const currentLoaded = Array.from(loadedAssets).filter(s => CRITICAL_IMAGES.includes(s)).length;
        setImageProgress((currentLoaded / totalImages) * 100);
      } else {
        const currentLoaded = Array.from(loadedAssets).filter(s => CRITICAL_AUDIO.includes(s)).length;
        setAudioProgress((currentLoaded / totalAudios) * 100);
      }
    };

    if (totalImages === 0) {
      setImageProgress(100);
    } else {
      CRITICAL_IMAGES.forEach((src) => {
        const img = new Image();
        img.onload = () => updateProgress(src, 'image');
        img.onerror = () => updateProgress(src, 'image');
        img.src = src;
        if (img.complete) updateProgress(src, 'image');
      });
    }

    if (totalAudios === 0) {
      setAudioProgress(100);
    } else {
      CRITICAL_AUDIO.forEach((src) => {
        const audio = new Audio();
        const onLoaded = () => updateProgress(src, 'audio');
        audio.oncanplay = onLoaded;
        audio.oncanplaythrough = onLoaded;
        audio.onerror = onLoaded;
        audio.src = src;
        audio.load();
        if (audio.readyState >= 2) onLoaded();
      });
    }
  }, []);

  // Total progress is a weighted average
  // 3D: 40%, Images: 40%, Audio: 20%
  const totalProgress = Math.round(
    (threeProgress * 0.4) + (imageProgress * 0.4) + (audioProgress * 0.2)
  );

  useEffect(() => {
    if (totalProgress >= 100 && !threeActive) {
      const timer = setTimeout(() => setIsLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [totalProgress, threeActive]);

  return { totalProgress, isLoaded };
}
