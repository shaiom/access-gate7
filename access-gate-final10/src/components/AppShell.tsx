import React, { useState } from 'react';
import { TabType } from '../types';
import { CURRENT_USER } from '../data';
import { MarineBackground } from './MarineBackground';
import { TopHeader } from './TopHeader';
import { BottomNav } from './BottomNav';
import { BannerAd } from './BannerAd';
import { AccessGate } from './AccessGate';
import { Explore } from './Explore';
import { Visits } from './Visits';
import { More } from './More';

export const AppShell: React.FC = () => {
  // The first screen on load must be Access Gate
  const [activeTab, setActiveTab] = useState<TabType>('gate');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'gate':
        return 'Access Gate';
      case 'explore':
        return 'Explore';
      case 'visits':
        return 'Visits';
      case 'more':
        return 'More';
      default:
        return 'Access Gate';
    }
  };

  return (
    // Full-bleed: the app always fills the entire viewport, exactly like an
    // installed app. No outer "phone simulator" frame, no centering, no
    // border or max-width cap on the shell itself.
    <div
      id="app-root"
      className="fixed inset-0 w-full h-full bg-white flex flex-col overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Marine Background Pattern (behind everything, does not scroll) */}
      <MarineBackground />

      {/* The blue title bar is a fixed header — it never moves. Only the
          content beneath it (the white card, the lists, etc.) scrolls. */}
      <TopHeader title={getHeaderTitle()} />

      <main
        id="screen-main-content"
        className="relative z-10 flex-1 w-full overflow-y-auto overflow-x-hidden"
      >
        {activeTab === 'gate' && <AccessGate user={CURRENT_USER} />}
        {activeTab === 'explore' && <Explore />}
        {activeTab === 'visits' && <Visits />}
        {activeTab === 'more' && <More />}
      </main>

      {/* Ad banner: fixed just above the bottom nav, outside the scroll
          area, so it never moves while the content above it scrolls. */}
      <div className="relative z-10 shrink-0 bg-white">
        <BannerAd pool={activeTab === 'gate' ? 'gate' : 'other'} />
      </div>

      {/* Bottom Navigation with 4 tabs, always fixed at the very bottom. */}
      <BottomNav activeTab={activeTab} onChangeTab={handleTabChange} />
    </div>
  );
};
