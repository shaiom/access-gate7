import React from 'react';
import { ChevronRight, ScanText } from 'lucide-react';
import { EXPLORE_CATEGORIES } from '../data';

export const Explore: React.FC = () => {
  return (
    <div
      id="explore-screen-content"
      className="w-full flex flex-col px-4 pt-4 pb-4 gap-4 select-none relative"
    >
      {EXPLORE_CATEGORIES.map((category) => (
        <div
          key={category.id}
          id={`explore-cat-${category.id}`}
          className="w-full bg-white rounded-2xl overflow-hidden text-left shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            referrerPolicy="no-referrer"
            className="w-full aspect-[16/10] object-cover block"
          />
          <div className="w-full flex items-center justify-between px-4 py-4">
            <h3
              dir="auto"
              className="text-[20px] font-extrabold text-gray-900"
            >
              {category.name}
            </h3>
            <ChevronRight className="w-5 h-5 text-gray-800 shrink-0 ml-2" strokeWidth={2.5} />
          </div>
        </div>
      ))}

      {/* Floating scan shortcut, bottom-right */}
      <button
        type="button"
        aria-label="Scan"
        className="fixed right-4 bottom-[92px] z-30 w-11 h-11 rounded-2xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.18)] flex items-center justify-center"
      >
        <ScanText className="w-5 h-5 text-gray-700" strokeWidth={1.8} />
      </button>
    </div>
  );
};

export const ExploreScreen = Explore;
