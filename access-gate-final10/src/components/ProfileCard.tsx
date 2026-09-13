import React from 'react';
import { UserProfile } from '../types';

interface ProfileCardProps {
  user: UserProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div
      id="profile-section"
      className="w-full flex flex-col items-center select-none"
    >
      {/* Circular profile image: pulled up via negative margin so it overlaps
          the card's top edge and the marine background behind it */}
      <div
        id="profile-avatar-button"
        className="relative z-10 -mt-[54px] block"
      >
        <div
          id="profile-avatar-container"
          className="w-[92px] h-[92px] rounded-full border-[3px] border-white bg-white overflow-hidden flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
        >
          <img
            id="profile-avatar-image"
            src={user.avatarUrl || '/shaima_profile_reference.jpg'}
            alt={user.nameArabic}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.endsWith('/shaima_profile_reference.jpg')) {
                target.src = '/images/shaima_profile_reference.jpg';
              }
            }}
            className="w-full h-full object-cover object-[center_15%]"
          />
        </div>
      </div>

      {/* Arabic name centered below */}
      <div className="flex flex-col items-center mt-4">
        <h2
          id="profile-name-arabic"
          dir="rtl"
          lang="ar"
          className="text-[25px] font-extrabold text-black text-center leading-snug tracking-tight font-['Cairo',sans-serif]"
        >
          {user.nameArabic}
        </h2>

        {/* Unit information line below */}
        <p
          id="profile-unit-info"
          className="text-[15px] font-bold text-[#1a1a1a] text-center mt-1"
        >
          {user.unit}
        </p>

        {/* Role below in red */}
        <p
          id="profile-role"
          className="text-[14px] font-bold text-[#e53329] text-center mt-1"
        >
          {user.role}
        </p>
      </div>
    </div>
  );
};
