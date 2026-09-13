import React from 'react';
import { UserProfile } from '../types';
import { ProfileCard } from './ProfileCard';
import { DemoQRCode } from './DemoQRCode';

interface AccessGateProps {
  user: UserProfile;
}

export const AccessGate: React.FC<AccessGateProps> = ({ user }) => {
  return (
    <div
      id="access-gate-screen-content"
      className="w-full flex flex-col items-center select-none pt-[79px] pb-4"
    >
      {/* Main white card: full-bleed (no side margin), rounded corners,
          the profile avatar overlaps its top edge over the marine background */}
      <div
        id="access-gate-main-card"
        className="w-full bg-white rounded-[28px] pt-0 pb-6 px-[30px] flex flex-col items-center shadow-[0_1px_4px_rgba(15,23,42,0.06)]"
      >
        {/* Profile Section (avatar overlaps upward via negative margin) */}
        <ProfileCard user={user} />

        {/* Gate Section with QR Code and Countdown */}
        <div className="w-full mt-10 flex flex-col items-center">
          <DemoQRCode />
        </div>

        {/* Thin light gray horizontal line divider */}
        <div
          id="gate-card-divider"
          className="w-full border-t border-[#e0e0e0] mt-8 mb-5"
        />

        {/* Two blue pill-shaped buttons on one row */}
        <div
          id="gate-action-buttons-row"
          className="w-full grid grid-cols-2 gap-3"
        >
          <button
            id="button-invite-guest"
            type="button"
            className="w-full bg-[#106EAD] hover:bg-[#0C5A90] active:bg-[#094a78] text-white py-3.5 px-1 rounded-full text-[15px] font-bold tracking-tight text-center transition-colors focus:outline-none"
          >
            Invite a Guest
          </button>
          <button
            id="button-invite-beach"
            type="button"
            className="w-full bg-[#106EAD] hover:bg-[#0C5A90] active:bg-[#094a78] text-white py-3.5 px-1 rounded-full text-[15px] font-bold tracking-tight text-center transition-colors focus:outline-none"
          >
            Invite to Beach
          </button>
        </div>
      </div>
    </div>
  );
};

export const AccessGateScreen = AccessGate;
