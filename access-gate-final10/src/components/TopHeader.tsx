import React from 'react';

interface TopHeaderProps {
  title: string;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ title }) => {
  return (
    <header
      id="top-header"
      className="w-full bg-[#106EAD] text-white select-none shrink-0"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="w-full h-[58px] flex items-center justify-center px-4">
        <h1
          id="header-title"
          className="text-[22px] font-extrabold text-white tracking-tight text-center"
        >
          {title}
        </h1>
      </div>
    </header>
  );
};
