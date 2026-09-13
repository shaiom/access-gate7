import React from 'react';
import { Home, LayoutGrid, Calendar, CircleEllipsis } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
}) => {
  const tabs = [
    {
      id: 'gate' as TabType,
      label: 'Access Gate',
      icon: Home,
    },
    {
      id: 'explore' as TabType,
      label: 'Explore',
      icon: LayoutGrid,
    },
    {
      id: 'visits' as TabType,
      label: 'Visits',
      icon: Calendar,
    },
    {
      id: 'more' as TabType,
      label: 'More',
      icon: CircleEllipsis,
    },
  ];

  return (
    <nav
      id="bottom-navigation"
      className="relative z-10 shrink-0 w-full bg-white border-t border-[#e5e5ea] h-[60px] flex items-center justify-around px-2 select-none"
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.id;
        const IconComponent = tab.icon;

        return (
          <button
            key={tab.id}
            id={`nav-tab-${tab.id}`}
            type="button"
            onClick={() => onChangeTab(tab.id)}
            className="flex-1 flex flex-col items-center justify-center py-1 transition-colors group focus:outline-none"
          >
            <IconComponent
              className={`w-[26px] h-[26px] mb-1 stroke-[1.7] ${
                isSelected ? 'text-[#106EAD]' : 'text-[#8e8e93]'
              }`}
            />
            <span
              className={`text-[12px] leading-tight tracking-tight ${
                isSelected
                  ? 'text-[#106EAD] font-semibold'
                  : 'text-[#8e8e93] font-normal'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export const BottomNavigation = BottomNav;
