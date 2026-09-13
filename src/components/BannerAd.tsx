import React, { useState, useEffect } from 'react';
import { GATE_BANNER_ADS, OTHER_BANNER_ADS } from '../data';
import { BannerPool } from '../types';

interface BannerAdProps {
  pool?: BannerPool;
}

export const BannerAd: React.FC<BannerAdProps> = ({ pool = 'gate' }) => {
  const ads = pool === 'gate' ? GATE_BANNER_ADS : OTHER_BANNER_ADS;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [pool]);

  useEffect(() => {
    if (ads.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ads.length]);

  const currentBanner = ads[currentIndex];

  return (
    <div
      id="banner-advertisement-container"
      className="w-full mt-1 mb-3 select-none"
    >
      <div
        id="banner-advertisement-card"
        className="relative w-full h-[42px] overflow-hidden bg-[#f8fafc] flex items-center cursor-pointer shadow-none"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % ads.length)}
      >
        <img
          id="banner-image"
          src={currentBanner.imageUrl}
          alt={currentBanner.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* "Ad" tag */}
        <span className="absolute bottom-0 left-0 z-20 bg-black/60 text-white text-[9px] font-medium px-1.5 py-[1px] rounded-tr-[6px]">
          Ad
        </span>
      </div>
    </div>
  );
};
